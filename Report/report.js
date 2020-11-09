$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:DynamicLoading.feature");
formatter.feature({
  "name": "Write test case for Example 2 in Dynamic Loading.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that a “Hello World” message appears after the loading bar disappears.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.step({
  "name": "I navigate to url \"https://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_navigate_to_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Dynamic Loading link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefnitions.DynamicLoadingStepDef.i_click_on_Dynamic_Loading_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to Dynamically Loaded Page Elements",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.DynamicLoadingStepDef.i_should_be_navigated_to_Dynamically_Loaded_Page_Elements()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Example TWO",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefnitions.DynamicLoadingStepDef.iClickOnExampleTWO()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to Example TWO page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.DynamicLoadingStepDef.iShouldBeNavigatedToExampleTWOPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on start button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefnitions.DynamicLoadingStepDef.i_click_on_start_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Hello World message appears after the loading bar disappears.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.DynamicLoadingStepDef.i_should_see_Hello_World_message_appears_after_the_loading_bar_disappears()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:FormAuthentication.feature");
formatter.feature({
  "name": "Write test case for Form Authentication.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Form Authentication with given login credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.step({
  "name": "I navigate to url \"https://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_navigate_to_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Form Authentication link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.iClickOnFormAuthenticationLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_should_be_navigated_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"tomsmith\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"SuperSecretPassword!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login successful with message as You logged into a secure area!",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.iLoginSuccessfulWithMessageAsYouLoggedIntoASecureArea()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:JavaScriptAlerts.feature");
formatter.feature({
  "name": "Write test case in JavaScript Alerts.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Click for JS Confirm: click the OK button on the alert and check that a relevant",
  "description": "  message appears.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.step({
  "name": "I navigate to url \"https://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I should be navigated to home page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on JavaScript Alerts",
  "keyword": "When "
});
formatter.step({
  "name": "I should be navigated to JavaScript Alerts Page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on \"\u003cOption\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should get an alert I am a JS confirm and click on \"\u003cAlert Action\u003e\" button",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see Result \"\u003cresult\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Option",
        "Alert Action",
        "result"
      ]
    },
    {
      "cells": [
        "JS Confirm",
        "Ok",
        "You clicked: Ok"
      ]
    },
    {
      "cells": [
        "JS Confirm",
        "Cancel",
        "You clicked: Cancel"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Click for JS Confirm: click the OK button on the alert and check that a relevant",
  "description": "  message appears.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.step({
  "name": "I navigate to url \"https://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_navigate_to_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on JavaScript Alerts",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefnitions.JavaScriptAlertsStepDef.i_click_on_JavaScript_Alerts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to JavaScript Alerts Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.JavaScriptAlertsStepDef.i_should_be_navigated_to_JavaScript_Alerts_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"JS Confirm\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefnitions.JavaScriptAlertsStepDef.i_click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get an alert I am a JS confirm and click on \"Ok\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.JavaScriptAlertsStepDef.i_should_get_an_alert_I_am_a_JS_confirm_and_click_on_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Result \"You clicked: Ok\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefnitions.JavaScriptAlertsStepDef.i_should_see_Result(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Click for JS Confirm: click the OK button on the alert and check that a relevant",
  "description": "  message appears.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.step({
  "name": "I navigate to url \"https://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_navigate_to_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.FormAuthenticationStepDef.i_should_be_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on JavaScript Alerts",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefnitions.JavaScriptAlertsStepDef.i_click_on_JavaScript_Alerts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be navigated to JavaScript Alerts Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.JavaScriptAlertsStepDef.i_should_be_navigated_to_JavaScript_Alerts_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"JS Confirm\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefnitions.JavaScriptAlertsStepDef.i_click_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get an alert I am a JS confirm and click on \"Cancel\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefnitions.JavaScriptAlertsStepDef.i_should_get_an_alert_I_am_a_JS_confirm_and_click_on_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Result \"You clicked: Cancel\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefnitions.JavaScriptAlertsStepDef.i_should_see_Result(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});