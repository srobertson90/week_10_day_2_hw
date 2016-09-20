var basket = require('../shopping_basket.js');
var assert = require('assert');

describe('Shopping Basket', function(){

it("should be empty", function(){
  assert.equal(0, basket.contents.length);
})

it("can add item", function(){
  basket.addItem(3);
  assert.equal(1, basket.contents.length);
})

it("can remove item", function(){
  assert.equal(1, basket.contents.length);
  basket.removeItem(3);
  assert.equal(0, basket.contents.length);
})

it("can get contents value", function(){
  basket.addItem(4);
  basket.addItem(6);
  basket.addItem(2);
  assert.equal(20.97, basket.contentsValue());
})

// it("calculates bogof", function(){
//   basket.addItem(4);
//   assert.equal(20.97, basket.contentsValue());
// })

it("can apply over 20 discount", function(){
  assert.equal(18.87, basket.discountedValue(false));
})

it("can apply membership discount", function(){
  assert.equal(17.82, basket.discountedValue(true));
})

})