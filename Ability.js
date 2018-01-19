//A rule on Advancements or Vale Cards that have additional effects

var TRIGGER = {
    ON_PLAY:1,
    HARVEST:2,
    END_GAME:3
}

class Ability {
    constructor(trigger){
        this.trigger = trigger;
    }
    
    useAbility(){
        
    }
}