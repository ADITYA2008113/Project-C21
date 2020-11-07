
var wall;
var  connectingrod1, connectingrod2;
var bullet;

var wallThickness;
var bulletSpeed, bulletWeight;

function setup() {
  createCanvas(1600,400);
 

  wallThickness=random(22, 83);
  wall = createSprite(1500, 200, wallThickness, height/2);
  wall.shapeColor=(80, 80, 80);
  connectingrod1 = createSprite(815, 120, 1350, 5);
  connectingrod2 = createSprite(815, 280, 1350, 5);

  bulletWeight=random(30, 52);
  bulletSpeed=random(223, 321);
  bullet = createSprite(180, 200, 30, 5);
  bullet.shapeColor="white";
   
}

function draw() {
  background(50, 50, 50);    
  fill(300);
  text("Press SPACE to Start", 900, 50);

  if (keyDown("SPACE")) {    
    bullet.velocityX=bulletSpeed; 
  }

if (hasCollided(bullet, wall)) {

  bullet.velocityX=0;

  text("Press F5 to Restart", 900, 350) 
  var damage=0.5 * bulletWeight * bulletSpeed* bulletSpeed/(wallThickness *wallThickness *wallThickness);
  
  if (damage>10){
    wall.shapeColor=(color(255, 0, 0));
  }

  if (damage<10){
    wall.shapeColor=(color(0, 255, 0));
  }

}

  drawSprites();
 
}
function hasCollided(bullet, wall) {

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true
  }

  else return false;
}


