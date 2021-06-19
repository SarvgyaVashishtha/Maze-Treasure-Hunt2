var player1 , player2 , player1_image , player2_image;
let laser, laser2, treasure , spike_ball ,treasure_image , spike_ball_image;
let laser_image , laser2_image;
var wall1 , wall1a , wall1b , wall1c , wall1d , wall1e , wall1f , wall1g , wall1h , wall1i , wall1j , wall1k , wall1l , wall1m , wall1n , wall1o ;
var wall2 , wall2a, wall2b , wall2c , wall2d , wall2e , wall2f , wall2g , wall2h , wall2i ;
var wall3 , wall3a , wall3b , wall3c ;
var wall4 , wall4a , wall4b , wall4c , wall4d , wall4e , wall4f ;
var spike_ball2 , spike_ball3 , spike_ball4;
var gameState="wait";

var gameover,gameover_image;

var wall5 , wall6 , wall7 , wall8;

var wall9;

var battery1,one_down,two_down,three_down,over,full_image,one_down_image,two_down_image,three_down_image,over_image;

var battery2;

let database , position1, position2;

var battery1life = 4;
var battery2life = 4;

var reset,reset_image;

function preload(){
sprite = new Sprite();

}

function setup(){

database =firebase.database();
createCanvas(windowWidth,windowHeight);

var player1position =database.ref('player1/position1');
player1position.on("value", readposition1, showerror);

var player2position =database.ref('player2/position2');
player2position.on("value", readposition2, showerror);

setup = new Setup();
obsvelocity();

}


