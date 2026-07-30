import log from '../utils/logger.js';

class InventoryPage {
    get inventoryContainer() {
        return $('[data-test="inventory-container"]');
    }

    get addBackpackButton() {
        return $('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    get cartLink() {
        return $('[data-test="shopping-cart-link"]');
    }

    get cartBadge() {
    return $('[data-test="shopping-cart-badge"]');
}

     async waitForPageToLoad() {
        log.info('Wait for the inventory page to be displayed');

        await this.inventoryContainer.waitForDisplayed();
    }

    async addBackpackToCart() {
        log.info('Add Sauce Labs Backpack to the cart');

        await this.addBackpackButton.click();
    }

    async waitForCartBadge() {
        log.info('Wait for the cart badge to be displayed');

        await this.cartBadge.waitForDisplayed();
    }

    async waitForCartBadgeToDisappear() {
        log.info('Wait for the cart badge to disappear');

        await this.cartBadge.waitForDisplayed({
            reverse: true
        });
    }

    async openCart() {
        log.info('Open the shopping cart');

        await this.cartLink.click();
    }
}

export default new InventoryPage();