const { browser } = require('protractor');
const { protractor } = require('protractor/built/ptor');
const my_account_page_objects = require('../../components/my_account_page_objects.js');
const accountCreationPage = require('../../pages/account_creation_page.js');
const homePage = require('../../pages/home_page.js');
const login = require('../../pages/login_page.js');
const my_account_page = require('../../pages/my_account_page.js');
const util = require('../../utils/utility_functions.js');

describe('Registration Step 2(Account Creation) Test Cases:', () => {
  describe('When user is on account creation page after providing valid email, ', () => {
    beforeEach(async () => {
      await homePage.get();
      await expect(await homePage.isSignInLinkDisplayed()).toBeTruthy(
        'Sign In Link is not displayed'
      );
      await homePage.clickSignIn();
      await login.waitUntilLoginPageDisplayed();
      await expect(await login.isCreateAccountButtonDisplayed()).toBeTruthy(
        'Create Account Button not Displayed on Login Page'
      );
      var validEmail = await util.createRandomValidEmail();
      //sending valid email format and clicking create account button
      await login.startCreateAccount(validEmail);
      await accountCreationPage.waitUntilAccountCreationPageDisplayed();
    });
    it('Verify that entering all valid entries create the account successfully', async () => {
      await expect(
        await accountCreationPage.isAccountCreationPageDisplayed()
      ).toBeTruthy('CreateAccount Page is not displayed');

      await accountCreationPage.fillOnlyRequiredPersonalInfo(
        'QA',
        'tester',
        'test@123'
      );
      await accountCreationPage.fillOnlyRequiredAddressDetail(
        'tester address',
        'tester city',
        'Florida',
        '33166',
        '01234567890',
        'aliasTest'
      );
      await accountCreationPage.submitRegistrationInfo();
      await my_account_page.waitUntilMyAccountPageDisplayed();
      await expect(
        await my_account_page.isAccountAddressListPresent()
      ).toBeTruthy('My Account Page not displayed');
      await homePage.signOut();
      await login.waitUntilLoginPageDisplayed();
    });
  });
});
