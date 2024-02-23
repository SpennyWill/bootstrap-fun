// Using the code below as a starting point, write a new class, Bicycle. It should have a honk function which prints out "Hey! Watch out!". The speed of a bicycle should be set to 2:

var Vehicle = function (x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
};

Vehicle.prototype.move = function () {
  this.x = this.x + this.speed * this.randomStep();
  this.y = this.y + this.speed * this.randomStep();
};

Vehicle.prototype.randomStep = function () {
  if (Math.random() < 0.5) {
    return -1;
  } else {
    return 1;
  }
};

var Car = function (x, y) {
  Vehicle.call(this, x, y, 5);
};

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
  console.log("Beep! Beep!");
};

let Bicycle = function (x,y) {
  Vehicle.call(this, x,y,2); 
}; 

Bicycle.prototype = Object.create(Vehicle.prototype);

Bicycle.prototype.honk = function () {
  console.log("Hey! Watch out!");
};

let myBike = new Bicycle(10,15); 

myBike.honk(); 