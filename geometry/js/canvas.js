var drawSquare = function (ctx, square) {
  ctx.fillStyle = "black";
  ctx.fillRect(square.x, square.y, square.side, square.side);
};

var drawRedLine = function (ctx, square) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(square.x, square.y);
  ctx.lineTo(square.x + square.side, square.y + square.side);
  ctx.stroke();
};

var clear = function (ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

var drawSquareFromInputs = function (ctx) {
  var data = getData();
  clear(ctx);
  currentSquare = new Square(data.x, data.y, data.size);
  drawSquare(ctx, currentSquare);
  drawRedLine(ctx, currentSquare);
};

