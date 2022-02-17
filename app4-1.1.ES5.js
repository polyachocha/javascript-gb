'use strict'

//В стиле ES5

function Product (name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price * 0.75 ;
}

let product1 = new Product ('t-shirt', '220');
product1.make25PercentDiscount();