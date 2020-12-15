var man, manImg;

function preload(){
    manImg= loadAnimation('images/Walking Frame/walking_1.png');
    //, 'images/walking_2.png', 'images/walking_3.png', 'images/walking_4.png','images/walking_5.png','images/walking_6.png','images/walking_7.png','images/walking_8.png');
}

function setup(){
    createCanvas(400,400);
   man= createSprite(20, 300, 10,10)
    man.addAnimation('manAnimation', manImg);
}

function draw(){
    drawSprites();
}   

