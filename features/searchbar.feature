# features/searchbar.feature

Feature: Searchbar feature
    The search bar placeholder text should be 'Search games...'

    Scenario: Placeholder text in the search bar
        Given I am on the home page
        When I look at the search bar
        Then The placeholder text should be 'Search games...'
