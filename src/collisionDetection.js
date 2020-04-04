export function detectCollision(obj1, obj2) {
  // let topOfobj1 = obj1.position.y;
  // let bottomOfobj1 = obj1.position.y + obj1.height;
  // let leftSideOfobj1 = obj1.position.x;
  // let rightSideOfobj1 = obj1.position.x + obj1.width;

  // console.log({ topOfobj1 });
  // console.log({ bottomOfobj1 });
  // console.log({ leftSideOfobj1 });
  // console.log({ rightSideOfobj1 });
  
  // let topOfObj2 = obj2.position.y;
  // let bottomOfObj2 = obj2.position.y + obj2.height;
  // let leftSideOfObj2 = obj2.position.x;
  // let rightSideOfObj2 = obj2.position.x + obj2.width;

  // console.log('-----------------------')

  // console.log({ topOfObj2 });
  // console.log({ bottomOfObj2 });
  // console.log({ leftSideOfObj2 });
  // console.log({ rightSideOfObj2 });

  if (
    obj1.position.x < obj2.position.x + obj2.width &&
    obj1.position.x + obj1.width > obj2.position.x &&
    obj1.position.y < obj2.position.y + obj2.height &&
    obj1.position.y + obj1.height > obj2.position.y
  ) {
    return true;
  } else {
    return false;
  }
}

