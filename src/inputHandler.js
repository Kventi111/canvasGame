export default class InputHandler {
  constructor({paddle = null,game = null,ball = null,gameState  = null}) {
    document.addEventListener('keydown',e => {
      const { keyCode } = e;

      console.log({ keyCode });
      
      if (gameState == 4) {
        switch(keyCode) {
          case 38:
            game.menuUp()
            break;
          case 40:
            game.menuDown()
            break;
          case 13:
            game.start()
            break;
          default:
            break;
        }
      }

      if (gameState == 1) {
        switch(keyCode) {
          case 37:
            paddle.moveLeft()
            break;
          case 39:
            paddle.moveRight()
            break;
          case 27:
            game.togglePause()
          case 32:
            ball.startBallMoving()
            break;
          default:
            break;
        }
      }
    })
  }
}