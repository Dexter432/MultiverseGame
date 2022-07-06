var jackieSprite,jackieimg,jackiedados;
var jackierunning=[]
var effectsSprite,effectsimg,effectsdados;
var bruceleeSprite,bruceleeimg,bruceleedados;
var aquamanSprite,aquamanimg,aquamandados;
var ghostriderSprite,sghostriderimg,ghostriderdados;
var background2,background2Sprite;

function preload(){
 background2= loadImage("assets/scary-cemetery.jpg")
jackieimg=loadImage("assets/sprites-sheets/jackie_chan-Run.png")
jackiedados=loadJSON("assets/sprites-sheets/jackie_chan-Run.json")
//jackieimg=loadImage("assets/sprites-sheets/jackie_chan-Runback.png")
/*
jackiedados=loadJSON("assets/sprites-sheets/jackie_chan-Runback.json")
jackieimg=loadImage("assets/sprites-sheets/jackie_chan-punchesandflip.png")
jackiedados=loadJSON("assets/sprites-sheets/jackie_chan-punchesandflip.json")
jackieimg=loadImage("assets/sprites-sheets/jackie_chan-kicking.png")
jackiedados=loadJSON("assets/sprites-sheets/jackie_chan-kicking.json")
jackieimg=loadImage("assets/sprites-sheets/jackie_chan-strengh.png")
jackiedados=loadJSON("assets/sprites-sheets/jackie_chan-strengh.json")
jackieimg=loadImage("assets/sprites-sheets/jackie_chan-faill.png")
jackiedados=loadJSON("assets/sprites-sheets/jackie_chan-faill.json")
jackieimg=loadImage("assets/sprites-shetts/jackie_chan-faill.png")
jackiedados=loadJSON("assets/sprites-sheets/jackie_chan-faill.json") 
bruceleeimg=loadImage("assets/sprites-shetts/bruce_lee-ready.png")  
bruceleedados=loadJSON("assets/sprites-shetts/bruce_lee-ready.json")  
bruceleeimg=loadImage("assets/sprites-shetts/bruce_lee-punches.png")  
bruceleedados=loadJSON("assets/sprites-shetts/bruce_lee-punches.json")  
bruceleeimg=loadImage("assets/sprites-shetts/bruce_lee-kicking.png")  
bruceleedados=loadJSON("assets/sprites-shetts/bruce_lee-kicking.json")  
bruceleeimg=loadImage("assets/sprites-sheets/bruce_lee-jumpkick.png")
bruceleedados=loadJSON("assets/sprites-sheets/bruce_lee-jumpkick.json")
bruceleeimg=loadImage("assets/sprites-sheets/bruce_lee-tenique.png")
bruceleedados=loadJSON("assets/sprites-sheets/bruce_lee-tenique.json") 
bruceleeimg=loadImage("assets/sprites-sheets/bruce_lee-nunchaku.png")
bruceleedados=loadJSON("assets/sprites-sheets/bruce_lee-nunchaku.json")











//sprites effeitos
effectsimg=loadImage("assets/sprites-sheets/jackie_chan-effects.png")
effectsdados=loadJSON("assets/sprites-sheets/jackie_chan-effects.json")
effectsimg=loadImage("assets/sprites-sheets/jackie_chan-special-effects.png")
effectsdados=loadJSON("assets/sprites-sheets/jackie_chan-special-effects.json")
effectsimg=loadImage("assets/sprites-sheets/jackie_chan-fight-effects.png")
effectsdados=loadJSON("assets/sprites-sheets/jackie_chan-fight-effects.json")
*/
}


function setup() {

  
  createCanvas(windowWidth,windowHeight);
  
  
  

//criando o sprite do jogador
jackieSprite = createSprite(displayWidth-1150, displayHeight-300, 50, 50);


var jackierunningFrames = jackiedados.frames;
 for (var i = 0; i < jackierunningFrames.length; i++) {
   var pos = jackierunningFrames[i].position;
    var img = jackieimg.get(pos.x, pos.y, pos.w, pos.h);
    jackierunning.push(img);
   }





// player.scale = 0.3



  // player.debug = true
  // player.setCollider("rectangle",0,0,300,300)
 

}

function draw() {
  background(background2); 
  
  for (var i = 0; i < jackierunning.length; i++) { 
    Matter.Body.setVelocity(jackierunning[i].body, {x: -0.9,y: 0});
    jackieSprite.addImage("jackierun",jackieimg)  
    }
    



  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(keyDown("UP_ARROW")||touches.length>0){
  jackieSprite.y = jackieSprite.y-30
}
//if(keyDown("DOWN_ARROW")||touches.length>0){
 //player.y = player.y+30
//}




drawSprites();

}
