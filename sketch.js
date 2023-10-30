//Failure to Load: Fly Higher, Love Rain, Hey Gorgeous, Chicks, WhatLiftsYou, Seen Rain, Mirror Mirror, Bountiful Bloom

//p5.scenemanager variable
let mgr;

//Fly Higher variables
let FlyHigher_base;
let FlyHigher_wings1
let FlyHigher_wings2;
let FlyHigher_sil = [];
let FlyHigher_shadows = [];

//Love Rain variables
let LoveRain_base;
let LoveRain_umbrella1;
let LoveRain_umbrella2;
let LoveRain_grid = [];
let LoveRain_sil = [];
let LoveRain_shadows = [];

//Hey Gorgeous variables
let HeyGorgeous_base;
let HeyGorgeous_bronze;
let HeyGorgeous_pigeons;
let HeyGorgeous_selfie1;
let HeyGorgeous_selfie2;
let HeyGorgeous_sil;

//Chicks variables
let Chicks_base;
let Chicks_mural;
let Chicks_Schweps1;
let Chicks_Schweps2;
let Chicks_lights;
let Chicks_chick;
let Chicks_sil = [];

//WhatLiftsYou variables
let WhatLiftsYou_base;
let WhatLiftsYou_wingsCU;
let WhatLiftsYou_pigeons;
let WhatLiftsYou_line1;
let WhatLiftsYou_line2;
let WhatLiftsYou_wings;
let WhatLiftsYou_text;

//Seen Rain variables
let SeenRain_base;
let SeenRain_alley1;
let SeenRain_alley2;
let SeenRain_Laurel;
let SeenRain_stone;
let SeenRain_shadows = [];
let SeenRain_sign = [];
let SeenRain_sky = [];

//Mirror Mirror variable
let MirrorMirror_base;
let MirrorMirror_mirror1;
let MirrorMirror_mirror2;
let MirrorMirror_mirror3;
let MirrorMirror_sil = [];
let MirrorMirror_patterns;
let MirrorMirror_EL1;
let MirrorMirror_EL2;

//Bountiful Bloom photos
let BountifulBloom_base;
let BountifulBloom_blender;
let BountifulBloom_Laurels = [];
let BountifulBloom_Laurel;
let BountifulBloom_LaurelLion1;
let BountifulBloom_LaurelLion2;
let BountifulBloom_lion;
let BountifulBloom_lion1;
let BountifulBloom_lion2;
let BountifulBloom_stone;


