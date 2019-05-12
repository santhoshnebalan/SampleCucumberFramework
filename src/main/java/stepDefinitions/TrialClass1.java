package stepDefinitions;

import java.io.IOException;

import core.DriverFactory;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TrialClass1 extends DriverFactory{
	@Given("^I access webdriveruniversity contact us form1$")
	public void i_access_webdriveruniversity_contact_us_form() throws IOException {
		
		contactUsPage.getContactUsPage();
	}

	@When("^I enter a valid first name1$")
	public void i_enter_a_valid_firstname() throws Exception {
		contactUsPage.enterFirstName("Santhosh");
	}

	@When("^I enter a valid last name1$")
	public void i_enter_a_valid_last_name(DataTable dataTable) throws Exception{
		contactUsPage.enterLasttName(dataTable, 0, 1);
	}

	@And("^i enter a valid email address1$")
	public void i_enter_a_valid_email_address() throws Exception  {
		contactUsPage.enterEmailAddress("webdriveruniversity@outlook.com");
	}

	@And("^i enter comments1$")
	public void i_enter_comments(DataTable dataTable) throws Exception {
		contactUsPage.enterComments(dataTable, 0, 1);
	}

	@When("^i click on the submit button1$")
	public void i_click_on_the_submit_button() throws Exception {
		contactUsPage.clickOnSubmiButton();
	}

	@Then("^the information should successfully be submitted via the contact us form1$")
	public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Exception  {
		contactUsPage.confirmContactUsFormSubmissionWasSuccessful();
	}
}
