var Cat,CAT,Garden,Mouse;
function preload() {
    //load the images here
    Cat1=loadImage("images/cat1.png");
    Cat2=loadImage("images/cat2.png");

    Garden=loadImage("images/garden.png");
    
    Mouse1=loadImage("images/mouse1.png");
    Mouse2=loadImage("images/mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    garden = createSprite(500,400);
    garden.addImage(Garden);

    CAT = createSprite(800,650,10,50);
    CAT.addImage(Cat1);
    CAT.scale=0.2;

    Mouse = createSprite(200,650,10,50);
    Mouse.addImage(Mouse1);
    Mouse.scale=0.2;

}

function draw() {

    background(255);
    
    //Write condition here to evalute if tom and jerry collide
     if(CAT.x-Mouse.x<(CAT.width-Mouse.width)/2){
         CAT.addAnimation("GG",Cat2);
         CAT.changeAnimation("GG");
     }
    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      Mouse.addAnimation("PUBG",Mouse2);
      Mouse.changeAnimation("PUBG");
      Mouse.framDelay=25;
  }

  if(keyCode === LEFT_ARROW){
    Mouse.addAnimation("PUBG",Mouse2);
    Mouse.changeAnimation("PUBG");
    Mouse.framDelay=25;
}
}
