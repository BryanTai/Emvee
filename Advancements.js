//The clear plastic cards that make Player Cards stronger

var POSITION = {
    TOP : 0,
    MIDDLE : 1,
    BOTTOM : 2
}

class Advancements {
    constructor(name,level,position,abilities,symbols){
        this.name = name;
        this.level = level;
        this.position = position;
        this.abilities = abilities;
        this.symbols = symbols;
        
        this.shape = null; //TODO
    }
}