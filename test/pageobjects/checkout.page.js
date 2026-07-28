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

    async fillCustomerName(firstName, lastName) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }
}

export default new CheckoutPage();