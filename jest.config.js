module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/react-native/dont-cleanup-after-each'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
}
