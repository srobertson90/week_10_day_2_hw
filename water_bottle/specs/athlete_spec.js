var athlete = require('../athlete.js');
var bottle = require('../water_bottle');
var assert = require('assert');

describe('Athlete', function(){

  it("starts at distance 0", function(){
    assert.equal(0, athlete.distance);
  })

  it("starts at hydration 100", function(){
    assert.equal(100, athlete.hydration);
  })

  it("moves when running", function(){
    athlete.run();
    assert.equal(25, athlete.distance);
  })

  it("deyhdrates when running", function(){
    assert.equal(90, athlete.hydration);
  })

  it("can rehydrate", function(){
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.drink();
    assert.equal(80, athlete.hydration);
  })

  it("caps at 100 hydration", function(){
    athlete.drink();
    assert.equal(100, athlete.hydration);
  })

})