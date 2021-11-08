var bg;
var Spaceship,ship_Img;
var asteroid,asteroid_Img;
var shooter,shooter_Img;
var Sprite;

function preload(){
  bg = loadImage("Images/Space.png");
  ship_Img = loadImage("Images/SpaceShip.png");
  asteroid_Img = loadImage("Images/Asteroid.png");
  shooter_Img = loadImage("Images/Shooter1.png");
}

function setup(){
  createCanvas(800,550);

  Spaceship = createSprite(400,450);
  Spaceship.addImage(ship_Img);
  Spaceship.scale = 0.2;

  Sprite = createSprite(300,200,1000,1000);
  Sprite.visible = false;

}

function draw(){
  background(bg);

  Spaceship.x = mouseX;

  if(mousePressedOver(Sprite)){
    createShooter();
  }

  // if(keyDown("UP_ARROW")){
  //   createShooter();
  // }

  edges = createEdgeSprites();
  Spaceship.bounceOff(edges);

  if(frameCount%60===0){
    asteroid = createSprite(10,10,10,10);
    asteroid.addImage(asteroid_Img);
    asteroid.x = Math.round(random(10,600));
    asteroid.scale = 0.1;
    asteroid.velocityY = 2;
  }
  
  drawSprites();
}

function createShooter(){
  shooter = createSprite(360,100,5,10);
  shooter.velocityY = -2;
  shooter.x = Spaceship.x;
  shooter.addImage(shooter_Img);
  shooter.scale = 0.09;
  shooter.shapeColor = "Red";
  shooter.y = Spaceship.y;
  return shooter;
}









































// 
// var girl,girlImg;
// var wolf,wolf_Img;
// var parents,parentsImg;
// var ground,groundImg;

// function preload(){
// bg = loadImage("Images/Garden3.jpg");
// wolf_Img = loadAnimation("Images/Wolf.png","Images/Wolf2.png");
// }

// function setup(){
//  canvas = createCanvas(1200,400);

//  girl = createSprite(200,400,20,20);
//  girl.shapeColor = "White";
 
//  parents = createSprite(1100,200,20,20);
//  parents.shapeColor = "yellow";

//  ground = createSprite(600,400,1200,10);
// }

// function draw(){
// background(bg);

// if(keyDown("SPACE")){
//   girl.velocityY = -4;
// }

// girl.velocityY = girl.velocityY+0.8;

// if(ground.x<400){
//  ground.x = ground.width/2;
// }

// if(frameCount%60===0){
//   wolf = createSprite(1100,300,20,20);  
//   // wolf.addAnimation("wolf",wolf_Img);
//   wolf.shapeColor = "red";
//   wolf.scale = 0.2;
//   wolf.y = Math.round(random(10,600));
//   wolf.velocityX = -3;
// }

// girl.collide(ground);
// drawSprites();
// }









// // GAME
// // var girl,girlImg;
// // var butterfly,butterflyImg;
// // var score = 0;

// // function preload(){
// //  bg = loadImage("Garden3.jpg");
// //  butterflyImg = loadAnimation("Butterfly1.png","Butterfly2.png");
// //  girlImg = loadImage("Girl.png");
// // }

// // function setup(){
// //  createCanvas(1100,400);

// //  girl = createSprite(200,200,20,20);
// //  girl.addImage(girlImg);
// // }

// // function draw(){
// //   background(bg)
// //   if(keyCode==32){
// //     girl.velocityY = -2;
// //   }

// //   if(girl.y<300){
// //     score = score+10
// //   }

// //   if(frameCount%100==0){
// //     butterfly = createSprite(400,200,10,10);
// //     butterfly.addAnimation("butter",butterflyImg);
// //     butterfly.y = Math.round(random(30,100));
// //     butterfly.scale = 0.1;
// //     butterfly.velocityX = 2;
// //   }


// //   drawSprites();
// //   textSize(20);
// //   fill("Black");
// //   stroke("Black");
// //   text("Score : "+ score,850,50);
// // }


// // NEXT GAME

// // var badminton1,badminton1_Img;
// // var badminton2,badminton2_Img;
// // var badminton3,badminton3_Img;
// // var cock;

// // function preload(){
// // badminton1_Img = loadAnimation("Badminton1.png");
// // badminton2_Img = loadImage("Badminton2.png");
// // badminton3_Img = loadAnimation("Badminton4.png");
// // bg = loadImage("Background2.jpg");
// // }

// // function setup(){
// //  createCanvas(1000,400);
// //   badminton1 = createSprite(800,200,100,100);
// //   badminton1.addAnimation("bad1",badminton1_Img);
// //   badminton1.addAnimation("bad",badminton3_Img);
// //   badminton1.scale = 0.4;

// //   badminton2 = createSprite(150,200,100,100);
// //   badminton2.addImage(badminton2_Img);
// //   badminton2.addAnimation("bad1",badminton3_Img);
// //   badminton2.scale = 0.4;

// //   cock = createSprite(500,200,20,20);
// //   cock.velocityX = -2;
// // }

// // function draw(){
// // background(bg);

// // if(keyCode==32){
// //   badminton1.changeAnimation("bad",badminton3_Img);
// // }

// // if(keyCode==32){
// //   badminton2.changeAnimation("bad1",badminton3_Img);
// // }

// // drawSprites();
// // }