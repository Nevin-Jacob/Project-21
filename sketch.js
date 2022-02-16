
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var g1, g2, g3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false, 
		restitution: 0.3, 
		friction: 0, 
		density: 1.2		
	};
	ball = Bodies.circle(200, 100, 30, ball_options);
	World.add(world,ball);

	g1 = new ground(width/2, 600, width, 15);
	g2 = new ground(1200, 600, 15, 150);
	g3 = new ground(1300, 600, 15, 150);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 30, 30);

  g1.display();
  g2.display();
  g3.display();
  
  drawSprites();
 }

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.5, y:0})
	}
}

