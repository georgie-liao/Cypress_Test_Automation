export class registerPage{

    //Element locators
    weblocators = {
        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continueBtn: '.btn.btn-primary',
    }

    //Open register page
    openRegisterPage() {
        cy.visit(Cypress.env('registerURL'))
    }

    //Enter first name
    enterFirstName(FName) {
        cy.get(this.weblocators.firstName).type(FName)
    }

    //Enter last name
    enterlastName(LName) {
        cy.get(this.weblocators.lastName).type(LName)
    }

    //Enter email
    enterEmail(email) {
        cy.get(this.weblocators.email).type(email)
    }

    //Enter phone number
    enterTelephone(phoneNo) {
        cy.get(this.weblocators.telephone).type(phoneNo)
    }

    //Enter password
    enterPassword(password) {
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)
    }

    //Tick the checkbox
    selectCheckbox() {
        cy.get(this.weblocators.policyCheckbox).check()
    }

    //Cilck continue button to submit register
    clickOnContinue() {
        cy.get(this.weblocators.continueBtn).click()
    }       
}