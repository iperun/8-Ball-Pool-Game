const DELTA = 1 / 177;
// Contains physical objects of game
function GameWorld() {
  // create the ball objects
  this.balls = CONSTANTS.ballsParams.map(params => new Ball(...params));

  this.whiteBall = this.balls[this.balls.length - 1];
  this.stick = new Stick(
    new Vector2(413, 413),
    this.whiteBall.shoot.bind(this.whiteBall)
  );

  this.table = {
    TopY: 57,
    RightX: 1443,
    BottomY: 768,
    LeftX: 57
  }
}
// Collision handling
GameWorld.prototype.handleCollisions = function() {
  for (let i = 0; i < this.balls.length; i++) {
    this.balls[i].collideWithTable(this.table);
    for (let j = i + 1; j < this.balls.length; j++) {
      const firstBall = this.balls[i];
      const secondBall = this.balls[j];
      firstBall.collideWithBall(secondBall);
    }
  }
}

// Updates objects in the Game
GameWorld.prototype.update = function() {

  this.handleCollisions();

  this.stick.update();

  for (let i = 0; i < this.balls.length; i++) {
    this.balls[i].update(DELTA);
  }

  if (!this.ballsMoving() && this.stick.shot) {
    this.stick.reposition(this.whiteBall.position);
  }

}

// Draws objects in Game
GameWorld.prototype.draw = function() {

  Canvas.drawImage(sprites.background, {
    x: 0,
    y: 0
  });

  for (let i = 0; i < this.balls.length; i++) {
    this.balls[i].draw();
  }

  this.stick.draw();

}

GameWorld.prototype.ballsMoving = function() {

  let ballsMoving = false;

  for (let i = 0; i < this.balls.length; i++) {
    if (this.balls[i].moving) {
      ballsMoving = true;
      break;
    }
  }
  return ballsMoving;
}
