const DELTA = 1 / 100;
// Contains physical objects of game
function GameWorld() {

  this.whiteBall = new Ball(new Vector2(413, 413));
  this.stick = new Stick(
    new Vector2(413, 413),
    this.whiteBall.shoot.bind(this.whiteBall));
}
// Updates objects in the Game
GameWorld.prototype.update = function() {

  this.stick.update();
  this.whiteBall.update(DELTA);

}

// Draws objects in Game
GameWorld.prototype.draw = function() {

  Canvas.drawImage(sprites.background, {
    x: 0,
    y: 0
  });

  this.stick.draw();
  this.whiteBall.draw();
}
