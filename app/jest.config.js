module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],
  coverageThreshold: {
    global: {
      branch: 95,
      function: 95,
      lines: 95,
      statements: 95
    }
  },
  maxWorkers: "50%",
  testEnvironment: "node",
  watchPathIgnorePatterns: [
    "node_modules"
  ]
}
