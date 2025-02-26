module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(gif|ttf|eot|svg|png|woff2)$': '<rootDir>/jest.fileMock.js',
    },
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!(nanoid)/)'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
}