function preload(){
  //Fly Higher
  FlyHigher_base =loadImage('assets/FlyHigher_base.png');
  FlyHigher_wings1 = loadImage('assets/FlyHigher_wings1.png');
  FlyHigher_wings2 = loadImage('assets/FlyHigher_wings2.png');
  for (let i = 1; i < 5; i++){
    FlyHigher_sil[i] = loadImage('assets/FlyHigher_sil' + i + '.png');
  }

  //Love Rain
  LoveRain_base = loadImage("assets/LoveRain_base.png");
  LoveRain_umbrella1 = loadImage("assets/LoveRain_umbrella1.png");
  LoveRain_umbrella2 = loadImage("assets/LoveRain_umbrella2.png");
  for (let i = 0; i < 9; i++){
    LoveRain_sil[i] = loadImage("assets/LoveRain_sil" + i + ".png");
  }
  for (let j = 0; j < 9; j++){
    LoveRain_grid[j] = loadImage("assets/LoveRain_grid" + j + ".png");
  }

  //Hey Gorgeous
  HeyGorgeous_base = loadImage("assets/HeyGorgeous_base.png");
  HeyGorgeous_bronze = loadImage('assets/HeyGorgeous_bronze.png');
  HeyGorgeous_pigeons = loadImage('assets/HeyGorgeous_pigeons.png');
  HeyGorgeous_selfie1 = loadImage('assets/HeyGorgeous_self1.png');
  HeyGorgeous_selfie2 = loadImage('assets/HeyGorgeous_self2.png');
  HeyGorgeous_sil = loadImage('assets/HeyGorgeous_sil.png');

  //Chicks
  for (let i = 1; i < 6; i++){
    Chicks_sil[i] = loadImage("assets/Chicks_sil" + i + ".png")
  }
  Chicks_base = loadImage("assets/Chicks_mural1.png");
  Chicks_mural = loadImage("assets/Chicks_mural2.png");
  Chicks_Schweps1 = loadImage("assets/Chicks_Schweps1.png");
  Chicks_Schweps2 =loadImage("assets/Chicks_Schweps2.png");
  Chicks_lights = loadImage("assets/Chicks_lights.png");

  //WhatLiftsYou
  WhatLiftsYou_base = loadImage('assets/WhatLiftsYou_base.png');
  WhatLiftsYou_wingsCU = loadImage('assets/WhatLiftsYou_wingCU.png');
  WhatLiftsYou_pigeons = loadImage('assets/WhatLiftsYou_pigeons.png');
  WhatLiftsYou_line1 = loadImage('assets/WhatLiftsYou_line1.png');
  WhatLiftsYou_line2 = loadImage('assets/WhatLiftsYou_line2.png');
  WhatLiftsYou_wings = loadImage('assets/WhatLiftsYou_wings.png');
  WhatLiftsYou_text = loadImage('assets/WhatLiftsYou_text.png');

  //Seen Rain Photos
  SeenRain_base = loadImage('assets/SeenRain_base.png');
  SeenRain_alley1 = loadImage('assets/SeenRain_alley1.png');
  SeenRain_alley2 = loadImage('assets/SeenRain_alley2.png');
  SeenRain_Laurel = loadImage('assets/SeenRain_LaurelSide.png');
  SeenRain_stone = loadImage('assets/SeenRain_stones.png')
  for (let i = 1; i < 3; i++){
    SeenRain_shadows[i] = loadImage("assets/SeenRain_Laurel" + i + ".png");
  }
  for (let j = 1; j < 3; j++){
    SeenRain_sign[j] = loadImage("assets/SeenRain_sign" + j + ".png");
  }
  for (let k = 1; k < 6; k++){
    SeenRain_sky[k] = loadImage("assets/SeenRain_sky" + k + ".png")
  }

  //MirrorMirror photos
  MirrorMirror_base = loadImage('assets/MirrorMirror_base.png');
  MirrorMirror_mirror1 = loadImage('assets/MirrorMirror_mirror1.png');
  MirrorMirror_mirror2 = loadImage('assets/MirrorMirror_mirror2.png');
  MirrorMirror_mirror3 = loadImage('assets/MirrorMirror_mirror3.png');
  MirrorMirror_patterns = loadImage('assets/MirrorMirror_patterns.png');
  MirrorMirror_EL1 = loadImage('assets/MirrorMirror_EL1.png')
  MirrorMirror_EL2 = loadImage('assets/MirrorMirror_EL2.png')
  for (let i = 0; i < 2; i++){
    MirrorMirror_sil[i] = loadImage('assets/MirrorMirror_sil' + i + '.png');
  }

  //BountifulBloom photos
  BountifulBloom_base = loadImage('assets/BountifulBloom_base.png');
  BountifulBloom_blender = loadImage('assets/BountifulBloom_blender.png');
  BountifulBloom_Laurel = loadImage('assets/BountifulBloom_Laurel.png');
  BountifulBloom_LaurelLion1 = loadImage('assets/BountifulBloom_LaurelLion1.png');
  BountifulBloom_LaurelLion2 = loadImage('assets/BountifulBloom_LaurelLion2.png');
  BountifulBloom_lion = loadImage('assets/BountifulBloom_lion.png');
  BountifulBloom_lion1 = loadImage('assets/BountifulBloom_lion1.png');
  BountifulBloom_lion2 = loadImage('assets/BountifulBloom_lion2.png');
  BountifulBloom_stone = loadImage('assets/BountifulBloom_tiles.png');
  for (let i = 0; i < 4; i++){
    BountifulBloom_Laurels[i] = loadImage('assets/BountifulBloom_Laurel' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  mgr = new SceneManager();

  //Preload scenes
  mgr.addScene (FlyHigher);
  mgr.addScene (LoveRain);
  mgr.addScene (HeyGorgeous);
  mgr.addScene (Chicks);
  mgr.addScene (WhatLiftsYou);
  mgr.addScene (SeenRain);
  mgr.addScene (MirrorMirror);
  mgr.addScene (BountifulBloom);
  mgr.showNextScene();
}

function draw() {
  console.log(frameCount);
  mgr.draw();
}

//resets frameCount
function reset(){
  frameCount = 0;
  }

//change between scenes with keyboard
function keyPressed(){
  switch(key)
  {
      case '1':
        reset();
        mgr.showScene(FlyHigher);
        break;
      case '2':
        reset();
        mgr.showScene(LoveRain);
        break;
      case '3':
        reset();
        mgr.showScene(HeyGorgeous);
        break;
      case '4':
        reset();
        mgr.showScene(Chicks);
        break;
      case '5':
        reset();
        mgr.showScene(WhatLiftsYou);
        break;
      case '6':
        reset();
        mgr.showScene(SeenRain);
        break;
      case '7':
        reset();
        mgr.showScene(MirrorMirror);
        break;
      case '8':
        reset();
        mgr.showScene(BountifulBloom);
        break;
  }
}


function mousePressed(){

  let fs = fullscreen();
  fullscreen(!fs);
}

//========Fly Higher======================

function FlyHigher(){
  let alp1 = 0;
  let alp2 = 0;

  // Tiles configuration
  let tiles = [];
  let cols = 20;
  let rows = 20;
  let w, h;

  // Order of tiles
  let board = [];

this.setup = function(){
  createCanvas(FlyHigher_base.width, FlyHigher_base.height);
  background(0);
  frameRate(5);
  rectMode(CENTER);
  // Array of shadows
  for (let k = 1; k < FlyHigher_sil.length; k++){
    let images = new Shadow(random(width*.3), random(5,50), random(360), FlyHigher_sil[k]);
    FlyHigher_shadows.push(images);
  }

  // pixel dimensions of each tiles
  w = width / cols;
  h = height / rows;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      let img = createImage(w, h);
      img.copy(FlyHigher_base, x, y, w, h, 0, 0, w, h);
      let index = i + j * cols;
      board.push(index);
      let tile = new Tile(index, img);
      tiles.push(tile);
      }
    }
  }

  this.draw = function(){
    if (frameCount == 1){
      createCanvas(FlyHigher_base.width, FlyHigher_base.height);
      frameRate(5);
    }

    if (frameCount == 1500){
      reset();
      mgr.showScene(LoveRain);
    }

  //base
  push();
  tint(255, random(70, 100));
  image(FlyHigher_base, 0, 0, width, height);
  pop();

  //wings
  push();
  tint(random(50,255), 100);
  FlyHigher_wings1.filter(GRAY);
  image(FlyHigher_wings1, 0, 0);
  pop()

   
  
  blend(FlyHigher_wings2, 0, 0, FlyHigher_wings2.width, FlyHigher_wings2.height, 0, 0, width, height, DIFFERENCE);

  //feather Shuffle
 push();
 for (let i = 0; i < cols; i++) {
   for (let j = 0; j < rows; j++) {
     let index = int(random(16));
     let x = i * w;
     let y = j * h;
     let tileIndex = board[index];
     if (tileIndex > -1) {
       tint(random(255), alp1);
       let img = tiles
       [tileIndex].img;
       img.filter(INVERT);
       image(img, x, y, w, h);
     }
   }
 }
 pop();

 //shadows
  
for (let j = 0; j < FlyHigher_shadows.length; j++){
    
    
  FlyHigher_shadows[j].edges();
  FlyHigher_shadows[j].move();
  FlyHigher_shadows[j].show();
  
    }

  //sils
  let p = int(random(1,5));
  for (let j = 0; j < 4; j++){
  push();
  tint(0, alp2);
  image(FlyHigher_sil[p], random(100, width*.5), 0)
  pop();
    }
  
  if (frameCount%int(random(20))==0){    
    if (alp1 == 0){
      alp1 = 100;
      alp2 = 90
    } else {
        alp1 = 0;
        alp2 = 0;
      }
    }

  
  }

  class Tile {
    constructor(i, img) {
      this.index = i;
      this.img = img;    
    }
  }

  class Shadow{
    constructor(x, inc, colour, silImg) {
      this.x = x;
      this.inc = inc;
      this.sil = silImg;
      this.colour = colour;
    }
    move(){
      this.x += this.inc;
    }
  
    edges(){
      if (this.x >= (width - this.sil.width) || this.x <= 0 ){
        this.inc *= -1;
      }
    }
    show(){
      tint(this.colour, 100, 100);
      blend(this.sil, 0, 0, this.sil.width, this.sil.height, this.x, 0, this.sil.width, this.sil.height, EXCLUSION);
      if (frameCount%10==0){
        this.colour = random(360);
      }
    }
  }
}

