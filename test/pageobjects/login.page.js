import Page from './page.js';

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
    }

    async enterUsername(username) {
        await this.usernameInput.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async submit() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.submit();
    }
}

export default new LoginPage();