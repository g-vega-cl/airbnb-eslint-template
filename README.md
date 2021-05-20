# airbnb-eslint-template

ESLint with AirBnB rules. This template is intended to serve as a base for future projects.
This includes react and nodejs
The ruleset is mantained by AirBnB [here](https://github.com/airbnb/javascript).

## Setup steps

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
