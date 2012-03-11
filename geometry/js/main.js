// You don't need to worry about this file, it just makes index.html work.

// Get the data from the input fields
var getData = function () {
  // Note: the attribute returns a string so we must parseInt from the string.
  var x = parseInt($('#x').attr('value'), 10);
  var y = parseInt($('#y').attr('value'), 10);
  var size = parseInt($('#size').attr('value'), 10);
  return {
    x: x,
    y: y,
    size: size
  };
};

var currentSquare = null;

// This updates the length of the hypotenuse
var updateRedLineValue = function () {
  var redLine = calculateHypotenuse(currentSquare);
  $('#red').text(redLine);
};

// A wrapper function that will redraw a square and update values
var updateAll = function (ctx) {
  drawSquareFromInputs(ctx);
  updateRedLineValue();
};


$(document).ready(function () {
  var c = document.getElementById('draw');
  var ctx = c.getContext('2d');

  // When a user is typing, update everything when the keyup event fires
  $('input').keyup(function () {
    updateAll(ctx);
  });

  // Or when the the inputs change, update everything
  $('input').change(function () {
    updateAll(ctx);
  });

  // Initialize the data and draw the square
  updateAll(ctx);
});
