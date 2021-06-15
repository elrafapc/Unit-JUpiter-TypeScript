"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("../src/Book");
var ShoppingCart_1 = require("../src/ShoppingCart");
var cart = new ShoppingCart_1.ShoppingCart();
describe("Testing Functions From ShoppingCart", function () {
    it("Verifying the count items from cart", function () {
        cart.addBook(new Book_1.Book("Book1", 10, "1"));
        cart.addBook(new Book_1.Book("Book2", 20, "2"));
        expect(cart.countItems()).toBe(2);
    });
    it("Verifying the total Value from cart", function () {
        cart.addBook(new Book_1.Book("Book1", 10, "1"));
        cart.addBook(new Book_1.Book("Book2", 20, "2"));
        expect(cart.getTotal()).toBe(30);
    });
    it("Verifying clear cart", function () {
        cart.addBook(new Book_1.Book("Book1", 10, "1"));
        cart.addBook(new Book_1.Book("Book2", 20, "2"));
        cart.clear();
        expect(cart.countItems()).toBe(0);
        expect(cart.getTotal()).toBe(0);
    });
});
//# sourceMappingURL=ShoppingCartTest.spec.js.map