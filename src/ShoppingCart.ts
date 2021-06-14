import {Book} from '../src/Book'

export class ShoppingCart{
    private items: Book[] = [];
    private total: number = 0;

    constructor(){}

    addBook(b: Book){
        this.items.push(b);
        this.total += b.price;
    }

    getTotal(){
        return this.total;
    }

}

