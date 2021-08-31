const { $, $$ } = require('protractor');

const selectors = {
  createAccountButton: $('#SubmitCreate'),
  signUpEmailInputBox: $('#email_create'),
  singUpAlerts: $('#create_account_error ol li'),
  singUpAlertsMessages: $$('#create_account_error ol li'),
  signUpForm: $('#create-account_form')
};

class LoginPageObject {
  //This class contain getter, setter and basic actions of all components on Login Page

  getCreateAccountButtonComponent = async () => {
    return await selectors.createAccountButton;
  };
  clickCreateAccountButton = async () => {
    await selectors.createAccountButton.click();
  };
  getSignUpEmailInputBoxComponent = async () => {
    return await selectors.signUpEmailInputBox;
  };
  setSignUpEmail = async (email) => {
    await selectors.signUpEmailInputBox.sendKeys(email);
  };
  getComponentSingUpAlerts = async () => {
    return await selectors.singUpAlerts;
  };
  getAllSingUpErrors = async () => {
    let message = [];
    var messageList = await selectors.singUpAlertsMessages;
    for (var i = 0; i < messageList.length; i++) {
      message.push(await messageList[i].getAttribute('innerText'));
    }
    return await message;
  };
  getPageLoadComponent = async () => {
    return await selectors.createAccountButton;
  };
}
module.exports = new LoginPageObject();
