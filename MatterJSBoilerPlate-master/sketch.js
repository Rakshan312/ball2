var ground
var ballIMG , ball
var log1 ,log2 , log3 , bin1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
		ballIMG=loadImage("ball.png");
		binIMG=loadImage("bin.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	ball=createSprite(25, 638, 25,25);
	ball.addImage(ballIMG);
	ball.scale = 0.2;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bin1 =createSprite(395,580,10,10);

	log1 =createSprite(320,635,15,50);
	log2 =createSprite(400,665,150,10);
	log3 =createSprite(470,635,15,50);

log1.shapeColor = ("black")
log2.shapeColor = ("white")
log3.shapeColor = ("black")


	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, ball);
	

ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  keyPressed()

  bin1.addImage(binIMG)

drawSprites();
 
}

function keyPressed(){

	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(ball.body ,ball.body.position ,{x:85,y:-85});
	}
  
	}
