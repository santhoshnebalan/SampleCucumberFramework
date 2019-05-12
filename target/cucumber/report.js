$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fff1.feature");
formatter.feature({
  "line": 1,
  "name": "Submit data to webdriveruniversity.com using contact us form1",
  "description": "",
  "id": "submit-data-to-webdriveruniversity.com-using-contact-us-form1",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1525064368,
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
  "duration": 777335428,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.i_enter_a_valid_firstname()"
});
formatter.result({
  "duration": 197476987,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.i_enter_a_valid_last_name(DataTable)"
});
formatter.result({
  "duration": 118185301,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 153674510,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.i_enter_comments(DataTable)"
});
formatter.result({
  "duration": 137870817,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.i_click_on_the_submit_button()"
});
formatter.result({
  "duration": 934283227,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass1.the_information_should_successfully_be_submitted_via_the_contact_us_form()"
});
formatter.result({
  "duration": 40247223,
  "status": "passed"
});
formatter.after({
  "duration": 89211765,
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
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1061971070,
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
  "duration": 1112747936,
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
  "duration": 136493558,
  "status": "passed"
});
formatter.match({
  "location": "TrialClass2.user_should_be_presented_with_a_promo_alert()"
});
formatter.result({
  "duration": 1726615730,
  "status": "passed"
});
formatter.after({
  "duration": 87075395,
  "status": "passed"
});
});