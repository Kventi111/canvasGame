import Paddle from './paddle';
import InputHandler from './inputHandler';
import Ball from './ball'
import { level1,buildLevel } from './level';


const GAME_STATE = {
  PAUSED: 0,
  RUNNING: 1,
  LOSE: 2,
  WIN: 3,
  START_MENU: 4
}

export default class {

  constructor(gameWidth,gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.heartImage = document.getElementById('img_heart')

    this.live = 3;

    this.decrementLive = this.decrementLive.bind(this)
    
    this.highlighter = 1
  }

  menuUp() {
    this.highlighter -= 1

    if (this.highlighter == 0) {
      this.highlighter = 1
    }

  }

  menuDown() {
    this.highlighter += 1

    if (this.highlighter >= 2) {
      this.highlighter = 2
    }
  }

  startMenu() {
    this.gameState = GAME_STATE.START_MENU
    new InputHandler({game: this,gameState: this.gameState});

  }

  start() {
    this.gameState = GAME_STATE.RUNNING;

    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    this.lives = [
      this.heartImage,
      this.heartImage,
      this.heartImage,
    ]

    this.bricks = buildLevel(this,level1)

    new InputHandler({paddle: this.paddle,game: this, ball: this.ball,gameState: this.gameState});
  }


  draw(ctx) {
    if (this.gameState === GAME_STATE.START_MENU) {
      ctx.rect(0,0,this.gameHeight,this.gameWidth)
      ctx.fillStyle = "rgba(0,0,0,0.5)"
      ctx.fill()
  
      ctx.font = "30px Impact"
      ctx.textAlign = 'center'
      ctx.fillStyle = 'white'
  
      if (this.highlighter == 1) {
        ctx.fillStyle = 'red'
      }
      
      ctx.fillText('START GAME',this.gameWidth / 2,this.gameHeight / 2)
  
      ctx.fillStyle = 'white'
  
      if (this.highlighter == 2) {
        ctx.fillStyle = 'red'
      }
      
      ctx.fillText('test 1',this.gameWidth / 2,this.gameHeight / 2 + 30)
  
      ctx.fillStyle = 'white'
  
      ctx.font = "18px Impact"
      ctx.textAlign = 'center'
      ctx.fillText('Нажмите "START GAME" чтобы начать игру',this.gameWidth / 2,this.gameHeight - 20)  
    }

    if (this.gameState == GAME_STATE.RUNNING) {
      ctx.clearRect(0,0,this.gameWidth,this.gameHeight);

      this.lives.forEach((image,index) => {
        ctx.drawImage(image,(index * 20) + 10,10,16,16)
      })
  
      this.paddle.draw(ctx)
      this.ball.draw(ctx)
  
      this.bricks.forEach(i =>  i.draw(ctx))
    }

    if (this.gameState === GAME_STATE.PAUSED) {
      ctx.rect(0,0,this.gameHeight,this.gameWidth)
      ctx.fillStyle = "rgba(0,0,0,0.5)"
      ctx.fill()

      ctx.font = "30px Impact"
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('PAUSED',this.gameWidth / 2,this.gameHeight / 2)
    }
    if (this.gameState === GAME_STATE.LOSE) {
      ctx.rect(0,0,this.gameHeight,this.gameWidth)
      ctx.fillStyle = "rgba(0,0,0,0.5)"
      ctx.fill()

      ctx.font = "30px Impact"
      ctx.fillStyle = 'red'
      ctx.textAlign = 'center'
      ctx.fillText('YOU LOSE',this.gameWidth / 2,this.gameHeight / 2)
    }
    if (this.gameState === GAME_STATE.WIN) {
      ctx.rect(0,0,this.gameHeight,this.gameWidth)
      ctx.fillStyle = "rgba(0,0,0,0.5)"
      ctx.fill()

      ctx.font = "30px Impact"
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('YOU WIN',this.gameWidth / 2,this.gameHeight / 2)
    }
  }

  update(deltaTime) {    
    if (this.gameState == GAME_STATE.PAUSED) return
    if (this.gameState == GAME_STATE.LOSE) return
    if (this.gameState == GAME_STATE.WIN) return
    if (this.gameState == GAME_STATE.START_MENU) return

    this.bricks = this.bricks.filter(i => !i.marked)

    if (this.bricks.length == 0) {
      console.log('win')
      this.gameState = GAME_STATE.WIN
    }
    this.paddle.update(deltaTime);
    this.ball.update(deltaTime)

    // console.log(this.ball);
    // console.log(this.paddle);
    
    this.bricks.forEach(i => i.update(deltaTime))
  }

  togglePause() {
    if (this.gameState == GAME_STATE.PAUSED) {
      this.gameState = GAME_STATE.RUNNING
    } else {
      this.gameState = GAME_STATE.PAUSED
    }
  }

  decrementLive() {

    this.live -= 1;
    this.lives.pop()
    
    if (this.live === 0) {
      this.gameState = GAME_STATE.LOSE
    }
  }

}