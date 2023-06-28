# features/gamesoverview.navigation.feature

Feature: Gamesoverview Navigation
  As a user
  I want to navigate between the 3 pages on the gamesoverview

  Scenario: Navigate through different pages
    Given I am on the gamesoverview page
    When I press the button 2
    And I press the button 3
    And I press the button 2
    And I press the button 1
    And I press the button 3
    Then I should be looking at page 3