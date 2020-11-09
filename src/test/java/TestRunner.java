import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
import pageObjects.BasePage;

@CucumberOptions(
        plugin = {"pretty","html:Report"},
       tags = {"@reg"},
        strict = true,
        dryRun = false,
        monochrome = true
)

@RunWith(Cucumber.class)
public class TestRunner extends BasePage
{
}
