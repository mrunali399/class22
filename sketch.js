var fixedRect, movingRect;
var gob1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gob1=createSprite(100,100,50,50);
  gob1.shapeColor=" violet" ;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  
  
  bounceOff(movingRect,fixedRect);
  drawSprites();
}



