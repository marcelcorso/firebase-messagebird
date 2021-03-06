module.exports = {
  projects: ["<rootDir>/*/jest.config.js"],
  testPathIgnorePatterns: [
    ".*/bin/",
    ".*/lib/",
    // Ignoring otherwise tests duplicate due to Jest `projects`
    ".*/__tests__/.*.ts",
  ],
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/exts-test-data/**",
  ],
  maxConcurrency: 10,
};