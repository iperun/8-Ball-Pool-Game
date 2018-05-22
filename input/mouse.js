function handleMouseMove(evt) {

  let x = evt.pageX;
  let y = evt.pageY;

  Mouse.position = new Vector2(x, y);
}

function handleMouseDown(evt) {
  // Get current position of mouse
  handleMouseMove(evt);
  // Properties set and check which buttons are pressed
  if (evt.which === 1) {
    if (!Mouse.left.down)
      Mouse.left.pressed = true;
    Mouse.left.down = true;
  } else if (evt.which === 2) {
    if (!Mouse.middle.down)
      Mouse.middle.down.pressed = true;
    Mouse.middle.down = true;
  } else if (evt.which === 3) {
    if (!Mouse.right.down)
      Mouse.right.pressed = true;
    Mouse.right.down = true;
  }

}

function handleMouseUp(evt) {
  // Get current position of mouse
  handleMouseMove(evt);
  // Check Attribute which button is released
  if (evt.which === 1)
    Mouse.left.down = false;
  else if (evt.which === 2)
    Mouse.middle.down = false;
  else if (evt.which === 3)
    Mouse.right.down = false;
}

// Create mouse handler
function MouseHandler() {

  this.left = new ButtonState();
  this.middle = new ButtonState();
  this.right = new ButtonState();

  this.position = new Vector2();

  document.onmousemove = handleMouseMove;
  document.onmousedown = handleMouseDown;
  document.onmouseup = handleMouseUp;
}
// Create mouse object
let Mouse = new MouseHandler();
