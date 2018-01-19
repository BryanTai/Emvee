//A collection of common functions that Cards can use
//PlayerCard, ValeCard, Advancements

class Card {
    constructor(name, imageTag){
        this.name = name;
        this.displayObject = new createjs.Bitmap(preload.getResult(imageTag));
        this.displayObject.visible = false;
        
        this.displayObject.addEventListener("pressmove", this.onPressMove.bind(this));
    }
    
    onPressMove(event){
        this.displayObject.x = stage.mouseX - CARD_HALF_WIDTH;
        this.displayObject.y = stage.mouseY - CARD_HALF_HEIGHT;
        stage.update();
    }
    
    onDblClick(event){
        //TODO
    }

    getSpoilCount(){
        return this.symbols.decay - this.symbols.growth;
    }
    
    highlightCard(){
        //TODO
    }
}