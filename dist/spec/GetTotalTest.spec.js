"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("../src/Book");
var ShoppingCart_1 = require("../src/ShoppingCart");
describe("Testing Functions From ShoppingCart", function () {
    it("Verifying the total Value from cart", function () {
        var b1 = new Book_1.Book("Book1", 10, "1");
        var b2 = new Book_1.Book("Book2", 20, "2");
        var cart = new ShoppingCart_1.ShoppingCart();
        cart.addBook(b1);
        cart.addBook(b2);
        expect(cart.getTotal()).toBe(30);
    });
});
//# sourceMappingURL=GetTotalTest.spec.js.map