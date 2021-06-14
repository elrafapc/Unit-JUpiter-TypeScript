Feature: Verify functions from ShoppingCart class

Scenario: Verify the total value from cart
    Given I choose some books
    When I add these books to the cart
    Then the total must be updated

