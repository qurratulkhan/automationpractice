const { $ } = require('protractor');

const selectors = {
  signIn: $('a.login'),
  slideshowComponent: $('#slider_row'),
  signOut: $('a.logout')
};

class HomePageObject {
  //In this class contain getter, setter and basic functions of all components on Home Page
  getPageLoadComponent = async () => {
    return await selectors.slideshowComponent;
  };
  getSignInComponent = async () => {
    return await selectors.signIn;
  };
  clickSignIn = async () => {
    await selectors.signIn.click();
  };
  clickSignOut = async () => {
    await selectors.signOut.click();
  };
}
module.exports = new HomePageObject();
