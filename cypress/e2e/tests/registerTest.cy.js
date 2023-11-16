import { registerPage } from "../../../pages/register_page"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'

describe('register testing', () => {

    //Register a user
    it('register new user', () => {
        registerObj.openRegisterPage()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterlastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
    })
})