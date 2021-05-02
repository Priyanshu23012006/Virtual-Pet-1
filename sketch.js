var dog,sadDog,happyDog,garden,washroom, database;
var foodS,foodStock;
var fedTime,lastFed,currentTime;
var feed,addFood;
var foodObj;
var gameState,readState;

function preload(){
Dog=loadImage("./images/dogImg.png");
HungryDog=loadImage("./images/dogImg1.png");

}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  
  

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

   dog= createSprite(250,300,150,150);
  dog.addImage(Dog);
  dog.scale= 0.15;
  //read game state from database
  
   
  
}

function draw() {
  background(46,139,87);
 if(keyWentUp(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(HungryDog);
 }
 
  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining:"+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  database.ref('/').update({
    Food:foodS
  })
}


//function to update food stock and last fed time

//function to add food in stock


//update gameState

function writeStock(x){ 
  if(x<=0){ x=0; 
  }else{ x=x-1; 
  } 
  database.ref('/').update({ 
    Food:x }) 
  }





