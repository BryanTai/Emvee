class ValeCard {
    constructor(name,vp,cost,abilities){
        this.name = name;
        this.abilities = abilities;
        this.vp = vp;
        this.cost = cost;
        this.bitmap = new createjs.Bitmap(preload.getResult("vale_card_front"));
        this.bitmap.visible = false;
    }
}