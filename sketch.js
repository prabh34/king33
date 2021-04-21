

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopter;helicopterSprite;helicopterImg
var package,packageSprite,packageImg;
var ground;
var packageBody;


function preload() {
helicopterImg = loadImage("helicopter.png");
packageImg = loadImage("package.png");
}




function setup() {
	createCanvas(800, 750);

	

	helicopterSprite = createSprite(400,200,13,13);
	helicopterSprite.addImage(helicopterImg);
	helicopterSprite.scale = 0.5;

	packageSprite= createSprite(100,200,13,13);
	packageSprite.addImage(packageImg);
	packageSprite.scale = 0.2;

	ground = createSprite(365,738,200,15);
	ground.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	Matter.Body.translate(package, {x:-20,y:0})
	

}

function draw() {
	background("black");

	packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

	
	text(mouseX+","+mouseY,mouseX,mouseY);

	drawSprites();



}

function keyPressed() {

	if (keyCode === LEFT_ARROW) {
		helicopter.velocityX=-2;
		helicopter.velocityY=0;
	}
	if (keyCode === RIGHT_ARROW) {
		helicopter.velocityX=3;
		helicopter.velocityY=0;
	}

	if (keyCode === DOWN_ARROW) {

		Matter.Body.setStatic(packageBody,false); 
	}

	

}