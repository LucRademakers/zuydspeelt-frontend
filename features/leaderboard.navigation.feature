# features/leaderboard.navigation.feature

Feature: Leaderboard Navigation
  As a user
  I want to navigate to the leaderboard action page

  Scenario: Navigate to action leaderboard page
    Given I am on the categories action page
    When I press the button Leaderboard
    Then I should be looking at action leaderboard page