export type EvidenceKind =
  'paper' | 'institutional-article' | 'interview' | 'authorial-account' | 'later-history';

export type Confidence = 'direct' | 'corroborated' | 'inference' | 'unknown';
export type EpistemicStatus = 'documented' | 'inference' | 'unknown';

export interface SourceRecord {
  id: string;
  kind: EvidenceKind;
  title: string;
  publisher: string;
  published?: string;
  accessed: string;
  url: string;
  supports: string[];
  limits: string;
}

export interface AuthorBrief {
  name: string;
  affiliationAtPublication: string;
  roleInPaper: string;
  verifiedContext: string;
  evidenceIds: string[];
  confidence: Confidence;
  unknowns: string[];
}

export interface MotivationClaim {
  id: string;
  claim: string;
  explanation: string;
  status: EpistemicStatus;
  confidence: Confidence;
  evidenceIds: string[];
}

export interface PaperRecord {
  id: string;
  researchStatus: 'research-draft' | 'published';
  lastChecked: string;
  coverageNote: string;
  title: string;
  chineseTitle: string;
  year: number;
  submitted: string;
  venue: string;
  pages?: string;
  arxivId: string;
  doi: {
    value: string;
    url: string;
    status: 'verified' | 'secondary-catalogue' | 'not-found';
    verificationNote: string;
    sourceId: string;
  };
  authors: string[];
  authorBriefs: AuthorBrief[];
  abstractSummary: string;
  historicalQuestion: string;
  motivationClaims: MotivationClaim[];
  unknowns: string[];
  sourceIds: string[];
}
