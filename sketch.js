const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var Kengine,Kworld;
var ball;
var box1;
function setup() {
  createCanvas(800,400);
  
  Kengine = Engine.create();
  Kworld = Kengine.world;
  ground = new Ground(400,390,800,20);
  box1 = new Box(650,100,50,50);
}

function draw() {
  background("lightgrey"); 
  Engine.update(Kengine) ;
 ground.display();
 box1.display();
}