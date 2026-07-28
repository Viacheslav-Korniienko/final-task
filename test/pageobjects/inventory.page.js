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

    async addBackpackToCart() {
        await this.addBackpackButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}

export default new InventoryPage();