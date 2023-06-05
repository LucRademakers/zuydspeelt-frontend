# features/login.feature

Feature: Login feature
    A user can login to the application

    Scenario: Login with correct credentials
        # Given there are the following users:
        #     | username | password |
        #     | admin    | password |
        #     | user     | password |
        Given I am on the login page
        When I enter 'admin' and 'password'
        Then I am logged in

    # Scenario: Login with incorrect credentials
    #     Given I am on the login page
    #     When I enter 'admin' and 'wrong_password'
    #     Then I am not logged in