function draw(){
background("yellow");
if(gameState==="wait"){
   fill("blue");
  
  textSize(30);
  text("Maze Treasure Hunt ",500, 50);
 
  fill("red");
  textSize(20);
  
  text("1) Reach the Treasure to win the game.",50,150);
  text("2) Avoid obstacles, you have 4 chance.",50,200);
  text("3) Press Arrow keys to control player1, WASD for player 2.",50,250);
  text("4) There are two players. Chose Yours." ,50,300);
  text("5) Press Enter Key To start..." ,50,350);
  spriteinVisibility();

  if(keyDown("enter")){
      gameState="play";
    }
}

if(gameState==="play"){

   if(mousePressedOver(reset)){
      resetposition1();
      resetposition2();
   }

   spriteVisibility();
 
// Adding images to battery

if(battery1life === 4){
   battery1.addImage(full_image);
}

if(battery1life === 3){
   battery1.addImage(one_down_image);
}

if(battery1life === 2){
   battery1.addImage(two_down_image);
}

if(battery1life === 1){
   battery1.addImage(three_down_image);
}

if(battery1life === 0){
   battery1.addImage(over_image);
}

if(battery2life === 4){
   battery2.addImage(full_image);
}

if(battery2life === 3){
   battery2.addImage(one_down_image);
}

if(battery2life === 2){
   battery2.addImage(two_down_image);
}

if(battery2life === 1){
   battery2.addImage(three_down_image);
}

if(battery2life === 0){
   battery2.addImage(over_image);
}

//giving  function for that , if we press some arrow keys then Player 1 should move and if we press W A S D Player2 should move.


if(keyDown(LEFT_ARROW)){
   writeposition1(-5,0);
}
    
if(keyDown(RIGHT_ARROW)){
   writeposition1(5,0);
}
    
if(keyDown(DOWN_ARROW)){
   writeposition1(0,5);
}
    
if(keyDown(UP_ARROW)){
   writeposition1(0,-5);
}
    
if(keyDown("w")){
   writeposition2(0,-5);
}
    
if(keyDown("a")){
   writeposition2(-5,0);
}
    
if(keyDown("s")){
   writeposition2(0,5);
}
    
if(keyDown("d")){
   writeposition2(5,0);
}

//Giving fumction fot that , if Player1 or Player2 touches a obstecle then their 1 life should be deducted respectively.

if(player1.isTouching(spike_ball)||player1.isTouching(spike_ball2)||player1.isTouching(spike_ball3)||
player1.isTouching(spike_ball4)||player1.isTouching(laser)||player1.isTouching(laser2)){
   resetposition1();
   battery1life = battery1life-1;
}

if(player2.isTouching(spike_ball)||player2.isTouching(spike_ball2)||player2.isTouching(spike_ball3)||
player2.isTouching(spike_ball4)||player2.isTouching(laser)||player2.isTouching(laser2)){
   resetposition2();
   battery2life = battery2life-1;
}

if(battery1life === 0){
   gameover = createSprite(650,300,10,10)
   gameover.addImage(gameover_image);
   gameover.scale = 2;

treasure.visible = false;

player1.visible = false;
player2.visible = false;

wall1.visible = false;
wall1a.visible = false;
wall1b.visible = false;
wall1c.visible = false;
wall1d.visible = false;
wall1e.visible = false;
wall1f.visible = false;
wall1g.visible = false;
wall1h.visible = false;
wall1i.visible = false;
wall1j.visible = false;
wall1k.visible = false;
wall1l.visible = false;
wall1m.visible = false;
wall1n.visible = false;
wall1o.visible = false;

wall2.visible = false;
wall2a.visible = false;
wall2b.visible = false;
wall2c.visible = false;
wall2d.visible = false;
wall2e.visible = false;
wall2f.visible = false;
wall2g.visible = false;
wall2h.visible = false;
wall2i.visible = false;

wall3.visible = false;
wall3a.visible = false;
wall3b.visible = false;
wall3c.visible = false;

wall4.visible = false;
wall4a.visible = false;
wall4b.visible = false;
wall4c.visible = false;
wall4d.visible = false;
wall4e.visible = false;
wall4f.visible = false;
  
spike_ball.visible = false;
spike_ball2.visible = false;
spike_ball3.visible = false;
spike_ball4.visible = false;

laser.visible = false;
laser2.visible = false;

}

if(battery2life === 0){
   gameover = createSprite(650,300,10,10)
   gameover.addImage(gameover_image);
   gameover.scale = 2;

treasure.visible = false;

player1.visible = false;
player2.visible = false;

wall1.visible = false;
wall1a.visible = false;
wall1b.visible = false;
wall1c.visible = false;
wall1d.visible = false;
wall1e.visible = false;
wall1f.visible = false;
wall1g.visible = false;
wall1h.visible = false;
wall1i.visible = false;
wall1j.visible = false;
wall1k.visible = false;
wall1l.visible = false;
wall1m.visible = false;
wall1n.visible = false;
wall1o.visible = false;

wall2.visible = false;
wall2a.visible = false;
wall2b.visible = false;
wall2c.visible = false;
wall2d.visible = false;
wall2e.visible = false;
wall2f.visible = false;
wall2g.visible = false;
wall2h.visible = false;
wall2i.visible = false;

wall3.visible = false;
wall3a.visible = false;
wall3b.visible = false;
wall3c.visible = false;

wall4.visible = false;
wall4a.visible = false;
wall4b.visible = false;
wall4c.visible = false;
wall4d.visible = false;
wall4e.visible = false;
wall4f.visible = false;
  
spike_ball.visible = false;
spike_ball2.visible = false;
spike_ball3.visible = false;
spike_ball4.visible = false;

laser.visible = false;
laser2.visible = false;

}

if(player1.isTouching(treasure)){
player2.visible = false;
treasure.visible = false;
battery2.visible = false;

textSize(40);
fill("purple");

text("✌ PLAYER-1 WINS!!! ✌",400,180);
wall9 = createSprite(1155,323,40,5);
wall9.visible = false;
player1.bounceOff(wall9);

wall1.visible = false;
wall1a.visible = false;
wall1b.visible = false;
wall1c.visible = false;
wall1d.visible = false;
wall1e.visible = false;
wall1f.visible = false;
wall1g.visible = false;
wall1h.visible = false;
wall1i.visible = false;
wall1j.visible = false;
wall1k.visible = false;
wall1l.visible = false;
wall1m.visible = false;
wall1n.visible = false;
wall1o.visible = false;

wall2.visible = false;
wall2a.visible = false;
wall2b.visible = false;
wall2c.visible = false;
wall2d.visible = false;
wall2e.visible = false;
wall2f.visible = false;
wall2g.visible = false;
wall2h.visible = false;
wall2i.visible = false;

wall3.visible = false;
wall3a.visible = false;
wall3b.visible = false;
wall3c.visible = false;

wall4.visible = false;
wall4a.visible = false;
wall4b.visible = false;
wall4c.visible = false;
wall4d.visible = false;
wall4e.visible = false;
wall4f.visible = false;
                                      
spike_ball.visible = false;
spike_ball2.visible = false;
spike_ball3.visible = false;
spike_ball4.visible = false;

laser.visible = false;
laser2.visible = false;
}     
                                 
if(player2.isTouching(treasure)){
player1.visible = false;
treasure.visible = false;

textSize(40);
fill("green");

text("✌ PLAYER-2 WINS!!! ✌",400,180);
wall9 = createSprite(1155,323,40,5);
wall9.visible = false;
battery1.visible = false;

player2.bounceOff(wall9);

wall1.visible = false;
wall1a.visible = false;
wall1b.visible = false;
wall1c.visible = false;
wall1d.visible = false;
wall1e.visible = false;
wall1f.visible = false;
wall1g.visible = false;
wall1h.visible = false;
wall1i.visible = false;
wall1j.visible = false;
wall1k.visible = false;
wall1l.visible = false;
wall1m.visible = false;
wall1n.visible = false;
wall1o.visible = false;

wall2.visible = false;
wall2a.visible = false;
wall2b.visible = false;
wall2c.visible = false;
wall2d.visible = false;
wall2e.visible = false;
wall2f.visible = false;
wall2g.visible = false;
wall2h.visible = false;
wall2i.visible = false;

wall3.visible = false;
wall3a.visible = false;
wall3b.visible = false;
wall3c.visible = false;

wall4.visible = false;
wall4a.visible = false;
wall4b.visible = false;
wall4c.visible = false;
wall4d.visible = false;
wall4e.visible = false;
wall4f.visible = false;
                                      
spike_ball.visible = false;
spike_ball2.visible = false;
spike_ball3.visible = false;
spike_ball4.visible = false;

laser.visible = false;
laser2.visible = false;                                   
}                                    
}
spike_ball.bounceOff(wall4);
spike_ball.bounceOff(wall4b);
spike_ball2.bounceOff(wall2i);
spike_ball2.bounceOff(wall2);
spike_ball3.bounceOff(wall4);
spike_ball3.bounceOff(wall4c);
spike_ball4.bounceOff(wall4);
spike_ball4.bounceOff(wall4c);

laser.bounceOff(wall4);
laser.bounceOff(wall2h);
laser2.bounceOff(wall4);
laser2.bounceOff(wall2h);

player1.bounceOff(wall1);
player1.bounceOff(wall1a);
player1.bounceOff(wall1b);
player1.bounceOff(wall1c);
player1.bounceOff(wall1d);
player1.bounceOff(wall1e);
player1.bounceOff(wall1f);
player1.bounceOff(wall1g);
player1.bounceOff(wall1h);
player1.bounceOff(wall1i);
player1.bounceOff(wall1j);
player1.bounceOff(wall1k);
player1.bounceOff(wall1l);
player1.bounceOff(wall1m);
player1.bounceOff(wall1n);
player1.bounceOff(wall1o);

player1.bounceOff(wall2);
player1.bounceOff(wall2a);
player1.bounceOff(wall2b);
player1.bounceOff(wall2c);
player1.bounceOff(wall2d);
player1.bounceOff(wall2e);
player1.bounceOff(wall2f);
player1.bounceOff(wall2g);
player1.bounceOff(wall2h);
player1.bounceOff(wall2i);

player1.bounceOff(wall3);
player1.bounceOff(wall3a);
player1.bounceOff(wall3b);
player1.bounceOff(wall3c);

player1.bounceOff(wall4);
player1.bounceOff(wall4a);
player1.bounceOff(wall4b);
player1.bounceOff(wall4c);
player1.bounceOff(wall4d);
player1.bounceOff(wall4e);
player1.bounceOff(wall4f);

player1.bounceOff(wall5);
player1.bounceOff(wall6);
player1.bounceOff(wall7);
player1.bounceOff(wall8);  

player2.bounceOff(wall1);
player2.bounceOff(wall1a);
player2.bounceOff(wall1b);
player2.bounceOff(wall1c);
player2.bounceOff(wall1d);
player2.bounceOff(wall1e);
player2.bounceOff(wall1f);
player2.bounceOff(wall1g);
player2.bounceOff(wall1h);
player2.bounceOff(wall1i);
player2.bounceOff(wall1j);
player2.bounceOff(wall1k);
player2.bounceOff(wall1l);
player2.bounceOff(wall1m);
player2.bounceOff(wall1n);
player2.bounceOff(wall1o);

player2.bounceOff(wall2);
player2.bounceOff(wall2a);
player2.bounceOff(wall2b);
player2.bounceOff(wall2c);
player2.bounceOff(wall2d);
player2.bounceOff(wall2e);
player2.bounceOff(wall2f);
player2.bounceOff(wall2g);
player2.bounceOff(wall2h);
player2.bounceOff(wall2i);

player2.bounceOff(wall3);
player2.bounceOff(wall3a);
player2.bounceOff(wall3b);
player2.bounceOff(wall3c);

player2.bounceOff(wall4);
player2.bounceOff(wall4a);
player2.bounceOff(wall4b);
player2.bounceOff(wall4c);
player2.bounceOff(wall4d);
player2.bounceOff(wall4e);
player2.bounceOff(wall4f);

player2.bounceOff(wall5);
player2.bounceOff(wall6);
player2.bounceOff(wall7);
player2.bounceOff(wall8);

drawSprites();

}

