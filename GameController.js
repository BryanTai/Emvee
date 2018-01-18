// Canvas and Stage
var stage;
var STAGE_WIDTH = 1400;
var STAGE_HEIGHT = 800;

//Preloading assets
var preload;

//CONSTANTS
var DECK_SIZE = 20;
var CARD_WIDTH = 140;
var CARD_HEIGHT = 240;
var CARD_HALF_WIDTH = Math.floor(CARD_WIDTH/2);
var CARD_HALF_HEIGHT = Math.floor(CARD_HEIGHT/2)

var SPIRIT = {
    GREEN : 1,
    YELLOW : 2,
    BROWN : 3,
    WILD : 4
}

var CARDTYPE = {
    ADVANCE : "advancement",
    PLAYER : "playerCard",
    VALE : "vale"
}

//Table Fields
var players; // 2-4 players
var valeCards; // 2 tiers
var advancements; // 3 levels
var fertileSoils; // 3 positions
var victoryPoints;
var turnOrder;

//Player fields
var deckText;
var DECK_X = 50;
var DECK_Y = 400;

function Main(){
    stage = new createjs.Stage("gameCanvas");
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 30;
    
    var imageManifest = [
        {src: "player_card.png", id: "playerCard"},
        {src: "player_card_back_green.png", id: "player_back_green"},
        {src: "vale_card.png", id: "valeCard"}
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
    
    deckText = new createjs.Text("0", "32px Arial", "#FFFFFF");
    deckText.textAlign = "center";
    deckText.x = DECK_X + CARD_HALF_WIDTH;
    deckText.y = DECK_Y + CARD_HEIGHT;
    stage.addChild(deckText);
    
    //TODO testing
    testDrawFunction();
    
    stage.update();
}

function testDrawFunction(){
    var player = new Player("bryan", "green");
    console.log(player);
    
    drawDeckAtPosition(player.deck, DECK_X, DECK_Y);
    
    for (var x = 0; x < 20; x++){
        var cardToDraw = player.deck.cards[x];
        drawCardShapeAtPosition(cardToDraw, 200 + (x * 50), 300 + (x*10));
    }
    
}

function drawDeckAtPosition(deck, x, y){
    drawCardShapeAtPosition(deck, x, y);
    var deckCount = deck.cards.length - 1;
    deckText.text = deckCount;
    
}

function drawCardShapeAtPosition(cardToDraw, x, y){
    var card = cardToDraw.bitmap;
    card.visible = true;
    card.x = x;
    card.y = y;
    
    //TODO draw Advancements
    stage.addChild(card);
}