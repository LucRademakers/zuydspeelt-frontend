# features/login.feature

Feature: Login feature
    A user can login to the application

    Scenario: Login with correct credentials
        Given I am on the login page
        When I enter my credentials
        When my credentials are correct
        Then I am logged in

    # Scenario: Login with incorrect credentials
    #     Given I am on the login page
    #     When I enter my credentials
    #     When my credentials are incorrect
    #     Then I am not logged in