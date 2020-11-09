package stepDefnitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import pageObjects.BasePage;

public class JavaScriptAlertsStepDef extends BasePage {
    @When("I click on JavaScript Alerts")
    public void i_click_on_JavaScript_Alerts() {
        homepage.clickJavaScriptAlertslink();
    }

    @Then("I should be navigated to JavaScript Alerts Page")
    public void i_should_be_navigated_to_JavaScript_Alerts_Page() {
        System.out.println("JavaScript Alerts page tittle is" + getPageTitle());

    }

//    @Then("I click on JS Confirm")
//    public void i_click_on_JS_Confirm() {
//        javaScriptAlertsPage.clickforJSConfirmlink();
//
//    }



    @Then("I should get an alert I am a JS confirm and click on Ok button")
    public void iShouldGetAnAlertIAmAJSConfirmAndClickOnOkButton() {
        driver.switchTo().alert().accept();
    }

    @Then("I should see Result: You Clicked: Ok")
    public void i_should_see_Result_You_Clicked_Ok() {
        String msg = driver.findElement(By.xpath("//p[text()='You clicked: Ok']")).getText();
        System.out.println("message  " + msg);

    }

    @Then("I should get an alert I am a JS confirm and click on Cancel button")
    public void iShouldGetAnAlertIAmAJSConfirmAndClickOnCancelButton() {
        driver.switchTo().alert().dismiss();

    }

    @And("I should see Result: You clicked: Cancel")
    public void iShouldSeeResultYouClickedCancel() {
        String msg = driver.findElement(By.xpath("//p[text()='You clicked: Cancel']")).getText();
        System.out.println("message  " + msg);

    }

    @Then("I should get an alert I am a JS confirm and click on <Alert Action> button")
    public void i_should_get_an_alert_I_am_a_JS_confirm_and_click_on_Alert_Action_button() {

    }

    @Then("I click on {string}")
    public void i_click_on(String string) {

        javaScriptAlertsPage.clickforJSConfirmlink();
    }

    @Then("I should get an alert I am a JS confirm and click on {string} button")
    public void i_should_get_an_alert_I_am_a_JS_confirm_and_click_on_button(String  alertButton) {
//        javaScriptAlertsPage.
        if(alertButton.equalsIgnoreCase("Ok")){
            driver.switchTo().alert().accept();
        }
        else {
            driver.switchTo().alert().dismiss();
        }
    }

    @Then("I should see Result {string}")
    public void i_should_see_Result(String string) {
        Assert.assertTrue("Checking the text",driver.findElement(By.tagName("body")).getText().contains(string));

    }



}