//==========Love Rain===========================

//variables
let inc = 1
let alp1 = 0;
let colour = 180;

// grid configuration
let cols = 3;
let rows = 3;
let w, h;

function LoveRain(){
this.setup = function(){
  createCanvas(LoveRain_base.width, LoveRain_base.height);
  background(0);
  frameRate(6);

  //Array of Shadows
  for (let k = 0; k < LoveRain_sil.length; k++){
    let images = new Shadow(random(width*.6), -50, random(80, 100), random(10,20), random(255), 10, LoveRain_sil[k]);
    LoveRain_shadows.push(images);
  }

  //prep for grid
  w = width / cols;
  h = height / rows;
  }

this.draw = function(){
  if (frameCount == 1){
    createCanvas(LoveRain_base.width, LoveRain_base.height);
    rectMode(CORNER);
    frameRate(6);
  }

  background(colour, 100, 100);

  //base
  push();
  tint(255, random(50,100));
  image(LoveRain_base, 0, 0);
  pop();

  //grid 1
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      let num = int(random(9))
      push();
      //tint(255, random(50));
      image(LoveRain_grid[num], x + random(50), y + random(50));
      pop();
    }
    

  }
  //blends
  blend(LoveRain_umbrella1, 0, 0, LoveRain_umbrella1.width, LoveRain_umbrella1.height, 0, 0, width, height, EXCLUSION);
  blend(LoveRain_umbrella2, 0, 0, LoveRain_umbrella2.width, LoveRain_umbrella2.height, 0, 0, width, height, EXCLUSION);

  //shadows
  for (let j = 0; j < LoveRain_shadows.length; j++){
    LoveRain_shadows[j].edges();
    LoveRain_shadows[j].move();
    LoveRain_shadows[j].show();
  }

  //box
  fill(colour, random(100), random(100), alp1);
  noStroke();
  rect(0, 0, width, height);

   //grid 2
   for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;
      let num = int(random(9))
      push();
      //scale(random(0.5,1));
      tint(colour+180, random(100), random(100), alp1);
      image(LoveRain_grid[num], random(width-LoveRain_grid[num].width), random(height-LoveRain_grid[num].height));
      pop();
    }
  }

  if (frameCount%int(random(5,20))==0){
    if (alp1 == 0){
      alp1 = 100;
    } else {
      alp1 = 0;
    }
  }

  if (frameCount%3==0){
    colour = random(180);
    }
  if (frameCount==1500){
    reset();
    mgr.showScene(HeyGorgeous);
    }
  }

  class Shadow{
    constructor(x, y, xInc, yInc, tint1, inc, silImg){
      this.x = x;
      this.y = y;
      this.xInc = xInc;
      this.yInc = yInc;
      this.inc = inc;
      this.tint = tint1;
      this.sil = silImg;
    }
    edges(){
      if (this.x <= 0 || this.x >= width - this.sil.width){
        this.xInc *= -1;
        // if (this.tint == 255){
        //   this.tint = 0;
        // } else {
        //   this.tint = 255;
        // }
      }
      if (this.y <= 0 || this.y >= height - this.sil.height){
        this.yInc *= -1;
        // if (this.tint == 255){
        //   this.tint = 0;
        // } else {
        //   this.tint = 255;
        // }
      }
  
      if (this.tint <= 0 || this.tint >= 100){
        this.inc *= -1;
      }
    }
    move(){
      // this.x += this.xInc;
      this.y += this.yInc;
      this.tint -= this.inc;
      if (frameCount%int(random(10))==0){
        this.x = random(-200, width*.9);
      }
    }
    show(){
      push();
      tint(255, random(50,100));
      image(this.sil, this.x + random(-20,20), this.y + random(-20,20));
      blend(this.sil, 0, 0, this.sil.width, this.sil.height, this.x, this.y, this.sil.width, this.sil.height, EXCLUSION);
      pop();
      
    }
  }
}

