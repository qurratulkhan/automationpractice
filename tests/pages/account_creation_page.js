const account_creation_page_objects = require('../components/account_creation_page_objects');

class AccountCreationPage {
  /*This class contain function related to small operation that can be used to test complex business logics on Account Creation page.
  example: 
  enterDOB()
  FillAddressDetail()
  FillPersonalDetail()
  */

  enterDOB = async (DDMMYYYY) => {};
  fillAllAddressDetail = async (
    fname,
    lname,
    company,
    address1,
    address2,
    city,
    state,
    postcode,
    country,
    additionalInfo,
    homePhone,
    mobilePhone,
    alias
  ) => {};
  fillOnlyRequiredAddressDetail = async (
    address1,
    city,
    state,
    postcode,
    mobilePhone,
    alias
  ) => {
    await account_creation_page_objects.setAddressLine1(address1);
    await account_creation_page_objects.setCity(city);
    await account_creation_page_objects.openStateCombobox();
    await this.waitForStateComboBoxToOpen(state);
    await account_creation_page_objects.setState(state);
    await account_creation_page_objects.setPostCode(postcode);
    await account_creation_page_objects.setMobilePhone(mobilePhone);
    await account_creation_page_objects.setAddressAlias(alias);
  };
  fillAllPersonalInfo = async (
    fname,
    lname,
    email,
    password,
    DOB,
    newsletter,
    offer
  ) => {};
  fillOnlyRequiredPersonalInfo = async (fname, lname, password) => {
    await account_creation_page_objects.setFirstName(fname);
    await account_creation_page_objects.setLastName(lname);
    await account_creation_page_objects.setPassword(password);
  };
  submitRegistrationInfo = async () => {
    await account_creation_page_objects.clickRegisterButton();
  };

  isAccountCreationPageDisplayed = async () => {
    var pageLoadComponent =
      await account_creation_page_objects.getPageLoadComponent();
    return await pageLoadComponent.isPresent();
  };

  waitUntilAccountCreationPageDisplayed = async () => {
    await browser.wait(
      async () => await this.isAccountCreationPageDisplayed(),
      browser.params.timeouts.xl,
      'Failed while waiting for Account Creation Page'
    );
  };
  waitForStateComboBoxToOpen = async (state) => {
    var stateCombobox =
      await account_creation_page_objects.getStateSelectBoxComponent(state);
    await browser.wait(
      async () => await stateCombobox.isDisplayed(),
      browser.params.timeouts.m,
      'Failed while waiting for Account Creation Page'
    );
  };
}

module.exports = new AccountCreationPage();
