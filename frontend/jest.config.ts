import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  // ignore
  modulePathIgnorePatterns: ['./build/'],
  // cache
  cacheDirectory: './cache/jest',
  // coverage settings
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text'],
};

export default config;
