export default class InputHandler {
  constructor(paddle,game) {
    document.addEventListener('keydown',e => {
      const { keyCode } = e;

      switch(keyCode) {
        case 37:
          paddle.moveLeft()
          break;
        case 39:
          paddle.moveRight()
          break;
        case 27:
          game.togglePause()
          break;
        default:
          break;
      }
    })
  }
}