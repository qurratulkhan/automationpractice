const login_page_objects = require('../components/login_page_objects');

class LoginPage {
  /*This class contain function related to small operation that can be used to test complex business logics on Login page.
  example: 
  signIn() or createAccount()
  */

  signIn = async (username, password) => {};
  startCreateAccount = async (email) => {
    await login_page_objects.setSignUpEmail(email);
    await login_page_objects.clickCreateAccountButton();
  };
  isLoginPageLoaded = async () => {
    var pageLoadComponent = await login_page_objects.getPageLoadComponent();
    return await pageLoadComponent.isPresent();
  };

  waitUntilLoginPageDisplayed = async () => {
    await browser.wait(
      async () => await this.isLoginPageLoaded(),
      browser.params.timeouts.m,
      'Failed while waiting for LoginPage'
    );
  };
  isCreateAccountButtonDisplayed = async () => {
    var createAccountButton =
      await login_page_objects.getCreateAccountButtonComponent();
    return await createAccountButton.isDisplayed();
  };
  waitUntilAlertErrorDisplayed = async () => {
    await browser.wait(
      async () => await this.isValidationErrorDisplayed(),
      browser.params.timeouts.m,
      'Validation Error did not appear'
    );
  };
  isValidationErrorDisplayed = async () => {
    var validationErrorComponent =
      await login_page_objects.getComponentSingUpAlerts();
    return await validationErrorComponent.isPresent();
  };
  getErrorMessage = async () => {
    return await login_page_objects.getAllSingUpErrors();
  };
}
module.exports = new LoginPage();
