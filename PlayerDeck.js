//A collection of exactly 20 Player Cards
//Top card is the On Deck card

var STARTING_EMPTY = 8;
var STARTING_FERTILE = 6; //TODO ask Rachel for values
var STARTING_CURSED= 6;

class PlayerDeck {
    
    
    constructor(deckColor) {
        this.deckColor = deckColor;
        this.cards = this.newDeck();
    }
    
    newDeck(){
        var toReturn = [];
        for(var e = 0; e < STARTING_EMPTY; e++){
            toReturn.push(new PlayerCard());
        }
        for(var c = 0; c < STARTING_CURSED; c++){
            var newCard = new PlayerCard();
            //newCard.addAdvancement(new Advancement
            
            toReturn.push(newCard);
            
        }
        for(var f = 0; f < STARTING_FERTILE; f++){
            toReturn.push(new PlayerCard());
        }
        
        return toReturn;
    }
    
    shuffle(){
        
    }
    
    getOnDeckCard(){
        return cards[0];
    }
    
    getSearchableCards(){
        //TODO Do not include onDeckCard
    }
}