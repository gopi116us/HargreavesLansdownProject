package pageObjects;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class JavaScriptAlertsPage
{
    WebDriver driver;


  @FindBy(xpath = "//button[text()='Click for JS Confirm']")
   public WebElement ClickforJSConfirmlink;

  //@FindBy(xpath = "//p[text()='You clicked: Ok']" )
  //public WebElement ClickOKbutton;

    public JavaScriptAlertsPage(WebDriver driver)
    {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public void clickforJSConfirmlink() {
        ClickforJSConfirmlink.click();
    }

    //public void ClickOKbutton() {ClickOKbutton();}


}