//============Hey Gorgeous================

function HeyGorgeous(){
  //variables
  let alp1 = 0;
  let alp2 = 255;
  let colour = 180;

  this.setup = function(){
    createCanvas(HeyGorgeous_bronze.width, HeyGorgeous_bronze.height);
    background(0);
    frameRate(8);
  }

  this.draw = function(){
    background(0);
    if (frameCount == 1){
      rectMode(CORNER);
      createCanvas(HeyGorgeous_bronze.width, HeyGorgeous_bronze.height);
      frameRate(8);
      
    } 

    //bronze
    push();
    tint(255, random(70, 100));
    image(HeyGorgeous_bronze, 0, 0, width, height);
    pop();

    //pigeons
    blend(HeyGorgeous_pigeons, 0, 0, HeyGorgeous_pigeons.width, HeyGorgeous_pigeons.height, 0, 0, width, height, DIFFERENCE);

    //selfie 1
    push();
    HeyGorgeous_selfie1.filter(GRAY);
    tint(255, random(50));
    image(HeyGorgeous_selfie1, random(50), 0, width, height);

    blend(HeyGorgeous_selfie1, 0, 0, HeyGorgeous_selfie1.width, HeyGorgeous_selfie1.height, 0, 0, width, height, LIGHTEST);
    pop();

    //second pigeon layer
    push();
    tint(255, random(alp1));
    image(HeyGorgeous_pigeons, 0, 0, width, height);
    pop();

    //glitch
    push();
    tint(0, alp2);
    image(HeyGorgeous_sil, random(-5,5), random(-5,5));
    pop();

    for (let i = 0; i <10; i++){
      noStroke();
      fill(colour, random(100), 100, alp2);
      // fill(0, random(alp1));
      rect(0, random(height), HeyGorgeous_bronze.width, 50);
    }
    
  
    //selfie 2
    push();
    tint(alp2);
    blend(HeyGorgeous_selfie2, 0, 0, HeyGorgeous_selfie2.width, HeyGorgeous_selfie2.height, 0, 0, width, height, DARKEST);
    pop();

    if (frameCount%int(random(20))==0){
      colour = random(360);
      HeyGorgeous_bronze.filter(INVERT);
      if (alp1 == 0){
        alp1 = 100;
        alp2 = 0;
      } else {
          alp1 = 0;
          alp2 = 255;
        }
      }

      if (frameCount==1500){
        reset();
        mgr.showScene(Chicks);
        }
  }
}

//================Chicks==================

