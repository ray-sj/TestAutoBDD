package TestDemo.Automation;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format={"pretty", "html:target/cucumber"},
				features="resources",
				glue="stepdefs")

public class AllAutoTests {

}
