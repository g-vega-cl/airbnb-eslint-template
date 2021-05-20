module.exports = {
  linters: {
    "**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue|tsx|jsx)": [
      "eslint --fix",
      "prettier --write",
      "jest --findRelatedTests",
      "git add",
    ],
  },
};
