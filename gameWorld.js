function GameWorld(){

    this.balls = CONSTANTS.ballsParams.map(params => new Ball(...params));

    this.whiteBall = this.balls.find(ball => ball.color === COLOR.WHITE);

    this.stick = new Stick(
        this.whiteBall.position.copy(),
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

    this.balls[i].handleBallInPocket();
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
    this.balls[i].update(CONSTANTS.delta);
  }

  if (!this.ballsMoving() && this.stick.shot) {
    this.stick.reposition(this.whiteBall.position);
  }

}

// Draws objects in Game
GameWorld.prototype.draw = function(){

    Canvas.drawImage(sprites.background, new Vector2());

    for(let i = 0 ; i < this.balls.length ; i++){
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
