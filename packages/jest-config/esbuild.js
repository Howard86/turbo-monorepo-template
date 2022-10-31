/** @type {import('jest').Config} */
const config = {
  ...require('./common'),
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest',
    '^.+\\.tsx?$': 'esbuild-jest',
  },
}

module.exports = config
