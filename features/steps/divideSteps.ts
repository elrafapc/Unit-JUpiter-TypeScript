import {Given, When, Then} from "cucumber";
import { expect } from "chai";
import {Book} from "../../src/Book";
import {ShoppingCart} from "../../src/ShoppingCart";

let b1: Book = null;
let b2: Book = null;
let cart: ShoppingCart = null;

Given("I choose two books", function(){
    b1 = new Book("Book1", 10, "1");
    b2 = new Book("Book2", 20, "2");
});


When("I add these books to the cart", function(){
    cart = new ShoppingCart();

    cart.addBook(b1);
    cart.addBook(b2);
});

Then("the total must be updated", function(){
    expect(cart.getTotal()).to.be.eq(30);
});

Then("the count of items must be 2", function(){
    expect(cart.countItems()).to.be.eq(2);
});

