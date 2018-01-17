// Canvas and Stage
var stage;
var STAGE_WIDTH = 1400;
var STAGE_HEIGHT = 800;

//CONSTANTS
var DECK_SIZE = 20;


var POSITION = {
    TOP : 0,
    MIDDLE : 1,
    BOTTOM : 2
}

var SPIRIT = {
    GREEN : 1,
    YELLOW : 2,
    BROWN : 3,
    WILD : 4
}

//Table Fields
var players; // 2-4 players
var valeCards; // 2 tiers
var advancements; // 3 levels
var fertileSoils; // 3 positions
var victoryPoints;
var turnOrder;

function Main(){
    stage = new createjs.Stage("gameCanvas");
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 30;
    
    var background = new createjs.Shape();
    background.graphics.beginFill("#804000").drawRect(0,0,STAGE_WIDTH, STAGE_HEIGHT);
    background.x = 0;
    background.y = 0;
    stage.addChild(background);
    stage.update();
    
    setUpGame();
}

function setUpGame(){
    
    //TODO testing
    var player = new Player("bryan", "red");
    console.log(player);
}