function preload() {
  zombieWalking = loadAnimation("Zombie/Zombie 1.png","Zombie/Zombie 2.png","Zombie/Zombie 3.png","Zombie/Zombie 4.png","Zombie/Zombie 5.png","Zombie/Zombie 6.png")
  playerImage = loadAnimation("Player/Player 1.png","Player/Player 2.png","Player/Player 3.png","Player/Player 4.png","Player/Player 5.png",)
  bg= loadImage("Images/Background.jpg");
}
function setup() {

  createCanvas(1366,657);
  player = createSprite(300, 606, 70, 100);
  player.addAnimation("player",playerImage);
  player.scale= 2

}

function draw() {
  background(bg); 
  textSize(18);
  text(mouseX+":"+mouseY,mouseX,mouseY)
  if (keyDown(LEFT_ARROW)){
    player.x -= 1 
  } 
  if (keyDown(RIGHT_ARROW)){
    player.x += 1
  }
  spawnZombie();
  drawSprites();  
}
function spawnZombie(){
  if (frameCount%60==0){

  
  zombie =   createSprite(1366, 600, 50, 50);
  zombie.addAnimation("zombieWalking",zombieWalking)
  zombie.scale = 1
  zombie.velocityX= -2
}
}