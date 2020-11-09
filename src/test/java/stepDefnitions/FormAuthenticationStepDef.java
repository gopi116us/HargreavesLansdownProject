package stepDefnitions;

import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageObjects.BasePage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;

public class FormAuthenticationStepDef extends BasePage
{
    @Given("I navigate to url {string}")
    public void i_navigate_to_url(String url)
    {
        homepage.navigateToUrl(url);
    }

    @Then("I should be navigated to home page")
    public void i_should_be_navigated_to_home_page()
    {
        System.out.println("homepage title is"+ getPageTitle());

    }

    @When("I click on Form Authentication link")
    public void iClickOnFormAuthenticationLink()

    {
        homepage.clickFormAuthenticationLink();
    }

    @Then("I should be navigated to login page")
    public void i_should_be_navigated_to_login_page()
    {
        System.out.println("loginpage title is"+ getPageTitle());

    }

    @When("I enter username as {string}")
    public void i_enter_username_as(String username)
    {
        loginpage.enterUserName(username);

    }

    @When("I enter password as {string}")
    public void i_enter_password_as(String password)
    {
        loginpage.enterPassword(password);

    }

    @When("I click on login button")
    public void i_click_on_login_button()
    {
        loginpage.clickLoginButton();

    }

    @Then("I login successful with message as You logged into a secure area!")
    public void iLoginSuccessfulWithMessageAsYouLoggedIntoASecureArea()
    {
        WebDriverWait wait1 = new WebDriverWait(driver,45);
        wait1.until(ExpectedConditions.presenceOfElementLocated(By.id("flash")));
        Assert.assertTrue(driver.findElement(By.id("flash")).isDisplayed());
    }
}
