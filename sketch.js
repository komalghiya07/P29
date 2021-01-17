const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
var polygonImg;
var slingshot;
var engine,world;

function preload(){

}

function setup() {
    createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,height-20,1800,20);

    box1 = new Box(800,635,70,70);
    box2 = new Box(730,635,70,70);
    box3 = new Box(660,635,70,70);
    box4 = new Box(590,635,70,70);
    box5 = new Box(870,635,70,70);
    box6 = new Box(940,635,70,70);
    box7 = new Box(1010,635,70,70);

    
    box8 = new Box(620,565,70,70);
    box9 = new Box(690,565,70,70);
    box10 = new Box(760,565,70,70);
    box11 = new Box(830,565,70,70);
    box12 = new Box(900,565,70,70);
    box13 = new Box(970,565,70,70);

    box14 = new Box(650,495,70,70);
    box15 = new Box(720,495,70,70);
    box16 = new Box(790,495,70,70);
    box17 = new Box(860,495,70,70);
    box18 = new Box(930,495,70,70);

    box19 = new Box(680,425,70,70);
    box20 = new Box(750,425,70,70);
    box21 = new Box(820,425,70,70);
    box22 = new Box(890,425,70,70);

    box23 = new Box(720,355,70,70);
    box24 = new Box(790,355,70,70);
    box25 = new Box(860,355,70,70);

    box26 = new Box(750,285,70,70);
    box27 = new Box(820,285,70,70);

    box28 = new Box(780,215,70,70);

    polygon=new Polygon(50,50);
    
    slingshot= new Slingshot(polygon.body,{x:100,y:200});

}

function draw() {
    rectMode(CENTER);
    background(0);
    Engine.update(engine);
    
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();
    box21.display();
    box22.display();

    box23.display();
    box24.display();
    box25.display();

    box26.display();
    box27.display();

    box28.display();

    polygon.display();
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}