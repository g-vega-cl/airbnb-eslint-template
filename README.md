# airbnb-eslint-template

ESLint with AirBnB rules. This template is intended to serve as a base for future projects.
This includes react and nodejs
The ruleset is mantained by AirBnB [here](https://github.com/airbnb/javascript).

## Linter setup steps

1. Install ESLint and Prettier in VSCode.
2. yarn init
3. `yarn add eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node --dev`
4. Go to airbnb package [yarn](https://yarnpkg.com/package/eslint-config-airbnb) do: `npx install-peerdeps --dev eslint-config-airbnb`
5. For [typescript](https://yarnpkg.com/package/eslint-config-airbnb-typescript) go to the link and follow the instructions. Note that the instructions are in npm. To transform them to YARN. change npm install to yarn add. And --save-dev to --dev
6. Create config files. First we create .prettierrc To configure it see options [here](https://prettier.io/docs/en/options.html).
7. Install eslint globally. `yarn add eslint`
8. eslint --init
9. .eslintrc.json is created. Here in rules: {} you can add the rules. [Here](https://eslint.org/docs/rules/) is a list of rules
10. in .eslintrc.json, we add prettier to extends and plugins.
11. Done! We can now add any rules we want

## Git hooks and husky setup

[Setting up git hooks manually can be tricky. And they can be difficult to distribute because you can't check them in to source control](youtube.com/watch?v=oLxuu7kBZWg#t=300s). That's why we use Husky!

With Husky we use our package.json to specify what we will run.
We also use `lint-staged`. This tool allows us to run certain scripts against any files added to the git stage (any files you use `git add` on)

1. `yarn add --dev lint-staged husky`
2. We create lint-staged.config.js and configure it.
3. Add husky to package.json and add the precommit hook.
4.
