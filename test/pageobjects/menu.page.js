class MenuPage {
    get menuButton() {
        return $('#react-burger-menu-btn');
    }

    get closeMenuButton() {
        return $('#react-burger-cross-btn');
    }

    get resetAppStateLink() {
        return $('[data-test="reset-sidebar-link"]');
    }

    get logoutLink() {
        return $('[data-test="logout-sidebar-link"]');
    }

    async openMenu() {
        await this.menuButton.click();
        await this.resetAppStateLink.waitForDisplayed();
    }

    async closeMenu() {
        await this.closeMenuButton.click();
    }

    async resetAppState() {
        await this.resetAppStateLink.click();
    }

    async logout() {
        await this.logoutLink.click();
    }
}

export default new MenuPage();