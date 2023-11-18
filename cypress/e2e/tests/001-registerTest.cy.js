import testData from '../../fixtures/testData.json'
import { faker } from '@faker-js/faker';
import { registerPage } from "../../../pages/register_page"
const registerObj = new registerPage()

describe('register testing', () => {

    /*
    Positive Testing: Register using faker dynamicly generated account should success and there should be a message:  
    "Your Account Has Been Created!"
    */
    it('Positive Testing', () => {
        //create passwrod variable so it can be used for both password and confirm password inputs.
        let password = faker.internet.password();

        registerObj.openRegisterPage()
        registerObj.enterFirstName(faker.person.firstName())
        registerObj.enterLastName(faker.person.lastName())
        registerObj.enterEmail(faker.internet.email())
        registerObj.enterTelephone(faker.phone.number())
        registerObj.enterPassword(password)
        registerObj.tickCheckbox()
        registerObj.clickContinue()
        registerObj.verifySuccessfulMessage().should('contain', testData.message.registerSuccessfulMessage)
    })

    /*
    Negative Testing: Register using an existing email account should fail and there should be a message:  
    "Warning: E-Mail Address is already registered!"
    */
    it('Negative Testing', () => {
        registerObj.openRegisterPage()
        registerObj.enterFirstName(testData.register.firstName)
        registerObj.enterLastName(testData.register.lastName)
        registerObj.enterEmail(testData.register.email)
        registerObj.enterTelephone(testData.register.telephone)
        registerObj.enterPassword(testData.register.password)
        registerObj.tickCheckbox()
        registerObj.clickContinue()
        registerObj.verifyAlertMessage().should('contain', testData.message.registerFailedMessage)
    })
})