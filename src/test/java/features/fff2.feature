Feature: Products page

Scenario Outline: validate promo code alert is visible when clicking on the special offers link
	Given user1 navigates to "<url>" website
	When user1 clicks on "<button>"
	Then user1 should be presented with a promo alert
	
	Examples: 
	| 									  	url							 |button|
	| http://www.webdriveruniversity.com/Page-Object-Model/products.html |#container-special-offers|