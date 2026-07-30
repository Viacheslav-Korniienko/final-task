import log from '../utils/logger.js';

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
        log.info('Open the Burger Menu');

        await this.menuButton.click();
        await this.resetAppStateLink.waitForDisplayed();
    }

    async closeMenu() {
        log.info('Close the Burger Menu');

        await this.closeMenuButton.click();

        await this.resetAppStateLink.waitForDisplayed({
            reverse: true
        });
    }

    async resetAppState() {
        log.info('Reset the application state');

        await this.resetAppStateLink.click();
    }

    async logout() {
        log.info('Log out');

        await this.logoutLink.click();
    }
}

export default new MenuPage();