module.exports = {
  '**/*.{md,json}': ['prettier --write'],
  '**/*.{js,mjs,ts,tsx}': ['eslint --fix'],
}