function Chicks(){
  let j = 1;
  let alp1 = 100;
  let alp2 = 0

  this.draw = function(){
    if (frameCount==1){
      createCanvas(Chicks_base.width, Chicks_base.height); 
      frameRate(5);
    }
    background(random(360), random(100), random(100));

    //mural
    blend(Chicks_mural, 0, 0, Chicks_mural.width, Chicks_mural.height, random(-5, 5), 0, width, height, DIFFERENCE);

    //Schweps
    blend(Chicks_Schweps1, 0, 0, Chicks_Schweps1.width, Chicks_Schweps1.height, random(-10, 10), 0, width, height, LIGHTEST);
    blend(Chicks_Schweps2, 0, 0, Chicks_Schweps2.width, Chicks_Schweps2.height, random(-10, 10), 0, width, height, DARKEST);

    //base
    push();
    tint(255, random(100));
    image(Chicks_base, 0, 0);
    pop();

    //lights
    blend(Chicks_lights, 0, 0, Chicks_lights.width, Chicks_lights.height, random(-100), 0, width, height, LIGHTEST);

    push();
    Chicks_lights.filter(INVERT);
    tint(255, alp1);
    image(Chicks_lights, 0, 0)
    pop();

    if (frameCount%int(random(20))==0){
      if (alp1 == 100){
        alp1 = 0
        alp2 = 100
      } else {
        alp1 = 100
        alp2 = 0
      }
    }
  
    //universe
    noStroke();
    fill(random(360), 100, 100, alp2);
    rect(0, 0, width, height);
    
    //Schweps2
    push();
    tint(255, random(alp2-50, alp2));
    image(Chicks_Schweps1, 0, 0);
    pop();

    push();
    tint(255, random(alp2-50, alp2));
    image(Chicks_Schweps2, 0, height*.25);
    pop();

    push();
    tint(255, random(alp2-50, alp2));
    image(Chicks_Schweps1, 0, height/2);
    pop();

    push();
    tint(255, random(alp2-50, alp2));
    image(Chicks_Schweps2, 0, height*.75);
    pop();

    //sils
    push();
    tint(random(360), random(100), 100);
      if (frameCount%int(random(4))==0){
        j = int(random(1,5));
      }
    
    image(Chicks_sil[j], random(-10, 10), random(-10, 10),
    width + random(-10), height + random(-10));
    pop();
      
    push();
    tint(random(360), random(100), 100);
    image(Chicks_sil[j], random(-10, 10), random(-10, 10), width + random(-10), height + random(-10));
    pop();

    if (frameCount==1500){
      reset();
      mgr.showScene(WhatLiftsYou);
      }
  }
}

//==================WhatLiftsYou================

function WhatLiftsYou(){

  let alp1 = 0;
  let alp2 = 100;
  let alp3 = 100;

  let x;
  let y;
  let inc = 20;
  let colour = 180;

  this.setup = function(){
    createCanvas(WhatLiftsYou_base.width*.75, WhatLiftsYou_base.height*.75);
    background(0);
    frameRate(7);
    x = 100;
    y = height - 200;
  }

  this.draw = function(){
    if (frameCount == 1){
      createCanvas(WhatLiftsYou_base.width*.75, WhatLiftsYou_base.height*.75);
      background(0);
      frameRate(7);
    }

    background(colour, 100, 100);

    //base
    push();
    tint(255, random(70,100));
    image(WhatLiftsYou_base, 0, 0, width, height);
    pop();

    //wing Overlay
    blend(WhatLiftsYou_wingsCU, 0, 0, WhatLiftsYou_wingsCU.width, WhatLiftsYou_wingsCU.height, 0, 0, width, height, DIFFERENCE);


    //lines
    blend(WhatLiftsYou_line2, 0, 0, WhatLiftsYou_line2.width, WhatLiftsYou_line2.height, random(-10, 10), random(-10, 10), width, height, DARKEST);


    //pigeons
    fill(colour+180, 100, 100, alp1);
    rect(0, 0, width, height);
    push();
    tint(255, random(alp1));
    image(WhatLiftsYou_pigeons, random(-10, 10), random(-10, 10), width, height);
    WhatLiftsYou_pigeons.filter(INVERT);
    pop();
    push();
    tint(255, random(alp1));
    image(WhatLiftsYou_pigeons, random(-10, 10), random(-10, 10), width, height);
    pop();

    //lines
    WhatLiftsYou_line1.filter(GRAY);
    blend(WhatLiftsYou_line1, 0, 0, WhatLiftsYou_line1.width, WhatLiftsYou_line1.height, random(-10, 10), random(-10, 10), width, height, DARKEST);
    
  //wings
  push();
  tint(random(alp2), random(60,100));
  WhatLiftsYou_wings.filter(INVERT);
  image(WhatLiftsYou_wings, random(-10, 10), random(-10, 10), width, height);
  pop();

  //text
  push();
  tint(colour, 100, 100);
  WhatLiftsYou_text.filter(GRAY);
  image(WhatLiftsYou_text, x+random(-5,5), y, width, height)  
  pop();

  if (frameCount%int(random(20))==0){
    colour = random(180);
    if (alp1 == 0){
      alp1 = 100;
      alp2 = 0
      // alp3 = 0;
    } else {
        alp1 = 0;
        alp2 = 100;
        // alp3 = 50;
      }
    }

  y-= inc;

  if (y <= 10 || y >= height - 200 ){
    inc *= -1;
    }
  
  if (frameCount==1500){
    reset();
    mgr.showScene(SeenRain);
    }

  }

}

