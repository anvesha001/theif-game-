var police 
var theif 
var randv 

function setup() {
  createCanvas(windowWidth,windowHeight);
  police = createSprite (100,100,30,30);
  police.shapeColor = "green" ; 

  theif = createSprite (width-100,height-100,20,20);
  theif.shapeColor = "red";
  randv = Math.round (random (1,3)) ;

  wall1 = createSprite (10,70,100,10);
  wall2 = createSprite (100,10,10,200);
  wall3 = createSprite (150,25,100,10);
  wall4 = createSprite (60,140,100,10);
  wall5 = createSprite (150,120,10,100);
  wall6 = createSprite (241,84,10,100);
  wall7 = createSprite (260,160,100,10);
  wall8 = createSprite (330,60,90,10);
  wall9 = createSprite (330,60,90,10);
  wall10 = createSprite (10,250,100,10);
  wall11 = createSprite (55,250,10,100);
  wall12 = createSprite (35,465,10,350);
  wall13 = createSprite (155,300,10,100);
  wall14 = createSprite (150,220,120,10);
  wall15 = createSprite (225,430,10,250);
  wall16 = createSprite (215,25,100,10);
  wall17 = createSprite (232,295,100,10);
  wall18 = createSprite (281,250,10,100);
  wall19 = createSprite (275,400,50,10);
  wall20 = createSprite (324,387,10,203);
  wall21 = createSprite (339,240,10,50);
  wall22 = createSprite (388,230,100,10);
  wall23 = createSprite (105,383,100,10);
  wall24 = createSprite (130,580,100,10);
  wall25 = createSprite (270,530,10,100);
  wall26 = createSprite (335,570,100,10);
  wall27 = createSprite (400,520,10,400);
  wall28 = createSprite (472,291,10,200);
  wall29 = createSprite (65,440,10,100);
  wall30 = createSprite (175,542,10,100);
  wall31 = createSprite (495,420,100,10);
  wall32 = createSprite (540,435,10,100);
  wall33 = createSprite (505,550,100,10);
  wall34 = createSprite (360,120,100,10);
  wall35 = createSprite (435,20,10,100);
  wall36 = createSprite (560,27,10,300);
  wall37 = createSprite (510,140,100,10);
  wall38 = createSprite (645,580,10,155);
  wall39 = createSprite (545,245,10,50);
  wall40 = createSprite (550,225,50,10);
  wall41 = createSprite (561,354,200,10);
  wall42 = createSprite (750,607,10,555);
  wall43 = createSprite (680,176,200,10);
  wall44 = createSprite (653,437,100,10);

  wall45 = createSprite (656,277,10,100);

  wall46 = createSprite (653,437,100,10);
  wall47 = createSprite (653,437,100,10);
  wall48 = createSprite (653,437,100,10);
  wall49 = createSprite (653,437,100,10);
  wall50 = createSprite (653,437,100,10);
  wall51 = createSprite (653,437,100,10);
  wall52 = createSprite (653,437,100,10);
  wall53 = createSprite (653,437,100,10);
  wall54 = createSprite (653,437,100,10);
  wall55 = createSprite (653,437,100,10);
  wall56 = createSprite (653,437,100,10);
  wall57 = createSprite (653,437,100,10);
  wall58 = createSprite (653,437,100,10);
  wall59 = createSprite (653,437,100,10);
  wall60 = createSprite (653,437,100,10);
  wall61 = createSprite (653,437,100,10);
  wall62 = createSprite (653,437,100,10);
  wall63 = createSprite (653,437,100,10);
  wall64 = createSprite (653,437,100,10);
  wall65 = createSprite (653,437,100,10);
  wall66 = createSprite (653,437,100,10);
  wall67 = createSprite (653,437,100,10);
  wall68 = createSprite (653,437,100,10);
  wall69 = createSprite (653,437,100,10);
  wall70 = createSprite (653,437,100,10);
  wall71 = createSprite (653,437,100,10)
  wall72 = createSprite (653,437,100,10);
  
  
if (randv==1){
    theif.velocityX = 6 ;
    theif.velocityY = -6 ;
     }
     else if (randv==2){
     theif.velocityX = -4 ;
     theif.velocityY = -5 ;
     }
     else if (randv==3){
     theif.velocityX = 2 ;
     theif.velocityY = 3 ;
     }
}

