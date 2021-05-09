var paper, dustbin, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var launcher;
function preload(){

}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	
	world = engine.world;

	paper = new Paper(300,200,50,50);
	ground = new Ground(800,690,2400,20);
	dustbin= new Dustbin(800,500);

	launcher = new Launcher(this.paper.body,{x:300, y:200});


	Engine.run(engine);
	
}


function draw() {
  
  background("white");

  paper.display();
  ground.display();
  launcher.display();
  Engine.update(engine);

 drawSprites();
 
}
/*function keyPressed(){
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-155});
	}
}*/
function mouseDragged(){
    Matter.Body.setPosition(this.paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
         launcher.fly();

}
function keyPressed(){
    if (keyCode===32){
        launcher.attach(this.paper);
    }
}
