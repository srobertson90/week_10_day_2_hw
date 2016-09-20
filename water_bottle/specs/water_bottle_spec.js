var bottle = require('../water_bottle');
var assert = require('assert');

describe('Water Bottle', function(){

it("should be empty", function(){
  assert.equal(0, bottle.volume);
})

it("should fill to 100", function(){
  bottle.refill();
  assert.equal(100, bottle.volume)
})

it("should reduce volume when drank", function(){
  bottle.drink();
  assert.equal(90, bottle.volume)
})

it("should be empty when emptied", function(){
  bottle.empty();
  assert.equal(0, bottle.volume)
})

it("should not go below 0 when dank", function(){
  bottle.drink();
  assert.equal(0, bottle.volume)
})

})