// Contains physical objects of game
function GameWorld() {

  this.stick = new Stick();
}
// Updates objects in the Game
GameWorld.prototype.update = function() {

  this.stick.update();
}

// Draws objects in Game
GameWorld.prototype.draw = function() {

  Canvas.drawImage(sprites.background, {
    x: 0,
    y: 0
  });

  this.stick.draw();
}
