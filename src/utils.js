export function detectCollisions(gameObjects) {
  let obj1;
  let obj2;

  // Reset collision state of all objects
  for (let i = 0; i < gameObjects.length; i++) {
    gameObjects[i].isColliding = false;
  }

  // Start checking for collisions
  for (let i = 0; i < gameObjects.length; i++) {
    obj1 = gameObjects[i];
    for (let j = i + 1; j < gameObjects.length; j++) {
      obj2 = gameObjects[j];

      // Compare object1 with object2
      if (
        rectIntersect(
          obj1.x,
          obj1.y,
          obj1.width,
          obj1.height,
          obj2.x,
          obj2.y,
          obj2.width,
          obj2.height
        )
      ) {
        obj1.isColliding = true;
        obj2.isColliding = true;

        resolveCollision(obj1,obj2)
      }
    }
  }
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
  // Check x and y for overlap
  if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
    return false;
  }
  return true;
}

function getVCollision(obj1, obj2) {
  let vCollision = { x: obj2.x - obj1.x, y: obj2.y - obj1.y };

  // console.log({vCollision});

  return vCollision;
}

function getDistance(obj1, obj2) {
  let distance = Math.sqrt(
    (obj2.x - obj1.x) * (obj2.x - obj1.x) +
      (obj2.y - obj1.y) * (obj2.y - obj1.y)
  );

  // console.log({ distance });

  return distance;
}

function getVCollisionNorm(vCollision, distance) {
  let vCollisionNorm = {
    x: vCollision.x / distance,
    y: vCollision.y / distance,
  };

  // console.log({ vCollisionNorm });

  return vCollisionNorm;
}

function getVRelativeVelocity(obj1, obj2) {
  let vRelativeVelocity = { x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy };

  // console.log({ vRelativeVelocity });

  return vRelativeVelocity;
}


export function resolveCollision(obj1,obj2) {
    const vCollision = getVCollision(obj1, obj2);
    const distance = getDistance(obj1, obj2);
    const vCollisionNorm = getVCollisionNorm(vCollision, distance);
    const vRelativeVelocity = getVRelativeVelocity(obj1, obj2);

    let speed =
      vRelativeVelocity.x * vCollisionNorm.x +
      vRelativeVelocity.y * vCollisionNorm.y;


    if (speed < 0) {
      return;
    }


    obj1.vx -= speed * vCollisionNorm.x;
    obj1.vy -= speed * vCollisionNorm.y;
    obj2.vx += speed * vCollisionNorm.x;
    obj2.vy += speed * vCollisionNorm.y;
}