import {Book} from '../src/Book'

export class ShoppingCart{
    private items: Book[] = [];
    private total: number = 0;

    constructor(items: Book[] ,total: number){
        this.items = items;
        this.total = total;
    }

    addBook(b: Book){
        this.items.push(b);
        this.total += b.price;
    }

    getTotal(){
        return this.total;
    }

}

