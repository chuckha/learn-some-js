var getData = function () {
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

var updateRedLineValue = function () {
  var redLine = calculateHypotenuse(currentSquare);
  $('#red').text(redLine);
};

var updateAll = function (ctx) {
  drawSquareFromInputs(ctx);
  updateRedLineValue();
};


$(document).ready(function () {
  var c = document.getElementById('draw');
  var ctx = c.getContext('2d');

  $('input').keyup(function () {
    updateAll(ctx);
  });

  $('input').change(function () {
    updateAll(ctx);
  });

  updateAll(ctx);
});
