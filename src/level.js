import Brick from './bricks';

export function buildLevel(game,level) {
  let brickWall = [];


    level.forEach((row, rowIndex)=> {
      row.forEach((brick,brickIndex) => {
        if (brick === 1) {
          let position = {
            x: brickIndex * 33 - 50,
            y: 75 + 33 * rowIndex
          }
          brickWall.push(new Brick(game,position))
        }
      })
    });

  return brickWall;
}

export const level1 = [
  [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

// export const level1 = [
//   [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1],
//   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
//   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
// ]