const g = 1; 
const jump = 20; 
const ground = 20;
const size = 20;

let x, y, vy;

let obstacleMovement;
let obstacleMovement2;
let obstacleMovement3;
let obstacleMovement4;

let characterImage;
let obstacleImage;
let backgroundImage;

function preload(){
  characterImage = loadImage("images/character.png");
  obstacleImage = loadImage("images/obstacles.png");
  backgroundImage = loadImage("images/background.gif");
}

function setup(){
    createCanvas(500, 500);
    background('silver');
    x = width / 2;
    y = height - ground - size / 2;
    vy = 0;
    obstacleMovement = 0
    obstacleMovement2 = 0
    obstacleMovement3 = 0
    obstacleMovement4 = 0
   
 }

 function draw() {
   background('silver')
   image(backgroundImage,1,1,500,500)
   //character
   let gy = height - ground;
   line(0, gy, width, gy);
   
   image(characterImage,x-230, y-10, size, size);
   
   y += vy;
 
   
   if(y < height - ground - size / 2){ // in the air
     vy += g;
   }
   else{
     vy = 0;
     y = height - ground - size / 2;
   }
    //obstacle
  fill('red')
  image(obstacleImage,450+obstacleMovement, 395, 50, 86)
  obstacleMovement -= 5
  image(obstacleImage,800+obstacleMovement2,395, 50, 86)
  obstacleMovement2 -= 5
  image(obstacleImage,1000+obstacleMovement3,445, 50, 35)
  obstacleMovement3 -=5
  image(obstacleImage,1300+obstacleMovement4,410, 50, 70)
  obstacleMovement4 -=5

  if(obstacleMovement < -500){
    obstacleMovement += 1500
  }
  if(obstacleMovement2 < -1000){
    obstacleMovement2 += 1500
  }
  if(obstacleMovement3 < -1500){
    obstacleMovement3 += 1500
  }
  if(obstacleMovement4 < -2000){
    obstacleMovement4 += 1500
  }

    
}

function mouseClicked() {
  if(y >= height - ground - size / 2){ // on the ground
    vy = -jump;     
  }
}
