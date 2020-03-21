Feature: App
    As user
    I want an App
    In order to do automation

    Scenario: Init App
        Given I have an App
        When I navigate to the Landing page
        Then show the title of the page
        And show a title on the page
