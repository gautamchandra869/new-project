const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        restitution: 1.0
    }

   object= Bodies.rectangle(200,200,20,20,object_options);
    World.add(world,object);
var ground_option ={
    isStatic:true
}

   ground= Bodies.rectangle(200,390,200,20,ground_option);
   World.add(world,ground);


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,20,20);
    rect(ground.position.x,ground.position.y,400,20);
}
