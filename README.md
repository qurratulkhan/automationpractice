# Automationpractice

This repository is to Automate the Registration process on site :http://automationpractice.com/index.php
The Registration Process have two step first is authentication of email and second step is filling all personal detail for account creation.
In this framework I have used protractor and Jasmine jasmine frame work and to maintain the page component i have used page object model.

## Steps to Start

1. Clone the repository
2. Install all packages by running command "npm install"
3. Update the webdriver manage using command "npm run test_webdriver_update"
4. Run the test using command "npm run test"

## Test Scenarion

1 Registration Step 1(Signup) Test Cases:  
1.1 When user is on login page :  
√ Verify that the email is mandatory field for registration step-1  
√ Verify that the email field require valid email format input for registration step-1  
√ Verify that existing email is not allowed for registration step-1  
√ Verify that valid email takes control to step-2 of registration  

2 Registration Step 2(Account Creation) Test Cases:  
2.1 When user is on account creation page after providing valid email:  
√ Verify that entering all valid entries create the account successfully  