function spriteinVisibility(){
   
reset.visible = false;   
player1.visible = false;
treasure.visible = false;
player2.visible = false;
battery1.visible = false;
battery2.visible = false;

   wall1.visible = false;
   wall1a.visible = false;
   wall1b.visible = false;
   wall1c.visible = false;
   wall1d.visible = false;
   wall1e.visible = false;
   wall1f.visible = false;
   wall1g.visible = false;
   wall1h.visible = false;
   wall1i.visible = false;
   wall1j.visible = false;
   wall1k.visible = false;
   wall1l.visible = false;
   wall1m.visible = false;
   wall1n.visible = false;
   wall1o.visible = false;
   
   wall2.visible = false;
   wall2a.visible = false;
   wall2b.visible = false;
   wall2c.visible = false;
   wall2d.visible = false;
   wall2e.visible = false;
   wall2f.visible = false;
   wall2g.visible = false;
   wall2h.visible = false;
   wall2i.visible = false;
   
   wall3.visible = false;
   wall3a.visible = false;
   wall3b.visible = false;
   wall3c.visible = false;
   
   wall4.visible = false;
   wall4a.visible = false;
   wall4b.visible = false;
   wall4c.visible = false;
   wall4d.visible = false;
   wall4e.visible = false;
   wall4f.visible = false;
                                         
   spike_ball.visible = false;
   spike_ball2.visible = false;
   spike_ball3.visible = false;
   spike_ball4.visible = false;
   
   laser.visible = false;
   laser2.visible = false; 
}  

