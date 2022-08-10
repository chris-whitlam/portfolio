module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      compilerHost: true,
      isolatedModules: true
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '@utils': '<rootDir>/src/utils',
    '@utils/(.*)': '<rootDir>/src/utils/$1'
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/*.test.ts'],
  testEnvironment: 'node',
  reporters: ['default'],
  setupFiles: ['./jest.setup.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  maxWorkers: 2
};
