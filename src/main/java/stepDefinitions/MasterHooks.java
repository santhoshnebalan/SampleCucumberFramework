package stepDefinitions;

import core.DriverFactory;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class MasterHooks extends DriverFactory {

	@Before
	public void setup() {
		driver = getDriver();
	}

	@After
	public void tearDownAndScreenshotOnFailure(Scenario scenario) {
		driver.manage().deleteAllCookies();
		driver.quit();
		driver = null;
	}
}
