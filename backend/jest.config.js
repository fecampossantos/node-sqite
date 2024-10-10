module.exports = {
  // preset: 'ts-jest',
  testEnvironment: "node",
  // resetModules: true,
  testPathIgnorePatterns: ["/node_modules/", "./build"],
  collectCoverageFrom: ["src/**/*.{ts,js}", "!src/app.ts", "!**/*.d.ts"],

  coverageThreshold: {
    global: {
      functions: 75,
      statements: 75,
      branches: 75,
      lines: 85,
    },
  },
};
