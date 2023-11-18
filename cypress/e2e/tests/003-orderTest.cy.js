import { orderPage } from '../../../pages/order_page'
const orderPageObj = new orderPage()
import testData from '../../fixtures/testData.json'


describe('Place Order Tests', () => {

    //Hook: user login before performing tests
    before(() => {
        cy.login(testData.login.email, testData.login.password)
    })

    //Search for a product then add it to the cart
    it('Add Product To Cart', () => {
        orderPageObj.searchProduct(testData.product.productName)
        orderPageObj.addToCart()
        orderPageObj.verifySucessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName)
    })

    //To do: add test for placing order.
})