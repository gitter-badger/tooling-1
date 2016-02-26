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


## Which branch do I pick?
Context | Branch | Status
------------ | ------------- | -------------
Bare/Base | master | ready
Framework agnostic | agnostic | coming soon
AngularJS (1.x) | angularjs | coming soon
SAP/Open UI5 | ui5 | coming soon

## Commands
Command | Description
------------ | -------------
npm run lint | Lint the project's JavaScript sources
npm run serve | Serve the development build of the project on the webpack development server
npm run buildDev | Build the development version of the project
npm run build | Build the production version of the project

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
- [ ] Optimize extraction of modules that are required by two or more other modules
- [ ] Add CSS/SASS/Stylus/LESS linting
- [ ] Add CSS minification
- [ ] Add HTML linting
- [ ] Add HTML minification
- [ ] Add framework specific examples / starter projects

## Questions?
Hit me up on gitter
