module.exports = {
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    eqeqeq: "off",
    curly: "error",
    quotes: ["error", "double"],
  },
};
