import { Book } from "../src/Book";
import { ShoppingCart } from "../src/ShoppingCart";

const cart: ShoppingCart = new ShoppingCart();

describe("Testing Functions From ShoppingCart", () =>{
    
    it("Verifying the count items from cart", () =>{
        cart.addBook(new Book("Book1", 10, "1"));
        cart.addBook(new Book("Book2", 20, "2"));
        expect(cart.countItems()).toBe(2);
    })
    
    it("Verifying the total Value from cart", () =>{
        cart.addBook(new Book("Book1", 10, "1"));
        cart.addBook(new Book("Book2", 20, "2"));

        expect(cart.getTotal()).toBe(30);
    })

    it("Verifying clear cart", () =>{
        cart.addBook(new Book("Book1", 10, "1"));
        cart.addBook(new Book("Book2", 20, "2"));
        cart.clear();

        expect(cart.countItems()).toBe(0);
        expect(cart.getTotal()).toBe(0);
    })


})