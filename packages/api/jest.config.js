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
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
  testMatch: ['**/*.(unit|integration).test.ts'],
  testEnvironment: 'node',
  reporters: ['default'],
  setupFiles: ['./jest.setup.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '@utils': '<rootDir>/src/utils',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@services': '<rootDir>/src/services',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@middleware': '<rootDir>/src/middleware',
    '@middleware/(.*)': '<rootDir>/src/middleware/$1'
  }
};
