"use strict";
exports.__esModule = true;
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(items, total) {
        this.items = [];
        this.total = 0;
        this.items = items;
        this.total = total;
    }
    ShoppingCart.prototype.addBook = function (b) {
        this.items.push(b);
        this.total += b.price;
    };
    ShoppingCart.prototype.getTotal = function () {
        return this.total;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
