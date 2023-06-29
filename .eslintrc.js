module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'prettier',
    'plugin:styled-components-a11y/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'styled-components-a11y'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
}
