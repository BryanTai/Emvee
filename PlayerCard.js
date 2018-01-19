//The sleeved cards that make up a Player Deck. 
//Player can add Advancements to them to increase their utility

class PlayerCard {
    constructor(){
        this.advancements = [null,null,null];
        this.symbols = new Symbols();
        this.bitmap = new createjs.Bitmap(preload.getResult("player_card"));
        this.bitmap.visible = false;
        
        this.bitmap.addEventListener("pressmove", this.onPressMove.bind(this));
    }
    
    onDblClick(){
        
    }
    
    onPressMove(event){
        this.bitmap.x = stage.mouseX - CARD_HALF_WIDTH;
        this.bitmap.y = stage.mouseY - CARD_HALF_HEIGHT;
        stage.update();
    }
    
    highlightCard(){
        
    }
    
    addAdvancement(advancement){
        var pos = advancement.position;
        if(this.advancements[pos] != null){
            return false;
        }
        this.advancements[pos] = advancement;
        //TODO MERGE SYMBOLS HERE
        //TODO ADD Advancements to bitmap here
        return true;
    }
    
    getSpoilCount(){
        return this.symbols.decay - this.symbols.growth;
    }
}


