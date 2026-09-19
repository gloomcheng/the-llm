import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gloomcheng.github.io',
  base: '/the-llm',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'directory',
  },
  redirects: {
    '/papers/gpt-1': '/papers/improving-language-understanding-by-generative-pre-training',
    '/papers/bert':
      '/papers/bert-pre-training-of-deep-bidirectional-transformers-for-language-understanding',
    '/papers/gpt-2': '/papers/language-models-are-unsupervised-multitask-learners',
    '/papers/scaling-laws': '/papers/scaling-laws-for-neural-language-models',
    '/papers/gpt-3': '/papers/language-models-are-few-shot-learners',
    '/papers/chinchilla': '/papers/training-compute-optimal-large-language-models',
    '/papers/instructgpt':
      '/papers/training-language-models-to-follow-instructions-with-human-feedback',
    '/papers/llama': '/papers/llama-open-and-efficient-foundation-language-models',
    '/papers/dpo':
      '/papers/direct-preference-optimization-your-language-model-is-secretly-a-reward-model',
    '/papers/vit':
      '/papers/an-image-is-worth-16x16-words-transformers-for-image-recognition-at-scale',
    '/papers/clip': '/papers/learning-transferable-visual-models-from-natural-language-supervision',
    '/papers/latent-diffusion':
      '/papers/high-resolution-image-synthesis-with-latent-diffusion-models',
    '/papers/llava': '/papers/visual-instruction-tuning',
    '/papers/var':
      '/papers/visual-autoregressive-modeling-scalable-image-generation-via-next-scale-prediction',
  },
});
