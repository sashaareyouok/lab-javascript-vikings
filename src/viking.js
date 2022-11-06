// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health,
        this.strength = strength
    }

    attak(){
        return this.strength;
    }


reciveDamage(damage){
    this.health -= damage;
 }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength)
        this.name = name
    }

    reciveDamage(demage){
        this.health -= damage;  

    if(this.health > 0) return '${this.name} has received ${damage} points of damage'
    if(this.health <= 0) return '${this.name} has died in act of combat'

}

    battleCry(){
       return 'Odin Owns You All!'
}

// Saxon

class Saxon extends Soldier{
    reciveDamage(damage){
        this.health -= damage;

        if(this.health > 0) return 'A Saxon has received ${damage} points of damage'
        if(this.health <= 0) return 'A Saxon has died in act of combat' 
    }

}

// War
class War {
    constructor(){
        this.vikingsArmy = [];
        this.saxonArmy = [];
    }

    addVikings (newViking){
        this.vikingsArmy.push(newViking)
    }

    addSaxon(newSaxon) {
        this.saxonArmy.push(newSaxom)
    }

    getRandom (army){
        return Math.floor(Math.random() * army.length)
    }

    vikingsAttak(){
        const v
    }
}

