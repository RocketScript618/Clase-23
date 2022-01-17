const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution: 2,
    frictionAir: 0.05
  }
  var gOptions = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,350,400,20,gOptions);
  World.add(world,ground);
  
  ball = Bodies.circle(200,15,25,options);
  World.add(world,ball);

  rectMode(CENTER);
}


function draw() {
  background("black");
  
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 25);
  rect(ground.position.x, ground.position.y, 400,20);

}
  


