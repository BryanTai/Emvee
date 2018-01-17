class Player {
    constructor(name, deckColor) {
        this.name = name;
        this.playerDeck = new PlayerDeck(deckColor);
        this.discardPile = [];
        this.currentHand = [];
        this.vp = 0;
        this.manaToken = false;
        this.valeCards = [];
        this.spoilCount = 0;
        this.turnsTaken = 0;
    }
}