module.exports = {
  extends: ['react-app'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['react'],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      },
    }
  },
};
