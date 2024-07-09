Feature: homepage validation

    Scenario: login to home page
    Given I open the login page
    And login to application with "standard_user" and "secret_sauce"
    When I click on login button
    Then I should view the homepage title "Swag Labs"



    