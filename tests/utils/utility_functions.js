class UtilFunctions {
  createRandomValidEmail = async () => {
    var today = new Date();
    var email =
      'test' +
      today.getDate() +
      today.getMonth() +
      today.getFullYear() +
      today.getTime() +
      '@test.com';
    return email;
  };
}
module.exports = new UtilFunctions();
