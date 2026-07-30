import log from '../utils/logger.js';

class CheckoutPage {
    get firstNameInput() {
        return $('[data-test="firstName"]');
    }

    get lastNameInput() {
        return $('[data-test="lastName"]');
    }

    get postalCodeInput() {
        return $('[data-test="postalCode"]');
    }

    get continueButton() {
        return $('[data-test="continue"]');
    }

    get errorMessage() {
        return $('[data-test="error"]');
    }

     async waitForPageToLoad() {
        log.info('Wait for the checkout information form to be displayed');

        await this.firstNameInput.waitForDisplayed();
    }

    async fillCustomerName(firstName, lastName) {
        log.info(`Enter customer name: ${firstName} ${lastName}`);

        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
    }

    async continueCheckout() {
        log.info('Continue checkout without entering a postal code');

        await this.continueButton.click();
    }

    async waitForErrorMessage() {
        log.info('Wait for the checkout validation error');

        await this.errorMessage.waitForDisplayed();
    }
}

export default new CheckoutPage();