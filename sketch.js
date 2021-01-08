
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

var rect = createSprite(300,350,5,50);
rect.shapeColor = "red";

var rect1 = createSprite(330,375,60,5);
rect1.shapeColor = "red";

var rect2 = createSprite(360,350,5,50);
rect2.shapeColor = "red";

var ball  = createSprite(370,20,20,20);
ball.shapeColor = "blue";
	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown("UP_ARROW")){
	  ball.velocityY = -2;
	  ball.collide(rect);
  }

  drawSprites();
 
}



