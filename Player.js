//Represents a Player in the game

class Player {
    constructor(name, deckColor) {
        this.name = name;
        this.deck = new PlayerDeck(deckColor);
        this.discardPile = [];
        this.currentHand = [];
        this.vp = 0;
        this.manaToken = false;
        this.valeCards = [];
        this.spoilCount = 0;
        this.turnsTaken = 0;
    }
    
    //TODO move onDeck card into hand, flip new onDeck card, check for spoils
    drawCard(){
        
    }
    //TODO moves a card from Hand to Discard pile.
    discardCard(){
        
    }
}