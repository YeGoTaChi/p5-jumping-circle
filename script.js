let w = 400;
let h = 400;
let x = 200;
let g = 9.81;
let time = 0;
let ch = 200;
let r = 25;
let animationstill = false;
let i = 0;

function setup() {
  createCanvas(w, h);
  frameRate(60);
}

function draw() {
  // Handling the Jump
  if(((keyIsDown(32)) && (ch >= h - r - 1)) || animationstill){
      animationstill = true;
      i+=3;
      ch -= g * (deltaTime/1000) * 55;
      if(i>=20){
        
        i=0;
        animationstill = false;
      }
      
  }else 
  {
    // GRAVITY BOI
    ch += g * (deltaTime/1000) * 20;
  }
  
  // Movement
  if (keyIsDown(LEFT_ARROW)){
    x-=3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    x+=3;
  }

  // Constains / Boundery Handling
  ch = constrain(ch, r, h-r);
  x = constrain(x, r, w-r);
  
  background(215);
  noStroke();
  fill('#fb743e');
  circle(x,ch,2*r);


}