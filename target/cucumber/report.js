$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoFeature.feature");
formatter.feature({
  "line": 1,
  "name": "test demo",
  "description": "as a business user\ni want to be able to login to my application\nin order to perform a set task",
  "id": "test-demo",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "a successful login process",
  "description": "",
  "id": "test-demo;a-successful-login-process",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the user is on the login page and entered valid credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "they click on the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the Landing page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.the_user_is_on_the_login_page_and_entered_valid_credentials()"
});
formatter.result({
  "duration": 87556838,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.they_click_on_the_Login_button()"
});
formatter.result({
  "duration": 35483,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.the_Landing_page_is_displayed()"
});
formatter.result({
  "duration": 36896,
  "status": "passed"
});
});