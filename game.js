function Game() {

}
// Initialize the Game
Game.prototype.init = function() {

  this.gameWorld = new GameWorld();
}
// Start the Game
Game.prototype.start = function() {

  this.init();
  this.mainLoop();

}
// Start assets
Game.prototype.mainLoop = function() {

  Canvas.clear();
  // Update game world
  PoolGame.gameWorld.update();
  // Draw game game world
  PoolGame.gameWorld.draw();

  requestsAnimationFrame(PoolGame.mainLoop);

}

let PoolGame = new Game();
