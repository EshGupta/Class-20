var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 4;
  fixedRect.debug = true;
  movingRect = createSprite(600, 200, 50, 80);
  movingRect.shapeColor = "green";
  movingRect.velocityX = -4;
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX*(-1);
      fixedRect.velocityX = fixedRect.velocityX*(-1);
    }

  if (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {}



  drawSprites();
}