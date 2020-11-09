Feature: Write test case for Example 2 in Dynamic Loading.

  @reg
  Scenario: Verify that a “Hello World” message appears after the loading bar disappears.

    Given I navigate to url "https://the-internet.herokuapp.com/"
    Then  I should be navigated to home page
    When  I click on Dynamic Loading link
    Then  I should be navigated to Dynamically Loaded Page Elements
    And   I click on Example TWO
    Then  I should be navigated to Example TWO page
    And   I click on start button
    Then  I should see Hello World message appears after the loading bar disappears.