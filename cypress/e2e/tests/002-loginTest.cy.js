import testData from '../../fixtures/testData.json'
import { faker } from '@faker-js/faker';
import { loginPage } from "../../../pages/login_page"
const loginObj = new loginPage()

describe('Login testing', () => {

    /*
    Postive Testing: 
    1. Login should  be successful with valid credential and the web page should switch to the User Account page.
    2. Logout should  be successful when clicking on the Logout button and the web page should switch to the Home page.
    */
    it('Postive Testing', () => {
        loginObj.openLoginPage()
        loginObj.enterEmail(testData.login.email)
        loginObj.enterPassword(testData.login.password)
        loginObj.clickLogin()
        loginObj.getpageURL().should('contain', '/account')
        loginObj.clickLogout()
        loginObj.clickContinueBtn()
        loginObj.getpageURL().should('contain', '/home')
    })

    /*
    Negative Testing - invalid user email:
    Login should fail with valid password but invalid user email and there should be an alert message:
    " Warning: No match for E-Mail Address and/or Password."
    */
    it('Negative Testing - invalid user email', () => {
        loginObj.openLoginPage()
        loginObj.enterEmail(faker.internet.email())
        loginObj.enterPassword(testData.login.password)
        loginObj.clickLogin()
        loginObj.getAlertMessage().should('contain',' Warning: No match for E-Mail Address and/or Password.')
    })

    /*
    Negative Testing - invalid password:
    Login should fail with valid email but invalid password and there should be an alert message:
    " Warning: No match for E-Mail Address and/or Password."
    */
    it('Negative Testing - invalid password', () => {
        loginObj.openLoginPage()
        loginObj.enterEmail(testData.login.email)
        loginObj.enterPassword(faker.internet.password())
        loginObj.clickLogin()
        loginObj.getAlertMessage().should('contain',' Warning: No match for E-Mail Address and/or Password.')
    })

    /*
    Negative Testing - invalid user and password:
    Login should fail with invalid email but invalid password and there should be an alert message:
    " Warning: No match for E-Mail Address and/or Password."
    */
    it('Negative Testing - invalid user and password', () => {
        loginObj.openLoginPage()
        loginObj.enterEmail(faker.internet.email())
        loginObj.enterPassword(faker.internet.password())
        loginObj.clickLogin()
        loginObj.getAlertMessage().should('contain',' Warning: No match for E-Mail Address and/or Password.')
    })
})

