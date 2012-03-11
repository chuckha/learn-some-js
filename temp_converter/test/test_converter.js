$(document).ready(function(){
  module("Fahrenheit to Celsius");
    
  test("32.0 F is 0.0 C", function() {
    equal(fToC(32.0), 0);
  });

  test("-40.0 F is -40.0 C", function () {
    equal(fToC(-40.0), -40.0);
  });

  test("212.0 F is 100.0 C", function () {
    equal(fToC(212.0), 100);
  });

  test("321.5 F is 160.83 C", function () {
    equal(fToC(321.5), 160.83);
  });

  test("-101.0 F is -73.89 C", function () {
    equal(fToC(-101.0), -73.89);
  });
});
