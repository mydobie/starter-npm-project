# Starter NPM project

This project contains the package.json and configuration files that can be used as a base for a very basic application.

## Getting started

1. Copy the following files to the root of your project:

   - package.json
   - .eslintignore
   - lint-staged.config.js
   - utils/testCoverage.js

2. In the package.json file, remove all entries in the "dependencies" section and add your project's dependencies. Available npm packages/modules along with versions are available on the [npm website](https://www.npmjs.com/).

3. Install dependencies by running the following in the terminal in the same directory the package.json is located:

```
npm install
```

4. Run the following commands:

- `npm run lint:all` => This checks for linting.
- `npm run npmAudit` => Checks for known security issues. NOTE: npm i needs to be run first.
- `npm run test` => Runs tests.
- `npm run coverage` => Checks test coverage. NOTE: npm run test needs to be run first.

---

## Modify files ignored during linting

The `.eslintignore` file list all the files and directories that will be ignored during linting.

## Modify files ignored during test coverage

Files and directories that should not be counted during the test coverage analysis are listed in the `package.json` file in the `jest.coveragePathIgnorePatterns` array.

---

## Remove Git hooks

This application is set to prevent a commit if there are linting errors. The configuration for these git hooks are listed in the `lint-staged.config.js` file.

To remove the hooks, you need to remove the husky module by running the following in a terminal:

```
npm uninstall husky --save
```

NOTE: This will change the package.json and package.lock.json files. After the husky module is removed, the `lint-staged.config.js` file can be removed.

## Automatically fixing lint errors

Some linting errors can be automatically fixed. To attempt to fix errors, run the following in a terminal while in the same directory as the package.json file:

```
npm run lint:fixAll
```

Any issues that cannot be fixed, will be listed in the terminal.

### Attempt to fix issues as part of the git hook

You can attempt to fix any linting issues and automatically add them to any commit by modifying the `lint-staged.config.js` file.

1. Remove the `lint-staged.config.js` file.
2. Save the `lint-staged-FIX-ALL.config.js` as `lint-staged.config.js` .