//==================Seen Rain===================

function SeenRain(){
  let sil = 1;
  let flick = 1;
  let alp1 = 0;
  let colour = 180;
  let shade = 0;
  
  // Tiles configuration
  let tiles = [];
  let cols = 5;
  let rows = 5;
  let w, h;
  
  // Order of tiles
  let board = [];

  this.setup = function(){
    createCanvas(SeenRain_base.width, SeenRain_base.height);
    background(0);
    frameRate(6);

     // pixel dimensions of each tiles
    w = width / cols;
    h = height / rows;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * w;
        let y = j * h;
        let img = createImage(w, h);
        img.copy(SeenRain_stone, x, y, w, h, 0, 0, w, h);
        let index = i + j * cols;
        board.push(index);
        let tile = new Tile(index, img);
        tiles.push(tile);
        }
      }
    }
  
  this.draw = function(){
    if (frameCount == 1){
      createCanvas(SeenRain_base.width, SeenRain_base.height);
      background(0);
      frameRate(6);
      }
      background(random(360), 100, 100);

      //base
      push();
      tint(255, random(70,100));
      image(SeenRain_base, 0, 0);
      pop();
    
      //alleys
      blend(SeenRain_alley1, 0, 0, SeenRain_alley1.width, SeenRain_alley1.height, 0, 0, width, height, EXCLUSION);
      
      //umbrellas
      for (let j = 1; j < SeenRain_sky.length; j++){
        push();
        tint(random(255));
        image(SeenRain_sky[j], 0, 0);
        pop();
       }
      
      blend(SeenRain_alley2, 0, 0, SeenRain_alley2.width, SeenRain_alley2.height, 0, 0, width, height, EXCLUSION);
    
      //signs
      push();
      tint(random(255));
      image(SeenRain_sign[flick], 0, -200);
      if (frameCount%int(random(5))==0){
        if (flick == 1){
          flick = 2;
        } else {
          flick = 1;
        }
      }
      pop();
  
      // shadows
      push();
      tint(shade, random(70,100))
      translate(-400, 0);
      
      for (i = 0; i < 5; i++){
        image(SeenRain_shadows[sil], 200*i+random(-10,10), random(-5,5));
      }
      
      if (frameCount%int(random(5))==0){
        if (sil == 1){
          sil = 2;
    
        } else {
          sil = 1;
        }
      }
      pop();
    
      //tile shuffle
      push();
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let index = int(random(25));
          let x = i * w;
          let y = j * h;
          let tileIndex = board[index];
          if (tileIndex > -1) {
            tint(random(255), alp1);
            let img = tiles
            [tileIndex].img;
            img.filter(INVERT);
            image(img, x, y, w, h);
          }
        }
      }
      pop();
    
      
     //umbrellas x2
     for (let m = 1; m < SeenRain_sky.length; m++){
      push();
      scale(1,-1)
      tint(random(360), 100, 100, alp1);
      image(SeenRain_sky[m], random(-20,20), -height + random(-20,20));
      pop();
     }
    
      
    
      //Laurels
      for (let k = 0; k < 5; k++){
      push();
        tint(colour, random(100), random(100), alp1)
        image(SeenRain_Laurel, 20*k+random(-5,5), 20*k+random(-5,5));
        pop();
      }
      for (let l = 0; l < 5; l++){
      push();
        scale(-1, 1);
        tint(colour+180, random(100), random(100), alp1)
        image(SeenRain_Laurel, -width+20*l+random(-5,5), 20*l+random(-5,5));
        pop();
      }
    
    
      //scene shift
      if (frameCount%int(random(10,20))==0){
        colour = random(180);
        if (alp1 == 0){
          alp1 = 100;
          shade = 255;
          
        } else {
          alp1 = 0;
          shade = 0;
      
        }
      }

      if (frameCount==1500){
        reset();
        mgr.showScene(MirrorMirror);
        }
    }

    class Tile {
      constructor(i, img) {
        this.index = i;
        this.img = img;    
      }
    }    
  }

//==================MirrorMirror================

