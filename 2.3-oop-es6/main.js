'use strict'
//Задача 1 
let startDurability;

class Weapon {
  constructor({name, attack, durability, range}) {
  this.name = name;
  this.attack = attack;
  this.durability = durability;
  this.range = range;
  this.startDurability = durability;
  }
  takeDamage(damage) {
    if ((this.durability - damage) >= 0) {
      this.durability = this.durability - damage;
    } else this.durability = 0;
  };
  getDamage() {
    if (this.durability === 0) {
      return 0;
    } else if (this.durability >= 0.3 * this.startDurability) {
      return this.attack;
    } else {
      return this.attack / 2;
    }
  }
  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
};

const hand = new Weapon({
  name: "Рука", 
  attack: 1,
  durability: Infinity,
  range: 1
});
const bow = new Weapon({
  name: "Лук", 
  attack: 10, 
  durability: 200, 
  range:3
});
const sword = new Weapon({
  name: "Меч", 
  attack: 25, 
  durability: 500, 
  range: 1
});
const knife = new Weapon({
  name: "Нож", 
  attack: 5, 
  durability: 300, 
  range: 1
});
const staff = new Weapon({
  name: "Посох", 
  attack: 8, 
  durability: 300,
  range: 2
});

const longbow = new Weapon({
  name: "Длинный лук", 
  attack: 15, 
  durability: bow.durability, 
  range:4
});
const poleaxe = new Weapon({
  name: "Секира", 
  attack: 27, 
  durability: 800, 
  range: sword.range
});
const stormStaff = new Weapon({
  name: "Посох бури", 
  attack: 15, 
  durability: staff.durability, 
  range:3
});


function equipWeapon(activeWeapon) {
  startDurability = activeWeapon.durability;
  console.log(`Экипировано оружие: ${activeWeapon.name}`)
  return startDurability;
}

console.log(bow.startDurability);

//Задача 2 
class Bow extends Weapon {
  constructor() {
  super({
    name: "Лук", 
    attack: 10, 
    durability: 200, 
    range:3 
  });
  };
};
class Sword extends Weapon {
  constructor() {
  super({
    name: "Меч", 
    attack: 25, 
    durability: 500, 
    range: 1
  });
  };
};
class Knife extends Weapon {
  constructor() {
  super({
    name: "Нож", 
    attack: 5, 
    durability: 300, 
    range: 1
  });
  };
};
class Staff extends Weapon {
  constructor() {
  super({
    name: "Посох", 
    attack: 8, 
    durability: 300,
    range: 2
  });
  };
};
class Hand extends Weapon {
  constructor() {
  super({
    name: "Рука", 
    attack: 1,
    durability: Infinity,
    range: 1
  });
  };
};
const genericBow = new Bow();
const genericSword = new Sword();
const genericKnife = new Knife();
const genericStaff = new Staff();
const bareHands = new Hand();
console.log(genericBow.name);
console.log(bareHands.isBroken());

class Longbow extends Bow {
  constructor() {
  super({
    name: "Лук", 
    attack: 10, 
    durability: 200, 
    range:3 
  });
    this.name = "Длинный лук", 
    this.attack = 15, 
    this.durability = bow.durability, 
    this.range = 4
  };
};
class Poleaxe extends Sword {
  constructor() {
  super({
    name: "Меч", 
    attack: 25, 
    durability: 500, 
    range: 1
  });
    this.name = "Секира", 
    this.attack = 27, 
    this.durability = 800, 
    this.range = sword.range
  };
};
class Stormstaff extends Staff {
  constructor() {
  super({
    name: "Посох", 
    attack: 8, 
    durability: 300,
    range: 2
  });
    this.name = "Посох бури", 
    this.attack = 15, 
    this.durability = staff.durability, 
    this.range = 3
  };
};
const coolLongBow = new Longbow();
const coolPoleaxe = new Poleaxe();
const coolStormstaff = new Stormstaff();

console.log(coolLongBow.name);
coolStormstaff.getDamage();
console.log(coolStormstaff.name);
coolStormstaff.isBroken();
coolPoleaxe.getDamage();