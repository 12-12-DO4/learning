// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (el of dairy) {
    console.log(el);
  }
}

// Task 2
const animal = { canJump: true };
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
  for (key of Object.keys(bird)) {
    console.log(`${key}: ${bird[key]}`);
  }
}

// Task 3
function animalCan() {
  for (key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}
