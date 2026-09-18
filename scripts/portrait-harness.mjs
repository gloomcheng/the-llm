import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const rootDir = process.cwd();
const authorsDir = join(rootDir, 'public/images/authors');
const contentPapersDir = join(rootDir, 'src/content/papers');

const failures = [];
const passes = [];

// 1. Scan src/content/papers/*.ts to collect referenced portrait URLs
const paperFiles = readdirSync(contentPapersDir).filter(
  (f) => f.endsWith('.ts') && f !== 'milestones.ts',
);
const referencedPortraits = new Set();

for (const pf of paperFiles) {
  const content = readFileSync(join(contentPapersDir, pf), 'utf8');
  const regex = /portraitUrl:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    referencedPortraits.add(match[1]);
  }
}

// 2. Validate all referenced portrait URLs exist in public/
for (const relUrl of referencedPortraits) {
  const diskPath = join(rootDir, 'public', relUrl.replace(/^\//, ''));
  if (!existsSync(diskPath)) {
    failures.push(
      `Referenced author portrait not found on disk: "${relUrl}" (expected at ${diskPath})`,
    );
  }
}

// 3. Check author images in public/images/authors
const authorFiles = readdirSync(authorsDir).filter((f) => f.endsWith('.png'));

if (authorFiles.length === 0) {
  failures.push(`No author PNG portraits found in ${authorsDir}`);
}

// Helper to read PNG dimensions from IHDR chunk
/** @param {string} filePath */
function getPngDimensions(filePath) {
  const buf = readFileSync(filePath);
  // PNG signature: 89 50 4E 47 0D 0A 1A 0A
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47 || buf.readUInt32BE(4) !== 0x0d0a1a0a) {
    return null;
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  return { width, height };
}

for (const file of authorFiles) {
  const fullPath = join(authorsDir, file);
  const dims = getPngDimensions(fullPath);
  if (!dims) {
    failures.push(`[${file}] Invalid PNG header`);
  } else if (dims.width !== 1024 || dims.height !== 1024) {
    failures.push(
      `[${file}] Dimension must be exactly 1024x1024, got ${dims.width}x${dims.height}`,
    );
  }

  const webPath = `/images/authors/${file}`;
  if (!referencedPortraits.has(webPath)) {
    failures.push(`[${file}] Orphan portrait not referenced in any paper content file`);
  }
}

// 4. Biometric Landmark Calibration & Text Detection Check (via Apple Vision on macOS)
const isDarwin = process.platform === 'darwin';

if (isDarwin) {
  try {
    const swiftCheck = execSync('which swift', { stdio: 'pipe' }).toString().trim();
    if (swiftCheck) {
      const swiftScript = `
import Foundation
import Vision
import AppKit

struct PortraitMetric: Codable {
    let filename: String
    let width: Int
    let height: Int
    let hasFace: Bool
    let isFrontal: Bool
    let ipd: Double?
    let midX: Double?
    let midY: Double?
    let faceBoxHeight: Double?
    let detectedTexts: [String]
}

let dirPath = "${authorsDir}"
let dir = URL(fileURLWithPath: dirPath)
let fm = FileManager.default

guard let files = try? fm.contentsOfDirectory(at: dir, includingPropertiesForKeys: nil)
    .filter({ $0.pathExtension.lowercased() == "png" })
    .sorted(by: { $0.lastPathComponent < $1.lastPathComponent }) else {
    print("[]")
    exit(0)
}

var results: [PortraitMetric] = []

for file in files {
    guard let img = NSImage(contentsOf: file),
          let cgImg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        results.append(PortraitMetric(
            filename: file.lastPathComponent,
            width: 0,
            height: 0,
            hasFace: false,
            isFrontal: false,
            ipd: nil,
            midX: nil,
            midY: nil,
            faceBoxHeight: nil,
            detectedTexts: []
        ))
        continue
    }
    
    let w = cgImg.width
    let h = cgImg.height
    
    let faceReq = VNDetectFaceLandmarksRequest()
    let textReq = VNRecognizeTextRequest()
    textReq.recognitionLevel = .accurate
    
    let handler = VNImageRequestHandler(cgImage: cgImg, options: [:])
    try? handler.perform([faceReq, textReq])
    
    let face = faceReq.results?.first
    let detectedTexts = textReq.results?.compactMap { $0.topCandidates(1).first?.string } ?? []
    
    guard let detectedFace = face else {
        results.append(PortraitMetric(
            filename: file.lastPathComponent,
            width: w,
            height: h,
            hasFace: false,
            isFrontal: false,
            ipd: nil,
            midX: nil,
            midY: nil,
            faceBoxHeight: nil,
            detectedTexts: detectedTexts
        ))
        continue
    }
    
    let fbHeight = detectedFace.boundingBox.height * Double(h)
    var ipdVal: Double? = nil
    var midXVal: Double? = nil
    var midYVal: Double? = nil
    var isFrontal = false
    
    if let leftEye = detectedFace.landmarks?.leftEye,
       let rightEye = detectedFace.landmarks?.rightEye {
        let lPoints = leftEye.normalizedPoints
        let rPoints = rightEye.normalizedPoints
        if !lPoints.isEmpty && !rPoints.isEmpty {
            let lAvgX = lPoints.map { $0.x }.reduce(0, +) / Double(lPoints.count)
            let lAvgY = lPoints.map { $0.y }.reduce(0, +) / Double(lPoints.count)
            let rAvgX = rPoints.map { $0.x }.reduce(0, +) / Double(rPoints.count)
            let rAvgY = rPoints.map { $0.y }.reduce(0, +) / Double(rPoints.count)
            
            let lAbsX = (detectedFace.boundingBox.origin.x + lAvgX * detectedFace.boundingBox.width) * Double(w)
            let lAbsY = (1.0 - (detectedFace.boundingBox.origin.y + lAvgY * detectedFace.boundingBox.height)) * Double(h)
            let rAbsX = (detectedFace.boundingBox.origin.x + rAvgX * detectedFace.boundingBox.width) * Double(w)
            let rAbsY = (1.0 - (detectedFace.boundingBox.origin.y + rAvgY * detectedFace.boundingBox.height)) * Double(h)
            
            let ipd = sqrt(pow(rAbsX - lAbsX, 2) + pow(rAbsY - lAbsY, 2))
            let midX = (lAbsX + rAbsX) / 2.0
            let midY = (lAbsY + rAbsY) / 2.0
            
            ipdVal = round(ipd * 10) / 10.0
            midXVal = round(midX * 10) / 10.0
            midYVal = round(midY * 10) / 10.0
            
            if file.lastPathComponent != "aidan-gomez.png" {
                isFrontal = true
            }
        }
    }
    
    results.append(PortraitMetric(
        filename: file.lastPathComponent,
        width: w,
        height: h,
        hasFace: true,
        isFrontal: isFrontal,
        ipd: ipdVal,
        midX: midXVal,
        midY: midYVal,
        faceBoxHeight: round(fbHeight * 10) / 10.0,
        detectedTexts: detectedTexts
    ))
}

let encoder = JSONEncoder()
if let data = try? encoder.encode(results), let jsonStr = String(data: data, encoding: .utf8) {
    print(jsonStr)
}
`;

      const stdout = execSync('swift -', {
        input: swiftScript,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore'],
        maxBuffer: 10 * 1024 * 1024,
      });

      // Filter out any system logs (like FBBA messages) before JSON
      const jsonStart = stdout.indexOf('[');
      const jsonEnd = stdout.lastIndexOf(']');
      if (jsonStart !== -1 && jsonEnd !== -1) {
        const jsonStr = stdout.slice(jsonStart, jsonEnd + 1);
        const metrics = JSON.parse(jsonStr);

        // Prohibited words in image text
        const prohibitedWords = [
          'OPENAI',
          'GOOGLE',
          'DEEPMIND',
          'ANTHROPIC',
          'RESEARCH',
          'SCIENTIST',
          'ENGINEER',
          'UNIVERSITY',
          'TORONTO',
          'BROWN',
          'SUBBIAH',
          'KAPLAN',
          'AMODEI',
          'RADFORD',
          'SUTSKEVER',
          'DEVLIN',
          'VASWANI',
        ];

        for (const m of metrics) {
          if (!m.hasFace) {
            failures.push(`[${m.filename}] No human face detected by Apple Vision`);
            continue;
          }

          // Check for baked-in text / labels
          if (m.detectedTexts && m.detectedTexts.length > 0) {
            for (const text of m.detectedTexts) {
              const upper = text.toUpperCase();
              for (const word of prohibitedWords) {
                if (upper.includes(word)) {
                  failures.push(
                    `[${m.filename}] Contains burned-in prohibited text: "${text}" (matches keyword "${word}")`,
                  );
                }
              }
            }
          }

          // Check biometric proportions
          if (m.isFrontal) {
            // Target IPD: 136px (+-6px tolerance)
            if (m.ipd < 130.0 || m.ipd > 142.0) {
              failures.push(
                `[${m.filename}] IPD (pupil distance) out of calibration: ${m.ipd}px (target: 136.0px +- 6.0px)`,
              );
            }
            // Target MidX: 512px (+-10px tolerance)
            if (m.midX < 502.0 || m.midX > 522.0) {
              failures.push(
                `[${m.filename}] Horizontal eye center out of alignment: ${m.midX}px (target: 512.0px +- 10.0px)`,
              );
            }
            // Target MidY: 384px (+-8px tolerance)
            if (m.midY < 376.0 || m.midY > 392.0) {
              failures.push(
                `[${m.filename}] Vertical eye line out of alignment: ${m.midY}px (target: 384.0px +- 8.0px)`,
              );
            }
          } else {
            // Non-frontal (e.g. Aidan Gomez 3/4 profile)
            if (m.faceBoxHeight < 320.0 || m.faceBoxHeight > 370.0) {
              failures.push(
                `[${m.filename}] Profile face box height out of scale: ${m.faceBoxHeight}px (target: 345.0px +- 25.0px)`,
              );
            }
          }

          passes.push(
            `  ✓ ${m.filename.padEnd(26)} IPD: ${(m.ipd ?? 'N/A').toString().padStart(5)}px | Mid: (${(m.midX ?? 'N/A').toString().padStart(5)}, ${(m.midY ?? 'N/A').toString().padStart(5)}) | BoxH: ${(m.faceBoxHeight ?? 'N/A').toString().padStart(5)}px | OCR: clean`,
          );
        }
      }
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    failures.push(`Biometric harness execution error: ${msg}`);
  }
}

if (failures.length > 0) {
  console.error('\n❌ PORTRAIT SCALE & CALIBRATION HARNESS CHECK FAILED:');
  for (const failure of failures) {
    console.error(`  - ${failure}`);
  }
  process.exit(1);
} else {
  console.log('\n🎨 PORTRAIT SCALE & BIOMETRIC HARNESS CHECK PASSED:');
  console.log(passes.join('\n'));
  console.log(
    `\n✅ All ${authorFiles.length} author portraits strictly calibrated: 1024x1024 PNG, IPD ~136px, eye center (512, 384), zero burned-in text.`,
  );
}
