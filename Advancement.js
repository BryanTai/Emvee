//The clear plastic cards that make Player Cards stronger

var POSITION = {
    TOP : 0,
    MIDDLE : 1,
    BOTTOM : 2
}
var ADVANCE_HEIGHT = 80;

class Advancement extends Card{
    constructor(name,level,position,abilities,symbols){
        super(name,"advance");
        this.level = level;
        this.position = position;
        this.abilities = abilities;
        this.symbols = symbols;
        
        this.displayObject = this.createBitmap();
        this.displayObject.visible = false;
        
        this.displayObject.addEventListener("pressmove", this.onPressMove.bind(this));
    }
    
    createBitmap(){
        var container = new createjs.Container();
        var backing = new createjs.Bitmap(preload.getResult("advance_back"));
        backing.alpha = 0.5;
        var front = new createjs.Bitmap(preload.getResult("advance"));
        front.y = this.position * ADVANCE_HEIGHT;
        
        container.addChild(backing, front);
        return container;
    }
}