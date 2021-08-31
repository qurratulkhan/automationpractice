const { browser } = require('protractor');
const home_page_objects = require('../components/home_page_objects');
const homePath = '/';

class HomePage {
  /*This class contain function related to small operation that can be used to test complex business logics on Home page.
  example: 
  adding_item_to_cart()=> This may include finding object of choice, hovering mouse on it to get add to cart button and then click on add to cart button 
  */
  get = async () => {
    await browser.get(homePath);
    await this.waitUntilHomePageDisplayed();
  };
  clickSignIn = async () => {
    await home_page_objects.clickSignIn();
  };
  isSignInLinkDisplayed = async () => {
    var signInComponent = await home_page_objects.getSignInComponent();
    return await signInComponent.isDisplayed();
  };
  isHomePageLoaded = async () => {
    var pageLoadComponent = await home_page_objects.getPageLoadComponent();
    return await pageLoadComponent.isPresent();
  };

  waitUntilHomePageDisplayed = async () => {
    await browser.wait(
      async () => await this.isHomePageLoaded(),
      browser.params.timeouts.m,
      'Failed while waiting for HomePage'
    );
  };
  signOut = async () => {
    home_page_objects.clickSignOut();
  };
}
module.exports = new HomePage();
