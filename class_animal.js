class Animal {
    constructor(name = 'Sprinkles', energy = 100) {
      this.name = name;
      this.energy = energy;
    }
  
    eat(food) {
      this.energy += food / 3;
    }
  }