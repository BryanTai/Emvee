//Cards that can be purchased with Spirit mana

class ValeCard extends Card {
    constructor(name,vp,cost,abilities){
        super(name,"vale_card_front");
        this.name = name;
        this.abilities = abilities;
        this.vp = vp;
        this.cost = cost;
    }
}