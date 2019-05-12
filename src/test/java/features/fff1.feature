Feature: Submit data to webdriveruniversity.com using contact us form1

Scenario: Submit valid data via contact us form1
	Given I access webdriveruniversity contact us form1
	When I enter a valid first name1
	When I enter a valid last name1
	| woods | jackson | jones |
	And i enter a valid email address1
	And i enter comments1
	|example comment one | example comment two |
	When i click on the submit button1
	Then the information should successfully be submitted via the contact us form1
