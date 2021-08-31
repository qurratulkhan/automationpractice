const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var spec;

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/registration/*.spec.js'],

  // capabilities like browserName, chromeOptions for webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },
  framework: 'jasmine',
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://automationpractice.com/index.php',
  params: {
    timeouts: {
      xs: 500,
      s: 1000,
      m: 3000,
      l: 5000,
      xl: 10000
    }
  },
  //test suites that to be executed

  //jasmine node options
  jasmineNodeOpts: {
    showColors: true,
    DEFAULT_TIMEOUT_INTERVAL: 150000
  },
  onPrepare: function () {
    spec = new SpecReporter({
      suite: {
        displayNumber: true // display each suite number (hierarchical)
      },
      spec: {
        displaySuccessful: true,
        displayPending: true, // display each pending spec
        displayDuration: true, // display each spec duration
        displayErrorMessages: true
      },
      summary: {
        displaySuccessful: false, // display summary of all successes after execution
        displayFailed: true, // display summary of all failures after execution
        displayPending: false, // display summary of all pending specs after execution
        displayDuration: true,
        displayErrorMessages: true
      }
    });
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(spec);
  }
};
