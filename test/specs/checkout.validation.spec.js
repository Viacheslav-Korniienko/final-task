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

        await expect(browser)
            .toHaveUrl('https://www.saucedemo.com/inventory.html');

        await expect(InventoryPage.inventoryContainer)
            .toBeDisplayed();
    });

    it('should show an error when postal code is empty', async () => {
        await InventoryPage.addBackpackToCart();
        await InventoryPage.openCart();

        await expect(CartPage.cartItem).toBeExisting();

        await CartPage.proceedToCheckout();

        await CheckoutPage.fillCustomerName(
            'Test',
            'User'
        );

        await expect(CheckoutPage.postalCodeInput)
            .toHaveValue('');

        await CheckoutPage.continueCheckout();

        await expect(CheckoutPage.errorMessage)
            .toBeExisting();

        await expect(CheckoutPage.errorMessage)
            .toHaveText('Error: Postal Code is required');
    });
});