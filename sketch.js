var gameState;
var button;
var Arrow, a1, a2;

function setup(){
    createCanvas(1350,650);
    gameState = 0;
    button = createSprite(675,325,200,200);
    button.rotation=45;
    button.visible=false;

    le=createSprite(0,325,10,650);
    re=createSprite(1350,325,10,650);
    te=createSprite(675,0,1350,10);
    de=createSprite(675,650,1350,10);

    
}

function draw(){
    background(0,0,0);
    drawSprites();
    //creatEdgeSprites();

if(gameState === 0){  
    fill(255,0,0);
    stroke(100,0,0)
    strokeWeight(30);
    ellipse(675,325,200,200);
    textSize(20);
    noStroke();
    fill("white");
    text("Press ENTER",615,332);
}
if(keyDown(ENTER)){
    gameState = 1;
}
if(gameState===1){
    words();
    b1=createSprite(20,20,40,40);
        b1.velocityX=20;
        b1.velocityY=20;
        b1.shapeColor="red";
    b2=createSprite(1330,20,40,40);
        b2.velocityX=-20;
        b2.velocityY=20;
        b2.shapeColor="green";
    b3=createSprite(20,630,40,40);
        b3.velocityX=20;
        b3.velocityY=-20;
        b3.shapeColor="blue";
    b4=createSprite(1330,630,40,40);
        b4.velocityX=-20;
        b4.velocityY=-20;
        b4.shapeColor="yellow";

    b1=createSprite(100,20,40,40);
        b1.velocityX=20;
        b1.velocityY=20;
        b1.shapeColor="red";
    b2=createSprite(1250,20,40,40);
        b2.velocityX=-20;
        b2.velocityY=20;
        b2.shapeColor="green";
    b3=createSprite(100,630,40,40);
        b3.velocityX=20;
        b3.velocityY=-20;
        b3.shapeColor="blue";
    b4=createSprite(1250,630,40,40);
        b4.velocityX=-20;
        b4.velocityY=-20;
        b4.shapeColor="yellow";

    b1=createSprite(180,20,40,40);
        b1.velocityX=20;
        b1.velocityY=20;
        b1.shapeColor="red";
    b2=createSprite(1170,20,40,40);
        b2.velocityX=-20;
        b2.velocityY=20;
        b2.shapeColor="green";
    b3=createSprite(180,630,40,40);
        b3.velocityX=20;
        b3.velocityY=-20;
        b3.shapeColor="blue";
    b4=createSprite(1170,630,40,40);
        b4.velocityX=-20;
        b4.velocityY=-20;
        b4.shapeColor="yellow";

    b1=createSprite(260,20,40,40);
        b1.velocityX=20;
        b1.velocityY=20;
        b1.shapeColor="red";
    b2=createSprite(1090,20,40,40);
        b2.velocityX=-20;
        b2.velocityY=20;
        b2.shapeColor="green";
    b3=createSprite(260,630,40,40);
        b3.velocityX=20;
        b3.velocityY=-20;
        b3.shapeColor="blue";
    b4=createSprite(1090,630,40,40);
        b4.velocityX=-20;
        b4.velocityY=-20;
        b4.shapeColor="yellow";

    b1=createSprite(340,20,40,40);
        b1.velocityX=20;
        b1.velocityY=20;
        b1.shapeColor="red";
    b2=createSprite(1010,20,40,40);
        b2.velocityX=-20;
        b2.velocityY=20;
        b2.shapeColor="green";
    b3=createSprite(340,630,40,40);
        b3.velocityX=20;
        b3.velocityY=-20;
        b3.shapeColor="blue";
    b4=createSprite(1010,630,40,40);
        b4.velocityX=-20;
        b4.velocityY=-20;
        b4.shapeColor="yellow";
}
}

function words(){
    fill(255,255,255)
    textFont("Arial");
    textSize(130);
    stroke("black");
    strokeWeight(10);
    text("HAPPY BIRTHDAY",100,375);
}