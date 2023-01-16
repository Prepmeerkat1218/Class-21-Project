
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var rightSide;
var leftSide;
var ground;




function setup() {
	createCanvas(1100, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(550,490,width,20);
	rightSide = new Ground(800,500,20,200);
	leftSide = new Ground(1000,500,20,200);

	//Create the Bodies Here.
    var ball_options = {
		isStatic: false,
		restitution: 0.3,
		density: 1.0
	}

	ball = Bodies.circle(200,200,20,ball_options)
	World.add(world,ball)


	
    
    ellipseMode(RADIUS);
	rectMode(CENTER);

}


function draw() {
  background(94);

  ground.show();
  rightSide.show();
  leftSide.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

  drawSprites()
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:45,y:45})
	}
}



