var somevarfromjeffjs = "This was set in (Shared Resources)/webcontent/qfree/jeff.js";

/*
 * This function is used in two places in page_232-Customers_grouped.rptdesign.
 */
function creditLimitGroupText(creditLimit, groupInterval){
	rangeStart = creditLimit - creditLimit%groupInterval;
	rangeEnd = rangeStart + groupInterval - 1;
	return displayString = rangeStart + " - " + rangeEnd;
}