module.exports = {
	collectCoverageFrom: ['**/src/**/?*.(js|ts)', '!**/src/**/?*.d.ts'],
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.test.json',
		},
	},
	moduleFileExtensions: ['js', 'json', 'ts'],
	testEnvironment: 'node',
	testMatch: ['**/src/**/?*.spec.(js|ts)'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	verbose: true,
};
