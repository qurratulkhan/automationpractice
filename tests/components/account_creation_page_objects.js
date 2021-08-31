const { $, By, browser } = require('protractor');

const selectors = {
  mrTitleRadioButton: $('#id_gender1'),
  mrsTitleRadioButton: $('#id_gender2'),
  firstNameInputBox: $('#customer_firstname'),
  lastNameInputBox: $('#customer_lastname'),
  emailInputBox: $('#email'),
  passwordInputBox: $('#passwd'),
  dobDaysSelectBox: $('#days'),
  dobMonthsSelectBox: $('#months'),
  dobYearsSelectBox: $('#years'),
  newsLetterCheckBox: $('#uniform-newsletter'),
  specialOfferCheckBox: $('#uniform-optin'),
  addressFirstNamedInputBox: $('#firstname'),
  addressLastNameInputBox: $('#lastname'),
  companyInputBox: $('#company'),
  address1InputBox: $('#address1'),
  address2InputBox: $('#address2'),
  cityInputBox: $('#city'),
  stateSelectBox: $('#id_state'),
  postcodeInputBox: $('#postcode'),
  countrySelectBox: $('#id_country'),
  additionalInfoInputBox: $('#other'),
  homePhoneInputBox: $('#phone'),
  mobilePhoneInputBox: $('#phone_mobile'),
  addressAliasInputBox: $('#alias'),
  registerButton: $('#submitAccount'),
  accountFormComponent: $('#account-creation_form'),
  stateComboBox: $('#uniform-id_state'),
  countryComboBox: $('#uniform-id_country')
};

class AccountCreationPageObject {
  //This class contain getter, setter and basic actions of all components on Account Creation Page

  clickMrTitle = async () => {
    await selectors.mrTitleRadioButton.click();
  };
  clickMrsTitle = async () => {
    await selectors.mrsTitleRadioButton.click();
  };
  setFirstName = async (fname) => {
    await selectors.firstNameInputBox.sendKeys(fname);
  };
  setLastName = async (lname) => {
    await selectors.lastNameInputBox.sendKeys(lname);
  };
  setEmail = async (email) => {
    await selectors.emailInputBox.sendKeys(email);
  };
  setPassword = async (password) => {
    await selectors.passwordInputBox.sendKeys(password);
  };
  selectDOBDay = async (day) => {
    var dayCssPath = 'option[value=' + day + ']';
    await selectors.dobDaysSelectBox.$(dayCssPath).click();
  };
  selectDOBMonth = async (month) => {
    await selectors.dobMonthsSelectBox
      .element(By.cssContainingText('option', month))
      .click();
  };
  selectDOBYear = async (year) => {
    await selectors.dobYearsSelectBox
      .element(By.cssContainingText('option', year))
      .click();
  };
  selectNewsLetterCheckBox = async () => {
    await selectors.newsLetterCheckBox.click();
  };
  selectSpecialOfferCheckBox = async () => {
    await selectors.specialOfferCheckBox.click();
  };
  setAddressFirstName = async (aFname) => {
    await selectors.addressFirstNamedInputBox.sendKeys(aFname);
  };
  setAddressLastName = async (aLname) => {
    await selectors.addressLastNameInputBox.sendKeys(aLname);
  };
  setCompany = async (company) => {
    await selectors.companyInputBox.sendKeys(company);
  };
  setAddressLine1 = async (address1) => {
    await selectors.address1InputBox.sendKeys(address1);
  };
  setAddressLine2 = async (address2) => {
    await selectors.address2InputBox.sendKeys(address2);
  };
  setCity = async (city) => {
    await selectors.cityInputBox.sendKeys(city);
  };
  openStateCombobox = async () => {
    await browser.sleep(browser.params.timeouts.s);
    await selectors.stateComboBox.click();
  };
  getStateSelectBoxComponent = async (state) => {
    return await selectors.stateSelectBox.element(
      By.cssContainingText('option', state)
    );
  };
  setState = async (state) => {
    await selectors.stateSelectBox
      .element(By.cssContainingText('option', state))
      .click();
  };
  setPostCode = async (city) => {
    await selectors.postcodeInputBox.sendKeys(city);
  };
  openCountryCombobox = async () => {
    await selectors.countryComboBox.click();
  };
  setCountry = async (country) => {
    await selectors.countrySelectBox
      .element(By.cssContainingText('option', country))
      .click();
  };
  setAdditionalInfo = async (aInfo) => {
    await selectors.setAdditionalInfo.sendKeys(aInfo);
  };
  setHomePhone = async (hPhone) => {
    await selectors.homePhoneInputBox.sendKeys(hPhone);
  };
  setMobilePhone = async (mPhone) => {
    await selectors.mobilePhoneInputBox.sendKeys(mPhone);
  };
  setAddressAlias = async (alias) => {
    //await selectors.addressAliasInputBox.clear();
    await selectors.addressAliasInputBox.sendKeys(alias);
  };
  getPageLoadComponent = async () => {
    return await selectors.accountFormComponent;
  };
  getAccountCreationPageFormComponent = async () => {
    return await selectors.accountFormComponent;
  };
  clickRegisterButton = async () => {
    await selectors.registerButton.click();
  };
}
module.exports = new AccountCreationPageObject();
