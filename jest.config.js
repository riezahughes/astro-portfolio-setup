/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	setupFilesAfterEnv: ["./jest.setup.ts"],
	transform: {
		".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
	}
};
