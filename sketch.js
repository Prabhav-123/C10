var ship , sea  ;
var seaImage,shipImage;

function preload(){
shipImage1 = loadImage ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);

 ship = createSprite(130,200,30,30)
 ship.addAnimation("movingShip",shipImage1);
 ship.scale = 1
  
 sea = createSprite(400,200);
 sea.addImage(seaImage);
 sea.velocityX = -5
 sea.scale = 0.3;
}

function draw() {


 sea.velocityX = -3

 if (sea.x<0){
   sea.x = sea.width/8;
 }



 drawSprites();
}