function draw() {
  background(0,0,0); 

  fill ("white") ;
  text(mouseX+":"+mouseY,mouseX,mouseY) ;

  if(keyDown("UP_ARROW")){
    police.y = police.y-10
  }
  if(keyDown("DOWN_ARROW")){
    police.y = police.y+10
  }
  if(keyDown("LEFT_ARROW")){
    police.x = police.x-10
  }
  if(keyDown("RIGHT_ARROW")){
    police.x = police.x+10
  }

  edges = createEdgeSprites () ; 
  police.collide (edges) ;
  theif.bounceOff(edges) ;

  police.collide (wall1);
  police.collide (wall2);
  police.collide (wall3);
  police.collide (wall4);
  police.collide (wall5);
  police.collide (wall6);
  police.collide (wall7);
  police.collide (wall8);
  police.collide (wall9);
  police.collide (wall10);
  police.collide (wall11);
  police.collide (wall12);
  police.collide (wall13);
  police.collide (wall14);
  police.collide (wall15);
  police.collide (wall16);
  police.collide (wall17);
  police.collide (wall18);
  police.collide (wall19);
  police.collide (wall20);
  police.collide (wall21);
  police.collide (wall22);
  police.collide (wall23);
  police.collide (wall24);
  police.collide (wall25);
  police.collide (wall26);
  police.collide (wall27);
  police.collide (wall28);
  police.collide (wall29);
  police.collide (wall30);
  police.collide (wall31);
  police.collide (wall32);
  police.collide (wall33);
  police.collide (wall34);
  police.collide (wall35);
  police.collide (wall36);
  police.collide (wall37);
  police.collide (wall38);
  police.collide (wall39);
  police.collide (wall40);
  police.collide (wall41);
  police.collide (wall42);
  police.collide (wall43);
  police.collide (wall44);
  police.collide (wall45);
  police.collide (wall46);
  police.collide (wall47);
  police.collide (wall48);
  police.collide (wall49);
  police.collide (wall50);
  police.collide (wall51);
  police.collide (wall52);
  police.collide (wall53);
  police.collide (wall54);
  police.collide (wall55);

  police.collide (wall56);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);
  police.collide (wall44);

  police.collide (wall45);
  police.collide (wall46);
  police.collide (wall47);
  police.collide (wall48);
  police.collide (wall49);
  police.collide (wall50);
  police.collide (wall51);
  police.collide (wall52);
  police.collide (wall53);
  police.collide (wall54);
  police.collide (wall55);
  police.collide (wall56);
  police.collide (wall57);
  police.collide (wall58);
  police.collide (wall59);
  police.collide (wall60);
  police.collide (wall61);
  police.collide (wall62);
  
  
  
  
  theif.bounceOff (wall1);
  theif.bounceOff (wall2);
  theif.bounceOff (wall3);
  theif.bounceOff (wall4);
  theif.bounceOff (wall5);
  theif.bounceOff (wall6);
  theif.bounceOff (wall7);
  theif.bounceOff (wall8);
  theif.bounceOff (wall9);
  theif.bounceOff (wall10);
  theif.bounceOff (wall11);
  theif.bounceOff (wall12);
  theif.bounceOff (wall13);
  theif.bounceOff (wall14);
  theif.bounceOff (wall15);
  theif.bounceOff (wall16);
  theif.bounceOff (wall17);
  theif.bounceOff (wall18);
  theif.bounceOff (wall19);
  theif.bounceOff (wall20);
  theif.bounceOff (wall21);
  theif.bounceOff (wall22);
  theif.bounceOff (wall23);
  theif.bounceOff (wall24);
  theif.bounceOff (wall25);
  theif.bounceOff (wall26);
  theif.bounceOff (wall27);
  theif.bounceOff (wall28);
  theif.bounceOff (wall29);
  theif.bounceOff (wall30);
  theif.bounceOff (wall31);
  theif.bounceOff (wall32);
  theif.bounceOff (wall33);
  theif.bounceOff (wall34);
  theif.bounceOff (wall35);
  theif.bounceOff (wall36); 
  theif.bounceOff (wall37);
  theif.bounceOff (wall38);
  theif.bounceOff(wall39);
  theif.bounceOff(wall40);
  theif.bounceOff(wall41);
  theif.bounceOff(wall42);
  theif.bounceOff(wall43);
  theif.bounceOff(wall44);
  theif.bounceOff
  theif.bounceOff
  theif.bounceOff
  theif.bounceOff
  theif.bounceOff
  theif.bounceOff
  theif.bounceOff
  theif.bounceOff
  theif.bounceOff
  theif.bounceOff
  theif.bounceOff
  theif.bounceOff



drawSprites () ;

}

