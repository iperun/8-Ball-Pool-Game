const BALL_ORIGIN = new Vector2(25, 25);

function Ball(position, color) {
  this.position = position;
  this.velocity = new Vector2();
  this.moving = false;
  this.sprite = getBallSpriteByColor(color);
}

Ball.prototype.update = function(delta) {

  this.position.addTo(this.velocity.mult(delta));
  // add friction
  this.velocity = this.velocity.mult(0.98);

  if(this.velocity.length() < 5){
    this.velocity = new Vector2();
    this.moving = false;
  }
}

Ball.prototype.draw = function() {
  Canvas.drawImage(this.sprite, this.position, BALL_ORIGIN);
}

Ball.prototype.shoot = function(power, rotation) {

  this.velocity = new Vector2(power * Math.cos(rotation), power * Math.sin(rotation));
  this.moving = true;
}
