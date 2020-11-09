package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage
{
    WebDriver driver;

    @FindBy(linkText ="Form Authentication")
    public WebElement FormAuthenticationlink;

    @FindBy(linkText ="Dynamic Loading")
    public WebElement DynamicLoadinglink;

    @FindBy(linkText = "JavaScript Alerts")
    public WebElement JavaScriptAlertslink;

    public HomePage(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public void navigateToUrl(String url)
    {
        driver.navigate().to(url);
    }

    public void clickFormAuthenticationLink()
    {
        FormAuthenticationlink.click();
    }

    public void clickDynamicLoadinglink(){DynamicLoadinglink.click();}

    public void clickJavaScriptAlertslink(){JavaScriptAlertslink.click();}

}
