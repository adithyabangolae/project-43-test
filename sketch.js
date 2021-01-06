const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hr = hour();
var mn = minute();
var sc = seconds();
var scAngle;






function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
 
  hr = hour();
  mn = minute();
  sc = seconds();
  scAngle = map(sc,0,60,0,360)
}

function draw() {
  background(255,255,255); 

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  push();
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop();

  push();
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(5)
  line(0,0,100,0)
  pop();

  push();
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(9)
  line(0,0,100,0)
  pop();

  Engine.update(engine);
  drawSprites();
}