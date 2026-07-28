import LoginPage from '../pageobjects/login.page.js';
import { users } from '../data/users.js';

describe('Login form validation', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should show an error when username and password are empty', async () => {
        await expect(LoginPage.usernameInput).toHaveValue('');
        await expect(LoginPage.passwordInput).toHaveValue('');

        await LoginPage.submit();

        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage)
            .toHaveText('Epic sadface: Username is required');
    });

    it('should show an error when password is empty', async () => {
        await LoginPage.enterUsername(users.standard.username);

        await expect(LoginPage.usernameInput)
            .toHaveValue(users.standard.username);

        await expect(LoginPage.passwordInput).toHaveValue('');

        await LoginPage.submit();

        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage)
            .toHaveText('Epic sadface: Password is required');
    });
});