/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// === GameObject ===
// * createdAt
// * name
// * dimensions (These represent the character's size in the video game)
// * destroy() // prototype method that returns: `${this.name} was removed from the game.`
// */
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt,
        this.name = attributes.name,
        this.dimensions = attributes.dimensions
    }
    destroy() {
        return `${this.name} was removed from game.`;
    }
}



/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
    constructor(conAttributes) {
        super(conAttributes)
        this.healthPoints = conAttributes.healthPoints
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}


// === Humanoid (Having an appearance or character resembling that of a human.) ===
// * team
// * weapons
// * language
// * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
// * should inherit destroy() from GameObject through CharacterStats
// * should inherit takeDamage() from CharacterStats


class Humanoid extends CharacterStats{
    constructor(humanAttributes) {
        super(humanAttributes);
        this.team = humanAttributes.team,
        this.weapons = humanAttributes.weapons,
        this.language = humanAttributes.language
    }
    greet () {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}


// Hero
class Hero extends Humanoid{
    constructor(heroAttributes){
        super(heroAttributes);
        this.armor = heroAttributes.armor,
        this.goodness = heroAttributes.goodness
    }
    hero() {
        return `Bow to your mighty hero, ${this.name}!`;
    }
}

// Villain
class Villain extends Hero{
    constructor(villainAttributes){
        super(villainAttributes);
        this.armor = villainAttributes.armor,
        this.goodness = villainAttributes.goodness
    }
    villain() {
        return `Beware of your evil villain, ${this.name}!`;
    }
}
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

//Hero 
const superHero = new Hero({
    createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 8,
      },
      healthPoints: 150,
      name: 'Paxton',
      team: 'Mighty Sea',
      weapons: [
        'Tritan of the Sea',
        'Waterbending',
      ],
      language: 'Merlanguage',
  });
  
  //Villain 
  const evilVillain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 10,
    },
    healthPoints: 120,
    name: 'Rafe',
    team: 'The Underworld',
    weapons: [
      'The Sword of Flames',
      'Firebending',
    ],
    language: 'Common Tongue',
  });
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(superHero.hero());
    console.log(evilVillain.villain());
  