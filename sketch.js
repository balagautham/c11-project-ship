var ship ,ship1;
var sea ,sea1;
function preload() {
  sea1=loadAnimation("sea.png")
  ship1=loadAimation("ship-1.png","ship-2.png")
}

function setup(){
createCanvas(600,500)

//create the ship
ship=createSprite(500,200,20,50)
ship.addAnimation("running",ship1)
edges=createEdgeSprites
//create the sea
sea=createSprite(600,300)
sea.addAnimation("running",sea1)


//add the scale and position to the ship
ship.scale=0.25
ship.x = 90;
ship.y = 300;
//add the scale and position to the sea
sea.scale=0.5
sea.velocityX=-3
function draw(){
background("blue")
if(keydown("space")){
  ship.velocityX=5
}
if(keydown("right")){
ship.velocityX=0
}
if(keydown("enter"))
ship.velocityX=0
}
if(sea.x < 0){
  sea.x =sea.width/2;
}
//stop the ship from fallin down
ship.collide(edges[3])
drawSprites();
}