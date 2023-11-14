import { orderPage } from '../../../pages/order_page'
const orderPageObj = new orderPage()
import testData from '../../fixtures/testData.json'


describe(' test automation', () => {
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })

    it('Add To Cart flow', () => {
        orderPageObj.searchProduct(testData.product.productName)
        orderPageObj.addToCart()
        orderPageObj.verifySucessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);
    })
})