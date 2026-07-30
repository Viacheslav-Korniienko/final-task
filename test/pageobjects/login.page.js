import Page from './page.js';
import log from '../utils/logger.js';

class LoginPage extends Page {
    get usernameInput() {
        return $('[data-test="username"]');
    }

    get passwordInput() {
        return $('[data-test="password"]');
    }

    get loginButton() {
        return $('[data-test="login-button"]');
    }

    get errorMessage() {
        return $('[data-test="error"]');
    }

    async open() {
        await super.open('/');
        await this.waitForPageToLoad();
    }

     async waitForPageToLoad() {
        log.info('Wait for the login page to be displayed');

        await this.loginButton.waitForDisplayed();
    }

    async enterUsername(username) {
        log.info(`Enter username: ${username}`);

        await this.usernameInput.setValue(username);        
    }

    async enterPassword(password) {
        log.info('Enter password');

        await this.passwordInput.setValue(password);
    }

    async submit() {
        log.info('Click the Login button');

        await this.loginButton.click();
    }

     async waitForErrorMessage() {
        log.info('Wait for the login validation error');

        await this.errorMessage.waitForDisplayed();
    }

    async login(username, password) {
        log.info(`Log in as ${username}`);

        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.submit();
    }
}

export default new LoginPage();