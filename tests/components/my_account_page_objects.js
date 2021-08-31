const { $, $$ } = require('protractor');

const selectors = {
  myAccountPage: $('#my-account'),
  myAccountAddressListSection: $('div.row.addresses-lists')
};

class MyAccountPageObject {
  //This class contain getter, setter and basic actions of all components on MyAccount Page

  getPageLoadComponent = async () => {
    return await selectors.myAccountPage;
  };
  getMyAccountAddressListSectionComponent = async () => {
    return await selectors.myAccountAddressListSection;
  };
}
module.exports = new MyAccountPageObject();
