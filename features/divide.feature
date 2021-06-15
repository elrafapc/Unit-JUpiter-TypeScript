Feature: Verify functions from ShoppingCart class

Scenario: Verifying the count items from cart
    Given I choose two books
    When I add these books to the cart
    Then the count of items must be 2

Scenario: Verify the total value from cart
    Given I choose two books with values
    When I add these books to the cart
    Then the total must be updated