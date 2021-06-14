import { Book } from "../src/Book";
import { ShoppingCart } from "../src/ShoppingCart";

describe("Testing Functions From ShoppingCart", () =>{
    
    it("Verifying the total Value from cart", () =>{
        const b1: Book = new Book("Book1", 10, "1");
        const b2: Book = new Book("Book2", 20, "2");

        const cart: ShoppingCart = new ShoppingCart();

        cart.addBook(b1);
        cart.addBook(b2);

        expect(cart.getTotal()).toBe(30);
    })

    it("Verifying the total Value from cart", () =>{
        const b1: Book = new Book("Book1", 10, "1");
        const b2: Book = new Book("Book2", 20, "2");

        const cart: ShoppingCart = new ShoppingCart();

        cart.addBook(b1);
        cart.addBook(b2);

        expect(cart.getTotal()).toBe(25);
    })
})