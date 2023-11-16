# Cypress_Test_Automation
Test automation using Cypress with JavaScript, Page Obejct Model (POM).

Description:
The Cypress_Test_Automation is a test automation framework that utilizes a customized hybrid test architecture, incorporating the Cypress.io automaiton framework Page Object Model (POM), Data-Driven, and Keyword-Driven approaches. The suite rigorously tests the fundamental functionalities of the Open Cart application (https://naveenautomationlabs.com/opencart/) and is primarily designed for demonstration purposes.

These tests cover end-to-end scenarios:

001.registerTest: User Registration Tests
002.orderTest: Place Orders Tests
...more tests are being added...

Test Automation Tools:
Cypress: A morden test automation tool for web applications.
JavaScript: The scripting language used for this test suite.

Project Structure:
.github\workflows: github CI/CD pipelines yml files
cypress\e2e\tests: test used in the tests.
cypress\fixtures: Test data used in the tests.
cypress.config.js: configuration file for the test suite.
cypress\support\commands.js: Commands used in the tests.
pages: pages with element locators and actions written in Page Object Model (POM).
cypress-mochawesome-reporter: test report used in this test suite.

---end---