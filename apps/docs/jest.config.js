const config = require('@org/jest-config/common')
const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

module.exports = createJestConfig({ ...config, setupFilesAfterEnv: ['./jest.setup.js'] })
