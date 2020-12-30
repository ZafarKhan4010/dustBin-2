
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustBin1,dustBin2,dustBin3;
var paperImage,backGroundImage;
var bin,binImage;

function preload(){

  paperImage=loadImage("paper.png");
  backGroundImage=loadImage("desert-3.png");
  binImage=loadImage("trash-can.png");

}

function setup() {
	createCanvas(900, 500);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  paper=new Paper(50,70,20,20);
  
	  ground=new Ground(600,height,1200,20) 
  
    dustBin1=new DustBin(670,420,10,190);

    dustBin2= new DustBin(470,420,10,120);
    dustBin3=new DustBin(570,495,210,10);
    
   
    
	
	Engine.run(engine);
  
}


function draw() {
 text("if you press up arrow the paper will go up",450,50);
 text("if you press down arrow the paper will go down",450,70);
 text("you have to put the paper in the dustbin",300,150);
 

 rectMode(CENTER);
 background(backGroundImage);


  paper.display();
  ground.display();
  dustBin3.display();

  
 

  keyPressed();
  //drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
   
    Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y:-0.61})	
  
  }        

  if(keyCode===DOWN_ARROW){
   
    Matter.Body.applyForce(paper.body,paper.body.position,{x:-0.1,y:0.61})	
  
  }        
}