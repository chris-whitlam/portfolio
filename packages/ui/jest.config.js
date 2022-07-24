modules.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "^@atoms(.*)$": "<rootDir>/src/components/$1",
    
  }
}