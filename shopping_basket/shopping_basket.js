var basket = {
  contents: [],
  addItem: function(item){
    this.contents.push(item);
  },
  removeItem: function(item){
    var index = this.contents.indexOf(item);
    this.contents.splice(index, 1);
  },
  contentsValue: function(){
    var total = 0;
    for (var i = 0; i < this.contents.length; i++){
      var item = this.contents[i];
      var value = (item*2)-1.01;
      total += value;
    }
    return total;
  },
  // bogof: function(){
  //   var value = this.contentsValue();
  //   for (var item of this.contents){
      
  //   }
  //   return value;
  // },
  discountedValue: function(card){
    var value = this.contentsValue();
    if (value >= 20){
      if (card){
        value *= 0.85;
      }else{
        value *=0.9;
      }
    }
    return value.toFixed(2);
  }

}

module.exports = basket;