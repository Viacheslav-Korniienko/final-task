import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';
import { users } from '../data/users.js';

describe('Checkout form validation', () => {
    beforeEach(async () => {
        await LoginPage.open();

        await LoginPage.login(
            users.standard.username,
            users.standard.password
        );

        await InventoryPage.waitForPageToLoad();
    });

    it('should show an error when postal code is empty', async () => {
        await InventoryPage.addBackpackToCart();
        await InventoryPage.waitForCartBadge();

        await InventoryPage.openCart();
        await CartPage.waitForPageToLoad();

        await CartPage.proceedToCheckout();
        await CheckoutPage.waitForPageToLoad();

        await CheckoutPage.fillCustomerName(
            'Test',
            'User'
        );

        await CheckoutPage.continueCheckout();
        await CheckoutPage.waitForErrorMessage();

        await expect(CheckoutPage.errorMessage)
            .toHaveText('Error: Postal Code is required');
    });
});