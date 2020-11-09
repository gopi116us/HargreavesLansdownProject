Feature: Write test case in JavaScript Alerts.

  @reg
  Scenario Outline: Verify Click for JS Confirm: click the OK button on the alert and check that a relevant
  message appears.

    Given I navigate to url "https://the-internet.herokuapp.com/"
    Then  I should be navigated to home page
    When  I click on JavaScript Alerts
    Then  I should be navigated to JavaScript Alerts Page
    And   I click on "<Option>"
    Then  I should get an alert I am a JS confirm and click on "<Alert Action>" button
    And   I should see Result "<result>"

    Examples:

      | Option     | Alert Action | result              |
      | JS Confirm | Ok           | You clicked: Ok     |
      | JS Confirm | Cancel       | You clicked: Cancel |
#
#  @Cancel
#  Scenario: Verify Click for JS Confirm: click the Cancel button on the alert and check that a relevant
#  message appears.
#
#    Given I navigate to url "https://the-internet.herokuapp.com/"
#    Then  I should be navigated to home page
#    When  I click on JavaScript Alerts
#    Then  I should be navigated to JavaScript Alerts Page
#    And   I click on JS Confirm
#    Then  I should get an alert I am a JS confirm and click on <Alert Action> button
#    And   I should see Result: You clicked: Cancel


