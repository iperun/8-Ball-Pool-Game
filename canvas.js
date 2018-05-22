// Create Canvas
function Canvas2D() {
  this._canvas = document.getElementById('screen');
  this._canvasContext = this._canvas.getContext('2d');
}
// Reset Canvas
Canvas2D.prototype.clear = function() {
  this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}
// Use Canvas Context to draw image at given postitions
Canvas2D.prototype.drawImage = function(image, position, origin) {

  if (!position) {
    position = new Vector2();
  }

  if (!origin) {
    origin = new Vector2();
  }

  this._canvasContext.save();
  this._canvasContext.translate(position.x, position.y);
  this._canvasContext.drawImage(image, -origin.x, -origin.y);
  this._canvasContext.restore();
}

let Canvas = new Canvas2D();

/*Test drawImage
let image = new Image();
image.src = "./assets/sprites/spr_background5.png";

setTimeout(() => {
  Canvas.drawImage(image, {x:0,y:0});
}, 1000);
*/
