const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var f1,f2,f3;
var ground;
var particles = [];
var plionkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

f1 = new Frame(10,400,20,800);

f2 = new Frame(470,400,20,800);

f3 = new Frame(240,790,480,20);
 
ground = new Ground(240,780,460,10);




for(var k = 0; k<=width; k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

for(var j = 40; j<=width; j=j+50){
  plionkos.push(new Plionkos(j,75));
}

for(var j = 15; j<=width-10; j=j+50){
  plionkos.push(new Plionkos(j,175));
}

for(var j = 40; j<=width; j=j+50){
  plionkos.push(new Plionkos(j,275));
}

}



function draw() {
  background(0); 
  Engine.update(engine); 
 
  f1.display();
  f2.display();
  f3.display();
  ground.display();
  
  for(var j = 0; j<plionkos.length; j++){
    plionkos[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

 
  for (var i = 0; i < particles.length; i++) {
   
    particles[i].display();
  }

  for(var k =0; k< divisions.length ; k++){
     divisions[k].display();
  }

}