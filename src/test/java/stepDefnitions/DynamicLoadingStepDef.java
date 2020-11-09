package stepDefnitions;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageObjects.BasePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;

public class DynamicLoadingStepDef extends BasePage
{
    @When("I click on Dynamic Loading link")
    public void i_click_on_Dynamic_Loading_link()
    {
        homepage.clickDynamicLoadinglink();

    }

    @Then("I should be navigated to Dynamically Loaded Page Elements")
    public void i_should_be_navigated_to_Dynamically_Loaded_Page_Elements()
    {
       System.out.println("verify the Dynamic_loading title"+ getPageTitle());

    }
    @And("I click on Example TWO")
    public void iClickOnExampleTWO()
    {
        dynamicpage.clickExample2link();

    }

    @Then("I should be navigated to Example TWO page")
    public void iShouldBeNavigatedToExampleTWOPage()
    {
        System.out.println("verify the Dynamic_loading/2 title" + getPageTitle());
    }

    @Then("I click on start button")
    public void i_click_on_start_button()
    {
        dynamicexample2page.clickStartButton();

    }

    @Then("I should see Hello World message appears after the loading bar disappears.")
    public void i_should_see_Hello_World_message_appears_after_the_loading_bar_disappears() throws InterruptedException {

       // Thread.sleep(5000);
        WebDriverWait wait1 = new WebDriverWait(driver,15);
        wait1.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//h4[text()='Hello World!']")));
        String message=driver.findElement(By.xpath("//h4[text()='Hello World!']")).getText();

        System.out.println("hello world successful message"+ message );


    }
}
