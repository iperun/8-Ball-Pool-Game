function Game() {

}
// Initialize the Game
Game.prototype.init = function() {

  this.gameWorld = new GameWorld();
}
// Start the Game
Game.prototype.start = function() {

  PoolGame.init();

  PoolGame.mainLoop();

}
// Start assets
Game.prototype.mainLoop = function() {

  Canvas.clear();
  // Update game world
  PoolGame.gameWorld.update();
  // Draw game game world
  PoolGame.gameWorld.draw();

  requestAnimationFrame(PoolGame.mainLoop);

}

let PoolGame = new Game();
