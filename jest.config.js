module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],

  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"], // ignores test files in .next(js) & node modules

  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
};
