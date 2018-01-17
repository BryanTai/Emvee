class PlayerCard {
    constructor(){
        this.advancements = [null,null,null];
    }
    
    addAdvancement(advancement){
        var pos = advancement.position;
        if(this.advancements[pos] != null){
            return false;
        }
        this.advancements[pos] = advancement;
        return true;
    }
    
    drawCard(){
        //TODO
    }
}


