class CartPage {
    get cartItem() {
        return $('[data-test="inventory-item"]');
    }

    get checkoutButton() {
        return $('[data-test="checkout"]');
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

export default new CartPage();