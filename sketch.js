const Engine=Matter.Engine;
const Render=Matter.Render;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Body=Matter.Body;
const Composites=Matter.Composites;
const Composite=Matter.Composite;

var backgroundImg;
var blink;
var ground;
var frog;
var jump;
var flyImg;
var fly;
var fliesGroup;

function preload(){
backgroundImg=loadImage("background.png");
flyImg=loadImage("flyTrans.png");
blink=loadAnimation("newblink1.png","newblink2.png","newblink3.png")
jump=loadAnimation("jump1transparent.png","jump2trans.png","jump3trans.png")
blink.playing=true;
jump.playing=false;
}
function setup(){

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    canW = displayWidth; 
    canH = displayHeight; 
    createCanvas(displayWidth+80, displayHeight);
  } 
  else {
    canW = windowWidth; 
    canH = windowHeight; 
    createCanvas(windowWidth, windowHeight);
  }
  frameRate(80);

  engine=Engine.create();

  world=engine.world;
  ground=new Ground(250,canH,600,20);

  frog=createSprite(170,canH-80,100,100);
  frog.scale=1;

  frog.addAnimation('blinking',blink);
  frog.frameDelay=20;


}
function draw(){
  background(51);
  image(backgroundImg,0,0,displayWidth+80,displayHeight);
  Engine.update(engine);

    ground.show();
    flies()
if(frog.isTouching(fly)){
fly.destroy()
}  
  
  drawSprites()
  }
 

function flies(){
  if(frameCount%60===0){
    fly=createSprite(600,120,40,10);
    fly.y=Math.round(random(300,500));
    fly.x=Math.round(random(1100,1200));
    fly.velocityX=-2;
    fly.addImage(flyImg);
    fly.scale=0.3;
    
  }
}