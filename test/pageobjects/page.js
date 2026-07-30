import log from '../utils/logger.js';

export default class Page {
    async open(path = '/') {
        log.info(`Open page: ${path}`);

        await browser.url(path);
    }
}