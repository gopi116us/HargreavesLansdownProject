package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DynamicPage
{
    WebDriver driver;

    @FindBy(linkText ="Example 2: Element rendered after the fact")
     public WebElement Example2link;

    public DynamicPage(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public void clickExample2link() { Example2link.click(); }
}
