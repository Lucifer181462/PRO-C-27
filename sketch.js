var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof,rope,bobDiameter,rope2,rope3,rope4,rope5;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;
  roof = new ground(width/2,height/4,width/7,20)
  bobDiameter = 40;
  startBobPositionX = width/2;
  startBobPositionY = height/4+500;

	//Create the Bodies Here.
	bobObject1 = new paper(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
  bobObject2 = new paper(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
  bobObject3 = new paper(startBobPositionX,startBobPositionY,bobDiameter);
  bobObject4 = new paper(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
  bobObject5 = new paper(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
  
	
 /*/ var render = Render.create({
    element:document.body,
    engine:engine,
    options:{
      width:1200,
      height:700,
      wireframes:false
    }
  })
  /*/
    rope = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
    rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
    rope3 = new Rope(bobObject3.body,roof.body,0,0);
    rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
    rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 background(230);

  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();
  rope2.display();
 
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-55,y:0});
  
  }
}



