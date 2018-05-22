const STICK_ORIGIN = new Vector2(970, 11);

function Stick(position) {
  this.position = position;
  this.roation = 0;
}

Stick.prototype.update = function() {
  /* Testing stick object
  this.position = Mouse.position;

  if (Mouse.left.pressed) {
    console.log("pressed left");
  }*/
  this.updateRotation();
}

Stick.prototype.draw = function() {
    Canvas.drawImage(sprites.stick, this.position, STICK_ORIGIN, this.rotation);
    }

Stick.prototype.updateRotation = function(){

  let opposite = Mouse.position.y - this.position.y;
  let adjacent = Mouse.position.x - this.position.x;

  this.rotation = Math.atan2(opposite, adjacent);
}
