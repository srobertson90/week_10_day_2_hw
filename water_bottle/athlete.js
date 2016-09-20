var bottle = require('../water_bottle.js')

var athlete = {
  distance: 0,
  hydration: 100,
  run: function(){
    if (this.hydration >= 10){
      this.distance += 25;
      this.hydration -= 10;
    }
  },
  drink: function(){
    bottle.drink();
    if (this.hydration <= 60){
      this.hydration += 40;
    }else{
      this.hydration = 100;
    }
  }

}

module.exports = athlete;