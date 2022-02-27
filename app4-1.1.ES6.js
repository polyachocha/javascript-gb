'use strict'

//В стиле ES6

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75 ;
    }
}

let product1 = new Product ('t-shirt', '220');
product1.make25PercentDiscount();