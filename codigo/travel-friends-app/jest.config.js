module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*',
    '!src/**/index.ts',
    '!src/**/*.styled.ts',
    '!src/**/*.styled.tsx',
  ],
  testPathIgnorePatterns: ['.mock.js', '.mock.ts'],
  resetMocks: false,
  setupFiles: ['./src/utils/reactNativeLibrariesJestMock.js'],
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['.mock.js', '.mock.ts'],
  moduleNameMapper: {
    '.+\\.(png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
};
