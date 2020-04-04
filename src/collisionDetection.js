export function detectCollision(ball, gameObject) {
  let topOfBall = ball.position.y;
  let bottomOfBall = ball.position.y + ball.size;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}

export function detectCollision2(obj1, obj2) {
  let topOfobj1 = obj1.position.y;
  let bottomOfobj1 = obj1.position.y + obj1.height;
  let leftSideOfobj1 = obj1.position.x;
  let rightSideOfobj1 = obj1.position.x + obj1.width;

  // console.log({ topOfobj1 });
  // console.log({ bottomOfobj1 });
  // console.log({ leftSideOfobj1 });
  // console.log({ rightSideOfobj1 });
  
  let topOfObj2 = obj2.position.y;
  let bottomOfObj2 = obj2.position.y + obj2.height;
  let leftSideOfObj2 = obj2.position.x;
  let rightSideOfObj2 = obj2.position.x + obj2.width;

  if (
    bottomOfobj1 >= topOfObj2 &&
    topOfobj1 <= bottomOfObj2 &&
    leftSideOfobj1 <= rightSideOfObj2 &&
    rightSideOfobj1 >= leftSideOfObj2
  ) {
    return true;
  } else {
    return false;
  }
}

