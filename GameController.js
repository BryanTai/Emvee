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
var CARD_HALF_HEIGHT = Math.floor(CARD_HEIGHT/2);

var TOTAL_VALE_CARDS = 18;

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

var valeDeckTier1;
var valeDeckTier2;

//Player fields
var deckText;
var DECK_X = 50;
var DECK_Y = 400;

function Main(){
    stage = new createjs.Stage("gameCanvas");
    
    //TODO some mouse events require this code but it also uses a lot of resources.
    //Currently unnecessary right now
    //stage.enableMouseOver(20);
    
    createjs.Ticker.framerate = 30;
    
    var imageManifest = [
        {src: "player_card.png", id: "player_card"},
        {src: "player_card_back_green.png", id: "player_back_green"},
        {src: "advance_back.png", id: "advance_back"},
        {src: "advancement.png", id: "advance"},
        {src: "vale_card_back.png", id: "vale_back"},
        {src: "vale_card_front.png", id: "vale_front"}
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
    
    setUpValeCards();
    
    //TODO testing
    testDrawFunction();
    
    stage.update();
}

function setUpValeCards(){
    valeCards = [[],[]];
    for( var i = 0; i < valeCards.length; i++){
        for(var v = 0; v < TOTAL_VALE_CARDS; v++){
            valeCards[i].push(new ValeCard("card"+v, 0,0,null));
        }
    }
    
    valeDeckTier1 = new createjs.Bitmap(preload.getResult("vale_back"));
    valeDeckTier1.x = DECK_X;
    valeDeckTier1.y = 100;
    stage.addChild(valeDeckTier1);
    
    /*
    valeDeckTier2 = new createjs.Bitmap(preload.getResult("vale_back"));
    valeDeckTier2.x = DECK_X;
    valeDeckTier2.y = 100;
    stage.addChild(valeDeckTier2);
    */
}

function testDrawFunction(){
    var player = new Player("bryan", "green");
    console.log(player);
    
    drawDeckAtPosition(player.deck, DECK_X, DECK_Y);
    
    for (var x = 0; x < 20; x++){
        var cardToDraw = player.deck.cards[x];
        drawCardShapeAtPosition(cardToDraw, 200 + (x * 50), DECK_Y + (x*10));
    }
    
    //testing Advancements
    for (var x = 0; x < 3; x++){
        var a = new Advancement("test"+x,x,x,null,new Symbols());//name,level,position,abilities,symbols
        drawCardShapeAtPosition(a, 400 + (x*200), 100);
    }
    
}

function drawDeckAtPosition(deck, x, y){
    drawCardShapeAtPosition(deck, x, y);
    deckText.text = deck.cards.length;
}

function drawCardShapeAtPosition(cardToDraw, x, y){
    var card = cardToDraw.bitmap;
    card.visible = true;
    card.x = x;
    card.y = y;
    
    //TODO draw Advancements
    stage.addChild(card);
}