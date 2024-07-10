Feature: homepage validation
Background: Login sucessfully
    @smoke
    Scenario: login to home page
    Given I am on login page
    When login to application with "standard_user" and "secret_sauce"
    And I click on login button
    Then I verify the homepage title as "Swag Labs"



    