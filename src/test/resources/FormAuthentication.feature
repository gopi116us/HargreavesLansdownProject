Feature: Write test case for Form Authentication.

  @reg
  Scenario: Verify Form Authentication with given login credentials

    Given I navigate to url "https://the-internet.herokuapp.com/"
    Then  I should be navigated to home page
    When  I click on Form Authentication link
    Then  I should be navigated to login page
    When  I enter username as "tomsmith"
    And   I enter password as "SuperSecretPassword!"
    And   I click on login button
    Then  I login successful with message as You logged into a secure area!