export const config = {
    
    runner: 'local',
    
    specs: [
        './test/specs/**/*.js'
    ],
        
    maxInstances: 2,
    
    capabilities: [{
        browserName: 'chrome',
        'wdio:maxInstances': 1
    },
    {
        browserName: 'firefox',
        'wdio:maxInstances': 1
    }],

    logLevel: 'info',
    
    bail: 0,
    
     baseUrl: 'https://www.saucedemo.com',
    
    waitforTimeout: 15000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    framework: 'mocha',
    
    reporters: ['spec'],

    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
