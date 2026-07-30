import log from '../utils/logger.js';

class CartPage {
    get cartItem() {
        return $('[data-test="inventory-item"]');
    }

    get checkoutButton() {
        return $('[data-test="checkout"]');
    }

    async waitForPageToLoad() {
        log.info('Wait for the cart page to be displayed');

        await this.checkoutButton.waitForDisplayed();
    }

    async proceedToCheckout() {
        log.info('Proceed to checkout');

        await this.checkoutButton.click();
    }
}

export default new CartPage();