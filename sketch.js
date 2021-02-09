const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird;
var log1,log2,log3,log4;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(200,height,2250,20);
    box1 = new Box(700,360,70,70);
    box2 = new Box(900,360,70,70);
    pig1 = new Pig(800,380); 
    log1 = new Log(800,340,350,PI/2);
    box3 = new Box(706,345,70,70);
    box4 = new Box(900,345,70,70);
    pig2 = new Pig(800,345);
    log2 = new Log(800,345,350,PI/2);
    box5 = new Box(790,335,70,70);
    log3 = new Log(770,335,120,PI/4);
    log4 = new Log(830,335,120,-PI/4);
    bird = new Bird(500,500);

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
} 

