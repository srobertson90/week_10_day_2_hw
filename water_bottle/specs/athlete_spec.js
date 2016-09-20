var athlete = require('../athlete.js');
var assert = require('assert');

describe('Athlete', function(){

  it("starts at distance 0", function(){
    assert.equal(0, athlete.distance);
  })

})