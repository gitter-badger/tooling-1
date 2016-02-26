# Tooling starter project

## Replace the following placeholders throughout the project:
Placeholder | Description | Example
------------ | ------------- | -------------
_PROJECT_NAME_ | The name of the project. | Tooling
_PROJECT_DESCRIPTION_ | Short description of the project. | Bare starter project equipped with modular tasks
_PROJECT_ENTRY_POINT_ | Entrypoint of the application. | index.html or NodeJS entrypoint
_REPO_URL_ | URL to this git repository. | https://github.com/nvanmeurs/tooling.git
_AUTHOR_ | Author of the project in NAME <EMAIL> format. | Nicky van Meurs < nvmeurs@outlook.com >
_LICENSE_ | License. | MIT or GPL

## Commands
Command | Description
------------ | -------------
npm run lint | Lint the project's JavaScript sources
npm run serve | Serve the development build of the project on the webpack development server
npm run buildDev | Build the development version of the project
npm run build | Build the production version of the project

## Usage tips
* Use NPM to install libraries over Bower for usage and performance benefits
* Install an ESLint plugin into your IDE of choice (it read the rules from .eslintrc)
* Install an EditorConfig plugin into your IDE of choice (it will make sure the IDE behaves in the same way for all project members)

## Which branch do I pick?
Context | Branch | Status
------------ | ------------- | -------------
Bare/Base | master | ready
Framework agnostic | agnostic | coming soon
AngularJS (1.x) | angularjs | coming soon
SAP/Open UI5 | ui5 | coming soon

## Status
- [x] Compiles LESS/SASS/Stylus
- [x] Import (preprocessed) stylesheets into modules
- [x] Import JSON files into modules (returns JSON Object)
- [x] Import Image files into stylesheet and HTML (Returns data blob or url to file based on the file size)
- [x] Compiles ES2015/React to ES5
- [x] ES2015/ES5 linting using ESLint
- [x] Generates sourcemaps (using eval in development, using sourcemap files during production)
- [x] Uglifies scripts
- [x] Development server that watches the filesystem for changes and replaces modules on the fly
- [ ] Add JSCS for JavaScript code style checking (Code style open for discussion)
- [ ] Discuss ESLint rules
- [ ] Optimize extraction of modules that are required by two or more other modules
- [ ] Add CSS/SASS/Stylus/LESS linting
- [ ] Add CSS minification
- [ ] Add HTML linting
- [ ] Add HTML minification
- [ ] Add framework specific examples / starter projects

## How do I structure my project?
### You are free to structure your project in anyway you want as long as you have
* src/ (contains the project's source code)
  * vendor/ (contains vendor libraries that are not available on NPM nor Bower)
  * index.html (HTML entrypoint / Main template)
  * index.js (JavaScript entrypoint / Main module)
  * index.dev.js (Development helpers for Webpack)
* .babelrc (Babel settings)
* .bowerrc (Bower settings)
* .editorconfig (IDE settings)
* .eslintignore (ESLint ignored files)
* .eslintrc (ESLint linting rules)
* .gitattributes (Git settings)
* .gitignore (Git ignored files/folders)
* bower.json (Bower dependencies)
* package.json (Project settings / NPM dependencies and scripts)
* webpack.config.dev.js (Webpack development configuration)
* webpack.config.prod.js (Webpack production configuration)

### Example
![How to structure my project](https://raw.githubusercontent.com/nvanmeurs/tooling/master/docs/Structure.png)

## How do I work with modules?
### Exporting
![How to export modules](https://raw.githubusercontent.com/nvanmeurs/tooling/master/docs/Exports.png)

### Importing
![How to import modules](https://raw.githubusercontent.com/nvanmeurs/tooling/master/docs/Imports.png)

## Questions?
Hit me up on gitter
