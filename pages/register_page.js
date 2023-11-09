export class registerPage{

    weblocators = {
        myAccountTb:'a[title="My Account"] span[class="hidden-xs hidden-sm hidden-md"]',

        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continueBtn: '.btn.btn-primary',
    }

    openRegisterPage() {

        cy.visit(Cypress.env('registerURL'))
    }

    enterFirstName(FName) {

        cy.get(this.weblocators.firstName).type(FName)
    }

    enterlastName(LName) {

        cy.get(this.weblocators.lastName).type(LName)
    }

    enterEmail(email) {

        cy.get(this.weblocators.email).type(email)
    }

    enterTelephone(phoneNo) {

        cy.get(this.weblocators.telephone).type(phoneNo)
    }

    enterPassword(password) {

        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.passwordConfirm).type(password)

    }

    selectCheckbox() {

        cy.get(this.weblocators.policyCheckbox).check()
    }

    clickOnContinue() {
        cy.get(this.weblocators.continueBtn).click()
    }       
}