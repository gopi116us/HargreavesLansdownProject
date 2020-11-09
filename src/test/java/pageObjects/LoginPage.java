package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage
{
    WebDriver driver;


    @FindBy(id = "username")
    public WebElement usernameTextBox;

    @FindBy(id = "password")
    public WebElement passwordTextBox;

    @FindBy(className = "radius")
    public WebElement loginbutton;

    public LoginPage(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public void enterUserName(String un) { usernameTextBox.sendKeys(un); }

    public void enterPassword(String pw)
    {
        passwordTextBox.sendKeys(pw);
    }

    public void clickLoginButton()
    {
        loginbutton.click();
    }


}
