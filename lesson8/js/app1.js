'use strict';
let productsData = [];
let productCards = document.querySelectorAll('.products__item');
productCards.forEach(function(productCard){
    let productId = productCard.querySelector('.products__item-btn').id;
    let productName = productCard.querySelector('.products__item-title').innerText;
    let productDescription = productCard.querySelector('.products__item-text').innerText;
    let productPrice = +productCard.querySelector('.products__item-price-count').innerText;
    productsData.push({
        productId,
        productName,
        productDescription,
        productPrice
    });
});

const counterBasket = document.querySelector('.header__link-basket span');
const pressBasket = document.querySelector('.header__link-basket');
const baskeClass = document.querySelector('.basket__description');
const basketTotalValue = document.querySelector('.basket__description-total-value')
let basket = {};
const basketTotal = document.querySelector('.basket__description-total');

pressBasket.addEventListener('click', function(){
    baskeClass.classList.toggle('visually-hidden');
});

function addProductToGrid(productIdOfClick){
    if (!(productIdOfClick in basket)){
        basket[productIdOfClick] = 1;
    } else {
        basket[productIdOfClick]++;
    }
}

function makeNewProductInBasket(productIdOfClick){
    let productTable = `
        <div class="basket__description-header">
            <div>${productsData[productIdOfClick].productName}</div>
        <div>
            <span class="countOfProduct" id="${productIdOfClick}">1</span> шт.
        </div>
        <div>${productsData[productIdOfClick].productPrice}</div>
        <div>
            <span class="totalCountOfProduct" id="${productIdOfClick}">${productsData[productIdOfClick].productPrice}</span>
        </div>
        </div>
    `;
    basketTotal.insertAdjacentHTML('beforebegin', productTable);
}

function increaseProductCount(productIdOfClick){
    const countOfProduct = document.querySelector(`.countOfProduct[id="${productIdOfClick}"]`);
    countOfProduct.textContent++;
}

function recalculateSum(productIdOfClick){
    const totalCount = document.querySelector(`.totalCountOfProduct[id="${productIdOfClick}"]`);
    let totalSum = (basket[productIdOfClick] * productsData[productIdOfClick].productPrice);
    totalCount.textContent = totalSum;
}

function recalculateTotalSumInBasket(){
    let totalSumInBasket = 0;
    for (let productIdOfClick in basket) {
        totalSumInBasket+=basket[productIdOfClick]*productsData[productIdOfClick].productPrice;
    }
    basketTotalValue.textContent = totalSumInBasket;
}

function drawTheProductInBasket(productIdOfClick){
    let productPresent = document.querySelector(`.countOfProduct[id="${productIdOfClick}"]`);
    if (productPresent) {
        increaseProductCount(productIdOfClick);
        recalculateSum(productIdOfClick);
    } else {
        makeNewProductInBasket(productIdOfClick);
    }
}

function increaseTheCounter(){
    counterBasket.textContent++;
}

function addProductInBasket(productIdOfClick){
    increaseTheCounter();
    addProductToGrid(productIdOfClick);
    drawTheProductInBasket(productIdOfClick);
    recalculateTotalSumInBasket();
}

function clicksOfButtons() {
    const addToCart = document.querySelectorAll('.products__item-btn[id]');
    addToCart.forEach(function(button){
        button.addEventListener('click', getIdProduct);
    })
}

function getIdProduct(event){
    const productIdOfClick = event.currentTarget.getAttribute('id');
    addProductInBasket(productIdOfClick);
}

clicksOfButtons();