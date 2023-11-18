export class loginPage {

    //Element locators
    weblocators = {
        email: '#input-email',
        password: '#input-password',
        loginBtn: 'input[value="Login"]',
        logoutBtn: 'a:nth-child(13)',
        continueBtn: '.btn.btn-primary',
        alertMessage: '.alert.alert-danger.alert-dismissible'
    }

    //Open register page
    openLoginPage() {
        cy.visit(Cypress.env('loginURL'))
    }

    //Enter email
    enterEmail(email) {
        cy.get(this.weblocators.email).type(email)
    }

    //Enter password
    enterPassword(password) {
        cy.get(this.weblocators.password).type(password)
    }

    //Click on Login button
    clickLogin() {
        cy.get(this.weblocators.loginBtn).click();
    }

    //Verify login successful
    getpageURL(){
        return cy.url()
    }

    //Click on Logout button
    clickLogout(){
        cy.get(this.weblocators.logoutBtn).click()
    }

    //Confirm logout by clicking the Continiue button
    clickContinueBtn(){
        cy.get(this.weblocators.continueBtn).click()
    }

    //Get login failed alert message
    getAlertMessage(){
        return cy.get(this.weblocators.alertMessage)
    }
}