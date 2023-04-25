/*
  Liskov Substitution
  => This means that every subclass or derived class should be substitutable for their base or parent class.
*/

//  a class or any of its sub-classes must work properly when plugging in the function
class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I con swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Cannot fly");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);
