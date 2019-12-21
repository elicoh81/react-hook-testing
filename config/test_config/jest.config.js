module.exports = {
  rootDir: '../../', 
  transformIgnorePatterns: ['/node_modules/'],
  preset: "ts-jest",
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  collectCoverage: true
};