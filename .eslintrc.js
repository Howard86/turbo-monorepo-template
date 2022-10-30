/** @type{import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: ["org"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
