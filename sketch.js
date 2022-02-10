var fish,fish1,shark;
var bg;
var ob1,ob2;
var shell1,shell2,blue;



function preload() {

  bg= loadImage("images/bg.gif");
  fish =loadImage("images/fish.gif");
  fish1 =loadImage("images/fish1.gif");
  shark =loadImage("images/shark.gif");
  ob1 =loadImage("images/obastcle.gif");
  ob2 =loadImage("images/obastcle.gif");
  shell1 =loadImage("images/shell1.gif");
  shell2 =loadImage("images/shell2.gif");
  blue = loadImage("images/blue.gif");
  
}

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

  bg1= createSprite(200,200,600,600);
  bg1.addImage(bg);
  bg1.scale=2;

  fishes= createSprite(100,200,50,50);
  fishes.addImage(fish);
  fishes.scale=0.3;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}