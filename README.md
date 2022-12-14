### Cypress Automation Project
Cypress project (Final)

### Dependencies
1. NodeJS v12, v14 or above
3. NPM v6 or above
3. Chrome browser

## Getting Started
Clone the repository & install dependencies
```sh
$ git clone 
$ cd to project
$ npm install
```
# Folder Structure
- **cypress/e2e/data:** This file contains data used by this project.
- **cypress/e2e/page:** Page object files which include element selectors and functions that are used in tests.
- **cypress/e2e/test:** Test files which include the actual tests.

# Execute tests
Execute the Cypress GUI

```npx cypress open```

Execute the Cypress via commandline

```npx cypress run```

Executes all tests in the Chrome browser and generates a Mochawesome report.

```npm run test``` 

# Execute tests in a different browser
```npx cypress run --browser firefox```

***N.B. The browser must be installed on the device.***

# Execute a specific test file

Without Report

```npx cypress run --spec cypress/e2e/test/```

OR

With Report

```npm run test:spec cypress/e2e/test/```
