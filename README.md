# Automation Practice

This repository is to Automate the Registration process on site :http://automationpractice.com/index.php
The Registration Process have two step first is authentication of email and second step is filling all personal detail for account creation.
In this framework I have used protractor and Jasmine framework and to maintain the page component I have used page object model.

## Steps to Start

1. Clone the repository
2. Install all packages by running command "npm install" in your local repository folder.
3. Update the webdriver manager using command "npm run test_webdriver_update"
4. Run the test using command "npm run test"

## Test Scenario

1 Registration Step 1(Signup) Test Cases:  
1.1 When user is on login page :  
√ Verify that the email is mandatory field for registration step-1  
√ Verify that the email field require valid email format input for registration step-1  
√ Verify that existing email is not allowed for registration step-1  
√ Verify that valid email takes control to step-2 of registration  

2 Registration Step 2(Account Creation) Test Cases:  
2.1 When user is on account creation page after providing valid email:  
√ Verify that entering all valid entries create the account successfully.

## Prerequisite
You need to have Node js install in your machine.

## Information about test framework
The folder structure looks like shown in image below 
1. Components: Folder Contain all page objects components files and their getter, setter and basic component actions.
2. Pages: Folder contain files for each page  that contain small operation functions that is performed on that page.
3. Specs: Contain subfolder to group functionality which there contain testcases related to the functionality.
4. Utils: folder contain util funtions that can be used anywhere throughout the framework 

![image](https://user-images.githubusercontent.com/89459046/131530053-58906e6a-03e6-4b6d-8045-fcce38fc1dd6.png)
