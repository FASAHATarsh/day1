function setup() {
  createCanvas(windowWidth,windowHeight) ;
  ballon = createSprite(windowWidth/2,windowHeight/2+windowHeight/4,windowWidth/4,windowHeight/4);
  ball = createSprite(windowWidth/2,windowHeight/2-windowHeight/4,windowWidth/7,windowHeight/12.5);
  
 
}

function draw() {
  background('blue');  
  ballon.shapeColor= ("red");
  ball.shapeColor= ("green");
  ball.x=mouseX;
  ball.y=mouseY;
  ball.collide(ballon);
 // console.log(frameRate());
  drawSprites();
 
}