package stepDefinitions;

import java.io.IOException;

import org.openqa.selenium.By;

import com.cucumber.listener.Reporter;

import core.DriverFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.BasePage;

public class TrialClass2 extends DriverFactory{
	@Given("^user1 navigates to \"([^\"]*)\" website$")
	public void user_navigates_to_website(String url) throws InterruptedException, IOException {
		//Reporter.addStepLog("Accessing Website");
		getDriver().get(url);
	}

	@When("^user1 clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String locator) throws InterruptedException, IOException {
		BasePage basePage = new BasePage();
		basePage.WaitUntilWebElementIsVisibleUsingByLocator(By.cssSelector(locator));
		getDriver().findElement(By.cssSelector(locator)).click();
	}

	@Then("^user1 should be presented with a promo alert$")
	public void user_should_be_presented_with_a_promo_alert() throws InterruptedException, IOException  {
		productsPage.printSpecialOffersVoucherCode();
		productsPage.clickOnProceedButton_Popup();
	}
}
