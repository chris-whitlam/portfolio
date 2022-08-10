module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      compilerHost: true,
      isolatedModules: true
    }
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/*.(unit|integration).test.ts'],
  testEnvironment: 'node',
  reporters: ['default'],
  setupFiles: ['./jest.setup.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  maxWorkers: 2,
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '@utils': '<rootDir>/src/utils',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@services': '<rootDir>/src/services',
    '@services/(.*)': '<rootDir>/src/services/$1'
  }
};
