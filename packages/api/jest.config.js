module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      compilerHost: true,
      isolatedModules: true
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/*.test.ts'],
  testEnvironment: 'node',
  reporters: ['default'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  maxWorkers: 2
};
