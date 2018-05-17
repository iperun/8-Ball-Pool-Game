// Create Canvas
function Canvas2D(){
  this._canvas = document.getElementById('screen');
  this._canvasContext = this._canvas.getContext('2d');
}
// Reset Canvas
Canvas2D.prototype.clear = function(){
  this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}
// Use Canvas Context to draw image at given postitions
Canvas2D.prototype.drawImage = functio(image, position){
  this._canvasCOntext.drawImage(image, position.x, position.y);
}
