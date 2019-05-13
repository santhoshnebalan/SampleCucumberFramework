$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fff1.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form1",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form1",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1517632449,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Submit valid data via contact us form1",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form1;submit-valid-data-via-contact-us-form1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I access webdriveruniversity contact us form1",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter a valid first name1",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter a valid last name1",
  "rows": [
    {
      "cells": [
        "woods",
        "jackson",
        "jones"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i enter a valid email address1",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i enter comments1",
  "rows": [
    {
      "cells": [
        "example comment one",
        "example comment two"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i click on the submit button1",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the information should successfully be submitted via the contact us form1",
  "keyword": "Then "
});
formatter.match({
  "location": "TrialClass1.i_access_webdriveruniversity_contact_us_form()"
});
formatter.result({
  "duration": 796552479,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.i_enter_a_valid_firstname()"
});
formatter.result({
  "duration": 195473840,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 119390633,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 155137954,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 136480337,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 980415102,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 42531277,
  "status": "passed"
});
formatter.after({
  "duration": 90720476,
  "status": "passed"
});
formatter.uri("fff2.feature");
formatter.feature({
  "line": 1,
  "name": "Products page",
  "description": "",
  "id": "products-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user1 navigates to \"\u003curl\u003e\" website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user1 clicks on \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user1 should be presented with a promo alert",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;",
  "rows": [
    {
      "cells": [
        "url",
        "button"
      ],
      "line": 9,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
        "#container-special-offers"
      ],
      "line": 10,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
        "#container-special-offers22"
      ],
      "line": 11,
      "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1044665675,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user1 navigates to \"http://www.webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user1 clicks on \"#container-special-offers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user1 should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 20
    }
  ],
  "location": "TrialClass2.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 1205667776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#container-special-offers",
      "offset": 17
    }
  ],
  "location": "TrialClass2.user_clicks_on(String)"
});
formatter.result({
  "duration": 92522222,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass2.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 1201730570,
  "status": "passed"
});
formatter.after({
  "duration": 85612214,
  "status": "passed"
});
formatter.before({
  "duration": 1011189150,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user1 navigates to \"http://www.webdriveruniversity.com/Page-Object-Model/products.html\" website",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user1 clicks on \"#container-special-offers22\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user1 should be presented with a promo alert",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/Page-Object-Model/products.html",
      "offset": 20
    }
  ],
  "location": "TrialClass2.user_navigates_to_website(String)"
});
formatter.result({
  "duration": 1285331512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "#container-special-offers22",
      "offset": 17
    }
  ],
  "location": "TrialClass2.user_clicks_on(String)"
});
formatter.result({
  "duration": 15026398860,
  "error_message": "java.lang.AssertionError: WebElement is NOT visible, Exception: Expected condition failed: waiting for visibility of element located by By.cssSelector: #container-special-offers22 (tried for 15 second(s) with 500 MILLISECONDS interval)\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat pageObjects.BasePage.WaitUntilWebElementIsVisibleUsingByLocator(BasePage.java:252)\n\tat stepDefinitions.TrialClass2.user_clicks_on(TrialClass2.java:25)\n\tat ✽.When user1 clicks on \"#container-special-offers22\"(fff2.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "TrialClass2.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 704127998,
  "status": "passed"
});
formatter.uri("fff3.feature");
formatter.feature({
  "line": 1,
  "name": "Products page",
  "description": "",
  "id": "products-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1134537984,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "validate promo code alert is visible when clicking on the special offers link",
  "description": "",
  "id": "products-page;validate-promo-code-alert-is-visible-when-clicking-on-the-special-offers-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "abc",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "rst",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "xyz",
  "keyword": "Then "
});
formatter.match({
  "location": "TrialClass3.user_navigates_to_website()"
});
formatter.result({
  "duration": 857534262,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass3.user_clicks_on()"
});
formatter.result({
  "duration": 5064776215,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass3.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 78664,
  "status": "passed"
});
formatter.after({
  "duration": 91978740,
  "status": "passed"
});
});