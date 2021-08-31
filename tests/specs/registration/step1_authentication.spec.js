const accountCreationPage = require('../../pages/account_creation_page.js');
const homePage = require('../../pages/home_page.js');
const login = require('../../pages/login_page.js');
const util = require('../../utils/utility_functions.js');

describe('Registration Step 1(Signup) Test Cases:', () => {
  describe('When user is on login page , ', () => {
    beforeEach(async () => {
      await homePage.get();
      await expect(await homePage.isSignInLinkDisplayed()).toBeTruthy(
        'Sign In Link is not displayed'
      );
      await homePage.clickSignIn();
      await login.waitUntilLoginPageDisplayed();
    });

    it('Verify that the email is mandatory field for registration step-1', async () => {
      await expect(await login.isCreateAccountButtonDisplayed()).toBeTruthy(
        'Create Account Button not Displayed on Login Page'
      );
      //keeping email field empty and clicking create account button
      await login.startCreateAccount('');
      await login.waitUntilAlertErrorDisplayed();
      await expect(await login.getErrorMessage()).toContain(
        'Invalid email address.',
        'Validation message for empty email did not appear'
      );
    });
    it('Verify that the email field require valid email format input for registration step-1', async () => {
      await expect(await login.isCreateAccountButtonDisplayed()).toBeTruthy(
        'Create Account Button not Displayed on Login Page'
      );
      //sending invalid email format and clicking create account button
      await login.startCreateAccount('test');
      await login.waitUntilAlertErrorDisplayed();
      await expect(await login.getErrorMessage()).toContain(
        'Invalid email address.',
        'Validation message for invalid email format did not appear'
      );
    });
    it('Verify that existing email is not allowed for registration step-1', async () => {
      await expect(await login.isCreateAccountButtonDisplayed()).toBeTruthy(
        'Create Account Button not Displayed on Login Page'
      );
      //sending existing email and clicking create account button
      await login.startCreateAccount('test@test.com');
      await login.waitUntilAlertErrorDisplayed();
      await expect(await login.getErrorMessage()).toContain(
        'An account using this email address has already been registered. Please enter a valid password or request a new one.',
        'Validation message for existing email did not appear'
      );
    });
    it('Verify that valid email takes control to step-2 of registration', async () => {
      await expect(await login.isCreateAccountButtonDisplayed()).toBeTruthy(
        'Create Account Button not Displayed on Login Page'
      );
      var validEmail = await util.createRandomValidEmail();
      //sending valid email format and clicking create account button
      await login.startCreateAccount(validEmail);
      await accountCreationPage.waitUntilAccountCreationPageDisplayed();
      await expect(
        await accountCreationPage.isAccountCreationPageDisplayed()
      ).toBeTruthy('CreateAccount Page is not displayed');
    });
  });
});
