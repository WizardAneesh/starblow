const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;

var nostar
var star
var star_img

function preload(){
  star_img = loadImage("star.png");
  nostar = loadImage("g_star1.png");
}
function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

  star = createSprite(320,50,20,20);
  star.addImage(star_img);
  star.scale = 0.02

  stardisplay = createSprite(50,20,30,30);
  stardisplay.scale = 0.2
  stardisplay.addAnimation("empty",nostar);
  stardisplay.addAnimation("one",star)
}

function draw() {
  background("aquamarine");
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();
  drawSprites();


function blow() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});
}

if(collide(ball,star,20)==true)
{
  star.visible=false; 
  star_display.changeAnimation("one")
}
}

function collide(body,sprite,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}