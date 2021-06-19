class Setup{
    constructor(){
        //creating the main two players.
player1 = createSprite(windowWidth/8-140,windowHeight/8-50,20,20);
player1.addAnimation("walking",player1_image);
player1.scale = 0.055;

player2 = createSprite(windowWidth/8-140,windowHeight-20,20,20);
player2.addAnimation("running",player2_image);
player2.scale = 0.07;

//Creating non playing characters.

treasure = createSprite(1155,285,20,20);
treasure.addImage(treasure_image);
treasure.scale = 0.09;

spike_ball = createSprite(845,335,20,20);
spike_ball.addImage(spike_ball_image);
spike_ball.scale = 0.14;
//spike_ball.velocityY = 8;

spike_ball2 = createSprite(595,35,20,20);
spike_ball2.addImage(spike_ball_image);
spike_ball2.scale = 0.14;
//spike_ball2.velocityY = 5;

spike_ball3 = createSprite(950,535,20,20);
spike_ball3.addImage(spike_ball_image);
spike_ball3.scale = 0.14;
//spike_ball3.velocityY = -7;

spike_ball4 = createSprite(1050,385,20,20);
spike_ball4.addImage(spike_ball_image);
spike_ball4.scale = 0.14;
//spike_ball4.velocityY = 7;

laser = createSprite(610,400,10,10);
laser.addImage(laser_image)
laser.scale = 0.35
//laser.velocityY = 8;

laser2 = createSprite(730,402,10,10);
laser2.addImage(laser2_image)
laser2.scale = 0.35
//laser2.velocity=-8;

battery1 = createSprite(1215,40,10,10)
battery1.addImage(full_image);

battery2 = createSprite(1215,527,10,10)
battery2.addImage(full_image);

//Creating walls.

 wall1 = createSprite(80,285,10,460);
 wall1.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1a = createSprite(570,105,10,100);
 wall1a.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1b = createSprite(620,105,10,100);
 wall1b.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1c = createSprite(520,255,10,300);
 wall1c.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1d = createSprite(820,385,10,260);
 wall1d.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1e = createSprite(470,205,10,100);
 wall1e.shapeColor = rgb(random(0,255),random(0,255),random(0,255));  

 wall1f = createSprite(420,255,10,200);
 wall1f.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1g = createSprite(420,480,10,150);
 wall1g.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1h = createSprite(470,430,10,250);
 wall1h.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1i = createSprite(570,230,10,60);
 wall1i.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
 
 wall1j = createSprite(370,315,10,200);
 wall1j.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1k = createSprite(320,255,10,200);
 wall1k.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1l = createSprite(270,315,10,200);
 wall1l.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1m = createSprite(220,255,10,200);
 wall1m.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1n = createSprite(170,315,10,200);
 wall1n.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall1o = createSprite(120,255,10,200);
 wall1o.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall2 = createSprite(625,10,1100,10);
 wall2.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall2a = createSprite(325,60,480,10);
 wall2a.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall2b = createSprite(880,60,510,10);
 wall2b.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall2c = createSprite(880,105,510,10);
 wall2c.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall2d = createSprite(870,150,420,10);
 wall2d.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall2e = createSprite(870,205,510,10);
 wall2e.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall2f = createSprite(325,110,400,10);
 wall2f.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall2g = createSprite(275,155,400,10);
 wall2g.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall2h = createSprite(670,260,300,10);
 wall2h.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall2i = createSprite(595,160,60,10);
 wall2i.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall3 = createSprite(1180,284,10,558);
 wall3.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall3a = createSprite(1130,160,10,100);
 wall3a.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall3b = createSprite(1130,380,10,250);
 wall3b.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall3c = createSprite(1080,480,10,150);
 wall3c.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall4 = createSprite(625,558,1100,10);  
 wall4.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall4a = createSprite(1025,260,300,10);
 wall4a.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall4b = createSprite(955,310,260,10); 
 wall4b.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall4c = createSprite(1000,360,260,10);
 wall4c.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall4d = createSprite(230,510,300,10);
 wall4d.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

 wall4e = createSprite(270,460,300,10);
 wall4e.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
 
 wall4f = createSprite(225,410,295,10);
 wall4f.shapeColor = rgb(random(0,255),random(0,255),random(0,255));

wall5 = createSprite(0,0,5,windowHeight*2);
wall5.visible = false;

wall6 = createSprite(600,0,1300,5);
wall6.visible = false;

wall7 = createSprite(1240,0,5,1150);
wall7.visible = false;

wall8 = createSprite(630,565,1300,5);
wall8.visible = false;

reset = createSprite(36,300,50,50);
reset.addImage(reset_image);
reset.scale = 0.3;

    }
}