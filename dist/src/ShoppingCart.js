"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
        this.total = 0;
    }
    ShoppingCart.prototype.addBook = function (b) {
        this.items.push(b);
        this.total += b.price;
    };
    ShoppingCart.prototype.clear = function () {
        this.items = [];
        this.total = 0;
    };
    ShoppingCart.prototype.countItems = function () {
        return this.items.length;
    };
    ShoppingCart.prototype.getTotal = function () {
        return this.total;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=ShoppingCart.js.map