function spriteVisibility(){
   
   reset.visible = true;
   player1.visible = true;
   treasure.visible = true;
   player2.visible = true
   battery1.visible = true;
   battery2.visible = true;
   
      wall1.visible = true;
      wall1a.visible = true;
      wall1b.visible = true;
      wall1c.visible = true;
      wall1d.visible = true;
      wall1e.visible = true;
      wall1f.visible = true;
      wall1g.visible = true;
      wall1h.visible = true;
      wall1i.visible = true;
      wall1j.visible = true;
      wall1k.visible = true;
      wall1l.visible = true;
      wall1m.visible = true;
      wall1n.visible = true;
      wall1o.visible = true;
      
      wall2.visible = true;
      wall2a.visible = true;
      wall2b.visible = true;
      wall2c.visible = true;
      wall2d.visible = true;
      wall2e.visible = true;
      wall2f.visible = true;
      wall2g.visible = true
      wall2h.visible = true;
      wall2i.visible = true;
      
      wall3.visible = true;
      wall3a.visible = true;
      wall3b.visible = true;
      wall3c.visible = true;
      
      wall4.visible = true;
      wall4a.visible = true;
      wall4b.visible = true;
      wall4c.visible = true;
      wall4d.visible = true;
      wall4e.visible = true;
      wall4f.visible = true;
                                            
      spike_ball.visible = true;
      spike_ball2.visible = true;
      spike_ball3.visible = true;
      spike_ball4.visible = true;
      
      laser.visible = true;
      laser2.visible = true; 
   }
function readposition1(data){
   position1 =data.val();
   player1.x =position1.x;
   player1.y =position1.y;
}
function writeposition1(x,y){
   database.ref('player1/position1').set({
       'x': position1.x+x,
       'y': position1.y+y
   })
}
function showerror(){
  console.log ("Unable to connect to server of database");
}

function readposition2(data){
   position2 =data.val();
   player2.x =position2.x;
   player2.y =position2.y;
}
function writeposition2(x,y){
   database.ref('player2/position2').set({
       'x': position2.x+x,
       'y': position2.y+y
   })
}

function resetposition1(){
   database.ref('player1/position1').set({
      'x': 25,
      'y': 25
  })
}
function resetposition2(){
   database.ref('player2/position2').set({
      'x': 25,
      'y': 550
  }) 
}

function obsvelocity(){
   spike_ball.velocityY = 8;
   spike_ball2.velocityY = 5;
   spike_ball3.velocityY = -7;
   spike_ball4.velocityY = 7;
   laser.velocityY = 8;
   laser2.velocityY = -8;
}