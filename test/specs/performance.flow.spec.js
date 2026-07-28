import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import MenuPage from '../pageobjects/menu.page.js';
import { users } from '../data/users.js';

describe('Performance glitch user flow', () => {
    it('should handle delayed login, reset app state, and log out', async () => {
        await LoginPage.open();

        await LoginPage.login(
            users.performanceGlitch.username,
            users.performanceGlitch.password
        );

        await expect(browser)
            .toHaveUrl('https://www.saucedemo.com/inventory.html');

        await expect(InventoryPage.inventoryContainer)
            .toBeDisplayed();

        await InventoryPage.addBackpackToCart();

        await expect(InventoryPage.cartBadge)
            .toHaveText('1');

        await MenuPage.openMenu();
        await MenuPage.resetAppState();

        await expect(InventoryPage.cartBadge)
            .not.toBeExisting();
        
        await MenuPage.closeMenu();
        await MenuPage.openMenu();
        await MenuPage.logout();

        await expect(browser)
            .toHaveUrl('https://www.saucedemo.com/');

        await expect(LoginPage.loginButton)
            .toBeDisplayed();
    });
});