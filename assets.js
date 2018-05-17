// Load assets for Game
let sprites = {};
let assetsStillLoading = 0;

funtion assetsLoadingLoop(calback) {

  if (assetsStillLoading) {
    requestsAnimationFrame(assetsLoadingLoop.bind(this, callback));
  } else {
    callback();
  }

}

// Once assets finish loading, activates
function loadAssets(callback) {
  // Increase number of assts loading
  function loadSprite(fileName) {
    assetsStillLoading++;

    let spriteImage = new Image();
    spriteImage.src = "./assets/sprite/" + fileName;
    // Decease number of assets loading
    spriteImage.onload = funtion() {
      assetsStillLoading--;
    }

    return spriteImage;
  }
  sprites.background = loadSprite('spr_background5');
  sprites.stick = loadSprite('spr_stick.png');

  assetsLoadingLopp(callback);
}
