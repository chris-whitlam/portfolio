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
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: ['**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '@atoms': '<rootDir>/src/components/atoms',
    '@atoms/(.*)': '<rootDir>/src/components/atoms/$1',
    '@organisms': '<rootDir>/src/components/organisms',
    '@organisms/(.*)': '<rootDir>/src/components/organisms/$1',
    '@molecules': '<rootDir>/src/components/molecules',
    '@molecules/(.*)': '<rootDir>/src/components/molecules/$1',
    '@templates': '<rootDir>/src/components/templates',
    '@templates/(.*)': '<rootDir>/src/components/templates/$1',
    '@pages': '<rootDir>/src/pages',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@styles': '<rootDir>/src/styles',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@hooks': '<rootDir>/src/hooks',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@utils': '<rootDir>/src/utils',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@types': '<rootDir>/src/types',
    '@types/(.*)': '<rootDir>/src/types/$1',
    '@graphql': '<rootDir>/src/graphql',
    '@graphql/(.*)': '<rootDir>/src/graphql/$1',
    '@test/(.*)': '<rootDir>/test/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
};
