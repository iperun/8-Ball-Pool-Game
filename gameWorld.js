// Contains physical objects of game
function GameWorld() {

}
// Updates objects in the Game
GameWorld.prototype.update = function() {

}

// Draws objects in Game
GameWorld.prototype.draw = function() {

  Canvas.drawImage(sprites.background, {x:0, y:0});

}
