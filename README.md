# Cypress_Test_Automation


---
Overview

Cypress_Test_Automation is a comprehensive test automation framework developed using Cypress, featuring a customized hybrid test architecture. This framework integrates the Cypress.io automation tool with Page Object Model (POM), Data-Driven, and Keyword-Driven approaches. Primarily designed for demonstrating best practices, the suite rigorously tests fundamental functionalities of the Open Cart application (https://naveenautomationlabs.com/opencart/).


---
Key Features

This test automation suite covers various end-to-end scenarios:

001-registerTest: Register User Tests - positive testing using valid data, negative testing using invalid data.

002-loginTest: User Login Tests - positive testing using valid data, negative testing using invalid data.

003-orderTest: Placing Order Tests.

...more tests are to be added...


---
Tools and Dependencies

Cypress.io: A modern test automation tool for web applications.

Cypress Cloud: Enables running tests in a browser to scale test runs, replay tests, debug failed tests, and enhance CI integration.

GitHub: Utilized for Git version control and CI/CD pipeline.

JavaScript: The scripting language employed for this test suite.

Mochawesome Reporter: Generates HTML reports for detailed test results.

Fakerjs: Facilitates the generation of dynamic test data.


---
Project Structure

.github/workflows/: GitHub CI/CD pipeline configuration.

cypress/e2e/tests/: Contains test scripts for various scenarios.

cypress/fixtures/: Stores test data used in the test cases.

cypress.config.js: Configuration file for the test suite.

cypress/support/commands.js: Centralized location for custom commands used in the tests.

pages/: Includes pages with element locators and actions, organized in the Page Object Model (POM) fashion.

cypress-mochawesome-reporter: Utilized for generating and viewing detailed test reports.

