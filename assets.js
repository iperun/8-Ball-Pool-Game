// Load assets for Game
let sprites = {};
let assetsStillLoading = 0;

// Validate all images are loaded
funtion assetsLoadingLoop(callback) {

  if (assetsStillLoading) {
    requestsAnimationFrame(assetsLoadingLoop.bind(this, callback));
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
    spriteImage.src = "./assets/sprite/" + fileName;
    // Once image is done loading, Decease number of assets loading
    spriteImage.onload = funtion() {
      assetsStillLoading--;
    }

    return spriteImage;
  }
  sprites.background = loadSprite('spr_background5.png');
  sprites.stick = loadSprite('spr_stick.png');

  assetsLoadingLoop(callback);
}
