export class orderPage {

    //Element locators
    weblocators = {
        search_input: '.form-control.input-lg',
        click_search: '.fa.fa-search',
        product: 'img[title="MacBook"]',
        addtocart: 'Add to Cart',
        successMessages: 'div.alert.alert-success.alert-dismissible'
    }

    //Search for a product
    searchProduct(productName) {
        cy.get(this.weblocators.search_input).type(productName)
        cy.get(this.weblocators.click_search).click()
    }

    //Add a product to cart
    addToCart() {

        cy.contains(this.weblocators.addtocart).first().click()
    }

    //Verify message for adding to cart successfully
    verifySucessMessage() {
        return cy.get(this.weblocators.successMessages)
    }
}