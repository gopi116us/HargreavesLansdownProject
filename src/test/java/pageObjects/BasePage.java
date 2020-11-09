package pageObjects;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BasePage
{

        public  static WebDriver driver;
        public  static LoginPage loginpage;
        public  static HomePage homepage;
        public  static DynamicPage dynamicpage;
        public  static DynamicExample2Page dynamicexample2page;
        public  static JavaScriptAlertsPage javaScriptAlertsPage;


        @BeforeClass
        public static void setUp()

        {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
            driver.manage().window().maximize();
            homepage = new HomePage(driver);
            loginpage = new LoginPage(driver);
            dynamicpage = new DynamicPage(driver);
            dynamicexample2page = new DynamicExample2Page(driver);
            javaScriptAlertsPage = new JavaScriptAlertsPage(driver);


        }


        @AfterClass
        public static void tearDown()
        {
            driver.quit();
        }


        public void pageRefresh()
        {
            driver.navigate().refresh();
        }

        public String getPageTitle()
        {
            return  driver.getTitle();
        }



}
