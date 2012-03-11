$(document).ready(function(){
  module("A new square", {
    setup: function () {
      this.x = 10;
      this.y = 15;
      this.side = 20;
      this.square = new Square(this.x, this.y, this.side);
    }  
  });
        
  test("has an x coordinate", function() {
    equal(this.square.x, this.x);
  });

  test("has a y coordinate", function() {
    equal(this.square.y, this.y);
  });

  test("has a side coordinate", function() {
    equal(this.square.side, this.side);
  });

  module("Calculate Hypotenuse", {
    setup: function () {
      this.x = 10;
      this.y = 15;
    }
  });

  test("Calculate simple hypotenuse", function () {
    var side = 25;
    var square = new Square(this.x, this.y, side);
    equal(calculateHypotenuse(square), 35.35533905932738);
  });

  test("Calculate harder hypotenuse", function () {
    var side = -14;
    var square = new Square(this.x, this.y, side);
    equal(calculateHypotenuse(square), 19.79898987322333);
  });

  test("Calculate hardest hypotenuse", function () {
    var side = 0;
    var square = new Square(this.x, this.y, side);
    equal(calculateHypotenuse(square), 0);
  });

});
