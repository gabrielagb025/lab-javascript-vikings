// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)

        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
            return `${this.name} has died in act of combat`;
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {

        this.health -= damage;

        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
            return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
     this.vikingArmy = [];
     this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){

        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const currentSaxon = this.saxonArmy[randomSaxon];
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const currentViking = this.vikingArmy[randomViking];

        const attackViking = currentSaxon.receiveDamage(currentViking.strength);

        if (currentSaxon.health <= 0){
            this.saxonArmy.splice(currentSaxon, 1);
        }

        return attackViking;

    }

    saxonAttack(){

        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const currentSaxon = this.saxonArmy[randomSaxon];
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        const currentViking = this.vikingArmy[randomViking];

        const attackSaxon = currentViking.receiveDamage(currentSaxon.strength);

        if (currentViking.health <= 0){
            this.vikingArmy.splice(currentViking, 1);
        }

        return attackSaxon;
    }

    showStatus(){
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
