var aim;
var bg;
var targetGroups;
function  preload() {
   bg = loadImage("images/bg.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 aim = createSprite(windowWidth/2,windowHeight/2);
 aim.debug = true;
 aim.shapeColor= "lightblue";
 aim.alpha = 0.5;

 targetGroups = new Group();
}

function draw() {
  background(bg);  
  aim.x = mouseX;
  aim.y = mouseY;

  spawnTargets()

  drawSprites();
}

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
 }

 function spawnTargets() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var target = createSprite(120,40,10,10);
    target.y = Math.round(random(0,windowHeight));
    target.x = Math.round(random(0,windowWidth));
    target.scale = 5;
    target.velocityX = -3;
    
     //assign lifetime to the variable
    target.lifetime = 200;
    
    //adjust the depth
    target.depth = aim.depth;
    aim.depth = aim.depth + 1;
    
    //add each cloud to the group
    targetGroups.add(target);
  }
  
}