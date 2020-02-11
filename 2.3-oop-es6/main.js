class Weapon {
    constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    }
    takeDamage(damage) {
      if ((this.durability - damage) >= 0) {
        this.durability = this.durability - damage;
      } else this.durability = 0;
    };
    //нужно доделать
    getDamage() {
      if (this.durability = 0) {
        return 0;
      } else {
        return this.attack;
      }
    }
    isBroken() {
      if (durability > 0) {
        return false;
      } else {
        return true;
      }
    }
  };
  
  const hand = new Weapon("Рука", 1, Infinity, 1);
  const bow = new Weapon("Лук", 10, 200, 3);
  const sword = new Weapon("Меч", 25, 500, 1);
  const knife = new Weapon("Нож", 5, 300, 1);
  const staff = new Weapon("Нож", 8, 300, 2);
  
  const longbow = new Weapon("Длинный лук", 15, bow.durability, 4);
  const poleaxe = new Weapon("Секира", 27, 800, sword.range);
  const stormStaff = new Weapon("Посох бури", 15, staff.durability, 3);
  
  
  