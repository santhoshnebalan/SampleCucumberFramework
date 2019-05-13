package stepDefinitions;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import core.DriverFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.BasePage;

public class TrialClass3 extends DriverFactory{
	@Given("^abc$")
	public void user_navigates_to_website() throws InterruptedException, IOException {
		getDriver().get("http://www.webdriveruniversity.com");
		//http://www.webdriveruniversity.com/
		//http://www.webdriveruniversity.com/Page-Object-Model/products.html
	}
	
	@When("^rst$")
	public void user_clicks_on() throws Exception {
		BasePage basePage = new BasePage();
		WebElement element = getDriver().findElement(By.xpath("//*[@id=\"actions\"]/div/div[1]/h1"));
		basePage.scrollToElementByWebElementLocator(element);
		Thread.sleep(5000);
		System.out.println("inside rst");
	}
	
	@Then("^xyz$")
	public void user_should_be_presented_with_a_promo_alert() throws InterruptedException, IOException  {
		System.out.println("inside xyz");
	}
}
