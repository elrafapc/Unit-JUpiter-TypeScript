import {Book} from '../src/Book'

export class ShoppingCart{
    private items: Book[] = [];
    private total: number = 0;

    constructor(){}

    addBook(b: Book){
        this.items.push(b);
        this.total += b.price;
    }

    clear(){
        this.items = [];
        this.total = 0;
    }

    countItems(){
        return this.items.length;
    }

    getTotal(){
        return this.total;
    }

}

