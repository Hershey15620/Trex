var treximage, trex,  ground, groundimage, invisibleground, cloudimage, cloudgroup, obstaclegroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6

function preload(){
  treximage= loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimage=loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
  obstacle1= loadImage("obstacle1.png");
  obstacle2= loadImage("obstacle2.png");
  obstacle3= loadImage("obstacle3.png");
  obstacle4= loadImage("obstacle4.png");
  obstacle5= loadImage("obstacle5.png");
  obstacle6= loadImage("obstacle6.png");
}

function setup() {
  createCanvas(400, 400);
  trex= createSprite(50,370,40,20);
  trex.addAnimation("trexrun", treximage);
  trex.scale=0.4;
  
  ground=createSprite(200,380,width,10);
  ground.addImage("ground",groundimage);
  
  invisibleground=createSprite(50,385,200,5);
  invisibleground.visible=false;
  
  cloudgroup=new Group();
  obstaclegroup=new Group();
  
}





function draw() {
  background("white");
  ground.velocityX=-6;
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  if (keyDown("space")&&trex.y>=363){
    trex.velocityY=-15;    
  }
  trex.velocityY=trex.velocityY+1;
  console.log(trex.y);
  
  trex.collide(invisibleground);
    
  SpawnCloud();
  SpawnObstacles();
  
  drawSprites();
}

function SpawnCloud(){
  if (frameCount%60===0){
  var cloud= createSprite(400,320,10,10);
  cloud.addImage("multipleclouds", cloudimage);
  cloud.velocityX=-2;
  cloud.scale=0.5;
  cloud.y=Math.round(random(280,320));
  cloud.lifetime=200;
  trex.depth=cloud.depth;
  trex.depth=trex.depth+1;
  cloudgroup.add(cloud);
  }
  
  
}

function SpawnObstacles(){
  if (frameCount%60===0){
    var obstacle= createSprite(400,370,10,10)
    obstacle.velocityX=-6;
    obstacle.scale=0.45;
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1:obstacle.addImage(obstacle1);
      break;
      case 2:obstacle.addImage(obstacle2);
      break;
      case 3:obstacle.addImage(obstacle3);
      break;
      case 4:obstacle.addImage(obstacle4);
      break;
      case 5:obstacle.addImage(obstacle5);
      break;
      case 6:obstacle.addImage(obstacle6);
      break;
      default:break;
    }
    
    obstaclegroup.add(obstacle);
    
    
  }

}


