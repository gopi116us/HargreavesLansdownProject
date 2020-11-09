package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DynamicExample2Page
{
    WebDriver driver;

    @FindBy(xpath ="//button[text()='Start']")
    public WebElement Startbutton;

    public DynamicExample2Page(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public void clickStartButton(){Startbutton.click();}


}