function MirrorMirror(){
  let shadows = [];
  // change variables
  let alp1 = 0;
  let alp2 = 100;
  let colour = 0;

  // Tiles configuration
  let tiles = [];
  let cols = 5;
  let rows = 5;
  let w, h;

  // Order of tiles
  let board = [];

  this.setup = function(){
    createCanvas(MirrorMirror_base.width, MirrorMirror_base.height);
    frameRate(5);

    //Array of Shadows
    for (let k = 0; k < MirrorMirror_sil.length; k++){
      let images = new Shadow( random(0, width*.7), 0, -20, 255, MirrorMirror_sil[k]);
      shadows.push(images);
     }

    // pixel dimensions of each tiles
    w = width / cols;
    h = height / rows;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * w;
        let y = j * h;
        let img = createImage(w, h);
        img.copy(MirrorMirror_patterns, x, y, w, h, 0, 0, w, h);
        let index = i + j * cols;
        board.push(index);
        let tile = new Tile(index, img);
        tiles.push(tile);
      }
    }


    }
  this.draw = function(){
    if (frameCount==1){
      createCanvas(MirrorMirror_base.width, MirrorMirror_base.height);
      frameRate(5);
    }

    background(random(360), 100, 100);

    //base
    push();
    tint(255, random(70,100));
    image(MirrorMirror_base, 0, 0);
    pop();

    //mirrors
    push();
    tint(255, random(70,100));
    image(MirrorMirror_mirror1, 0, 0);
    pop();

    blend(MirrorMirror_mirror2, 0, 0, MirrorMirror_mirror2.width, MirrorMirror_mirror2.height, 0, 0, width, height, LIGHTEST);

    blend(MirrorMirror_mirror3, 0, 0, MirrorMirror_mirror3.width, MirrorMirror_mirror3.height, 0, 0, width, height, SOFT_LIGHT);


    //patterns
    blend(MirrorMirror_patterns, 0, 0, MirrorMirror_patterns.width, MirrorMirror_patterns.height, 0, 0, width, height, DARKEST);

    //sils
    for (let j = 0; j < shadows.length; j++){
      shadows[j].edges();
      shadows[j].move();
      shadows[j].show();
    }
  

    //tile shuffle
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let index = int(random(16));
        let x = i * w;
        let y = j * h;
        let tileIndex = board[index];
        if (tileIndex > -1) {
          push()
          tint(random(255), alp1);
          let img = tiles
          [tileIndex].img;
          img.filter(INVERT);
          image(img, x, y, w, h);
          pop();
        }
      }
    }

    //Shooting ELs
    push();
    tint(colour, 100, 100, alp1);
    
    image(MirrorMirror_EL2, -15, 0);
    pop();

    push();
    tint(colour+180, 100, 100, alp1);
    scale(-1, 1);
    image(MirrorMirror_EL2, -width, 0);
    pop();

    if (frameCount%3==0){
      colour = random(180);
    }

  //scene shift
  if (frameCount%int(random(20))==0){
    if (alp1 == 0){
      alp1 = 100;
      alp2 = 0;
    } else {
      alp1 = 0;
      alp2 = 100;
      }
    }
  
  if (frameCount==1500){
    reset();
    mgr.showScene(BountifulBloom);
    }
  }
  class Shadow{
    constructor(x, y, inc, tint, silImg){
      this.x = x;
      this.y = y;
      this.inc = inc;
      this.tint = tint;
      this.sil = silImg;
    }
    edges(){
      if (this.x <= 0 || this.x >= width - this.sil.width){
        //this.inc *= -1;
        if (this.tint == 255){
          this.tint = 0;
        } else {
          this.tint = 255;
        }
      }
  
      if (this.x <= -this.sil.width){
        this.x = width;
      }
      // if (this.x >= width){
      //   this.x = -this.sil.width;
      // }
     
    }
    move(){
      this.x += this.inc;
  
    }
    show(){
      push();
      // tint(this.tint);
      // image(this.sil, this.x + random(-20,20), this.y + random(-20,20));
      // image(this.sil, this.x, this.y);
      blend(this.sil, 0, 0, this.sil.width, this.sil.height, this.x, this.y, this.sil.width, this.sil.height, DIFFERENCE);
      pop();
    }
  }
  
  class Tile {
    constructor(i, img) {
      this.index = i;
      this.img = img;    
    }
  }
  

}

//==================Bountiful Bloom=============

