const my_account_page_objects = require('../components/my_account_page_objects');

class MyAccountPage {
  /*This class contain function related to small operation that can be used to test complex business logics on MyAccount page.
  example: 
  
  */

  isMyAccountPageLoaded = async () => {
    var pageLoadComponent =
      await my_account_page_objects.getPageLoadComponent();
    return await pageLoadComponent.isPresent();
  };

  waitUntilMyAccountPageDisplayed = async () => {
    await browser.wait(
      async () => await this.isMyAccountPageLoaded(),
      browser.params.timeouts.m,
      'Failed while waiting for MyAccount'
    );
  };
  isAccountAddressListPresent = async () => {
    var myAccountAddressListComponent =
      await my_account_page_objects.getMyAccountAddressListSectionComponent();
    return await myAccountAddressListComponent.isPresent();
  };
}
module.exports = new MyAccountPage();
