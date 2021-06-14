"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var chai_1 = require("chai");
var Book_1 = require("../../src/Book");
var ShoppingCart_1 = require("../../src/ShoppingCart");
var b1 = null;
var b2 = null;
var cart = null;
cucumber_1.Given("I choose some books", function () {
    b1 = new Book_1.Book("Book1", 10, "1");
    b2 = new Book_1.Book("Book2", 20, "2");
});
cucumber_1.When("I add these books to the cart", function () {
    cart = new ShoppingCart_1.ShoppingCart();
    cart.addBook(b1);
    cart.addBook(b2);
});
cucumber_1.Then("the total must be updated", function () {
    chai_1.expect(cart.getTotal()).to.be.eq(30);
});
//# sourceMappingURL=divideSteps.js.map