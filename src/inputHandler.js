export default class InputHandler {
  constructor(paddle) {
    document.addEventListener('keydown',e => {
      const { keyCode } = e;

      switch(keyCode) {
        case 37:
          paddle.moveLeft()
          break;
        case 39:
          paddle.moveRight()
          break;
        default:
          break;
      }
    })
  }
}