// Canvas and Stage
var stage;
var STAGE_WIDTH = 1400;
var STAGE_HEIGHT = 800;

//Preloading assets
var preload;

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
    
    var imageManifest = [
        {src: "player_card.png", id: "playerCard"}
    ]
    
    preload = new createjs.LoadQueue(true, "assets/");
    preload.on("complete", setUpGame);
    preload.loadManifest(imageManifest, true, "assets/images/");
}

function setUpGame(){
    var background = new createjs.Shape();
    background.graphics.beginFill("#804000").drawRect(0,0,STAGE_WIDTH, STAGE_HEIGHT);
    background.x = 0;
    background.y = 0;
    stage.addChild(background);
    
    //TODO testing
    var player = new Player("bryan", "red");
    console.log(player);
    
    for (var x = 0; x < 20; x++){
        drawCardShapeAtPosition(player.playerDeck[x], x * 50, 300 + (x*10));
    }
    
    stage.update();
}

function drawCardShapeAtPosition(playerCard, x, y){
    var card = new createjs.Bitmap(preload.getResult("playerCard"));
    card.x = x;
    card.y = y;
    stage.addChild(card);
}