function BountifulBloom(){
  let shadows = [];
  let alp1 = 0;
  let alp2 = 100;
  let hue = 180;

  // Tiles configuration
  let tiles = [];
  let cols = 10;
  let rows = 10;
  let w, h;

  // Order of tiles
  let board = [];

  this.setup = function(){
    createCanvas(BountifulBloom_base.width, BountifulBloom_base.height);
    background(0);
    frameRate(7);

    //Array of Shadows
    for (let k = 0; k < BountifulBloom_Laurels.length; k++){
      let images = new Shadow(random(width*.4), random(height*.5), random(20,30), random(10,20), 255, BountifulBloom_Laurels[k]);
      shadows.push(images);
    }

    // pixel dimensions of each tiles
    w = width / cols;
    h = height / rows;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * w;
        let y = j * h;
        let img = createImage(w, h);
        img.copy(BountifulBloom_stone, x, y, w, h, 0, 0, w, h);
        let index = i + j * cols;
        board.push(index);
        let tile = new Tile(index, img);
        tiles.push(tile);
      }
    }
  }

  this.draw = function(){
    //setup
    if (frameCount == 1){
      createCanvas(BountifulBloom_base.width, BountifulBloom_base.height);
      background(0);
      frameRate(7);
    }

    background(random(360), 100, 100);

    //base
    push();
    tint(255, random(70,100));
    image(BountifulBloom_base, 0, 0);
    pop();

    //blender
    blend(BountifulBloom_blender, 0, 0, BountifulBloom_blender.width, BountifulBloom_blender.height, 0, 0, width, height, DIFFERENCE);

    //lions
    blend(BountifulBloom_lion, 0, 0, BountifulBloom_lion.width, BountifulBloom_lion.height, 0, 0, BountifulBloom_lion.width, BountifulBloom_lion.height, LIGHTEST);
    push();
    scale(-1, 1);
    blend(BountifulBloom_lion, 0, 0, BountifulBloom_lion.width, BountifulBloom_lion.height, - width, 0, BountifulBloom_lion.width, BountifulBloom_lion.height, LIGHTEST);
    pop();

    //Laurels
    for (let j = 0; j < shadows.length; j++){
      shadows[j].edges();
      shadows[j].move();
      shadows[j].show();
    }

    //lions
    image(BountifulBloom_lion1, 0, 0);
    image(BountifulBloom_lion2, 0, 0);

    //tile shuffle
    push();
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let index = int(random(100));
        let x = i * w;
        let y = j * h;
        let tileIndex = board[index];
        if (tileIndex > -1) {
          tint(random(255), alp1);
          let img = tiles
          [tileIndex].img;
          img.filter(INVERT);
          image(img, x, y, w, h);
        }
      }
    }
    pop();

    //dancing
    let p = int(random(0,4));
    //sil[p].filter(INVERT);
    for (let j = 0; j < 10; j++){
      push();
      tint(random(180,360), 100, 100, random(alp1-50, alp1));
      image(BountifulBloom_lion1, random(-200, width), 0);
      image(BountifulBloom_lion2, random(-width,width), -400);
      image(BountifulBloom_lion1, random(-200, width), -600);
      pop();
    }
    
    //Laurel Lions
    blend(BountifulBloom_LaurelLion1, 0, 0, BountifulBloom_LaurelLion1.width, BountifulBloom_LaurelLion1.height, 0, 0, width, height, DIFFERENCE);
    push();
    tint(0, random(alp2));
    image(BountifulBloom_LaurelLion1, random(-10,10), random(-10,10));
    pop();

    blend(BountifulBloom_LaurelLion2, 0, 0, BountifulBloom_LaurelLion2.width, BountifulBloom_LaurelLion2.height, 0, 0, width, height, DIFFERENCE);
    push();
    tint(0, random(alp2));
    image(BountifulBloom_LaurelLion2, random(-10,10), random(-10,10));
    pop();

    //Laurel
    push();
    tint(255, random(alp2));
    image(BountifulBloom_Laurel, 70 - random(-20,20), height-BountifulBloom_Laurel.height +random(-10,10))
    pop();
    blend(BountifulBloom_Laurel, 0, 0,BountifulBloom_Laurel.width, BountifulBloom_Laurel.height, 70, height-BountifulBloom_Laurel.height, BountifulBloom_Laurel.width, BountifulBloom_Laurel.height, EXCLUSION);

    //scene shift
    if (frameCount%int(random(20))==0){
      BountifulBloom_lion1.filter(INVERT);
      BountifulBloom_lion2.filter(INVERT);
      if (alp1 == 0){
        alp1 = 100;
        alp2 = 0;
      } else {
        alp1 = 0;
        alp2 = 100;
      }
    }

    if (frameCount==1500){
      reset();
      mgr.showScene(FlyHigher);
      }
  }

  class Shadow{
    constructor(x, y, xInc, yInc, tint1, LaurelImg){
      this.x = x;
      this.y = y;
      this.xInc = xInc;
      this.yInc = yInc;
      this.tint = tint1;
      this.Laurel = LaurelImg;
    }
    edges(){
      if (this.x <= 0 || this.x >= width - this.Laurel.width){
        this.xInc *= -1;
        if (this.tint == 255){
          this.tint = 0;
        } else {
          this.tint = 255;
        }
      }
      if (this.y <= 0 || this.y >= height - this.Laurel.height){
        this.yInc *= -1;
        if (this.tint == 255){
          this.tint = 0;
        } else {
          this.tint = 255;
        }
      }
    }
    move(){
      this.x += this.xInc;
      this.y += this.yInc;
    }
    show(){
      push();
      tint(this.tint, random(alp2-50, alp2-30));
      image(this.Laurel, this.x + random(-20,20), this.y + random(-20,20));
      blend(this.Laurel, 0, 0, this.Laurel.width, this.Laurel.height, this.x, this.y, this.Laurel.width, this.Laurel.height, EXCLUSION);
      pop();
    }
  }
  
  class Tile {
    constructor(i, img) {
      this.index = i;
      this.img = img;    
    }
  }
  

}

