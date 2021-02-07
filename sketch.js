
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,550,40);
	bob2 = new Bob(280,550,40);
	bob3 = new Bob(360,550,40);
	bob4 = new Bob(440,550,40);
	bob5 = new Bob(520,550,40);
	roof = new Roof(370,200,450,30);
	//rope1 = new Rope(bob1.body,roof.body,20,0);
    rope1 = new Rope(bob1.body,{x:200,y:200})
	rope2 = new Rope(bob2.body,{x:280,y:200})
	rope3 = new Rope(bob3.body,{x:360,y:200})
	rope4 = new Rope(bob4.body,{x:440,y:200})
	rope5 = new Rope(bob5.body,{x:520,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyDown(UP_ARROW)) {
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:570,y:-150});
	}
}



