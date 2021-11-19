module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.json',
        diagnostics: {
          warnOnly: false,
        },
      },
    },
    transform: {
      '\\.[jt]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        "node_modules/(?!(@?react-native|react-native-maps|@react-navigation|react-native-vector-icons)/)"
    ],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/.(ts|tsx)", "!src/Store/**/*.ts"],
  };