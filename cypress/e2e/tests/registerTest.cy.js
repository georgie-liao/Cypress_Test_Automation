import { registerPage } from "../../../pages/register_page"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'
import testData from '../../fixtures/testData.json'
import { faker } from '@faker-js/faker';

describe('register testing', () => {

    /*
    Negative Testing: Register using an existing email account should fail and there should be a message:  
    "Warning: E-Mail Address is already registered!"
    */
    it('Negative Testing', () => {
        registerObj.openRegisterPage()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterlastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
        registerObj.verifyAlertMessage().should('contain', testData.message.registerFailedMessage)
    })

    /*
    Postive Testing: Register using faker dynamicly generated account should success and there should be a message:  
    "Your Account Has Been Created!"
    */
    it('Postive Testing', () => {
        //create passwrod variable so it can be used for both password and confirm password inputs.
        let password = faker.internet.password();

        registerObj.openRegisterPage()
        registerObj.enterFirstName(faker.person.firstName())
        registerObj.enterlastName(faker.person.lastName())
        registerObj.enterEmail(faker.internet.email())
        registerObj.enterTelephone(faker.phone.number())
        registerObj.enterPassword(password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
        registerObj.verifySuccessfulMessage().should('contain', testData.message.registerSuccessfulMessage)
    })

})