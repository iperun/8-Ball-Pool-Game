// Load assets for Game
let sprites = {};
let assetsStillLoading = 0;

// Validate all images are loaded
function assetsLoadingLoop(callback) {

  if (assetsStillLoading) {
    requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
  } else {
    callback();
  }

}

// Once assets finish loading, activates
function loadAssets(callback) {
  // Increase number of assets loading
  function loadSprite(fileName) {
    assetsStillLoading++;

    let spriteImage = new Image();
    spriteImage.src = "./assets/sprites/" + fileName;
    // Once image is done loading, Decease number of assets loading
    spriteImage.onload = function() {
      assetsStillLoading--;
    }

    return spriteImage;
  }
  sprites.background = loadSprite('spr_background5.png');
  sprites.stick = loadSprite('spr_stick.png');
  sprites.whiteBall = loadSprite('spr_ball2.png');
  sprites.redBall = loadSprite('spr_redBall2.png');
  sprites.yellowBall = loadSprite('spr_yellowBall2.png');
  sprites.blackBall = loadSprite('spr_blackBall2.png');

  assetsLoadingLoop(callback);
}
// Provide sprite base on the color
function getBallSpriteByColor(color) {

  switch (color) {

    case COLOR.RED:
      return sprites.redBall;
    case COLOR.YELLOW:
      return sprites.yellowBall;
    case COLOR.BLACK:
      return sprites.blackBall;
    case COLOR.WHITE:
      return sprites.whiteBall;
  }
}
