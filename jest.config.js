module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)(spec|test).ts"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
};
