//The sleeved cards that make up a Player Deck. 
//Player can add Advancements to them to increase their utility

class PlayerCard {
    constructor(){
        this.advancements = [null,null,null];
        this.symbols = new Symbols();
    }
    
    addAdvancement(advancement){
        var pos = advancement.position;
        if(this.advancements[pos] != null){
            return false;
        }
        this.advancements[pos] = advancement;
        //TODO MERGE SYMBOLS HERE
        return true;
    }
    
    getSpoilCount(){
        return this.symbols.decay - this.symbols.growth;
    }
}


