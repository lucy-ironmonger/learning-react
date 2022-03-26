// Let and Const

let myName = "Lucy";
console.log(myName);
myName = "Ye";
console.log(myName);

// Old school

function printMyName(name) {
  console.log("My name is " + name);
}

printMyName("Max");

// New school ES6 - template literals, arrow functions, 1 param means no parentheses

const printName = (name) => {
  console.log(`Hi my name is ${name}`);
};

printName("Rupert");

// 1 line means no code block and omit return

const multiply = (number) => number * 2;
console.log("multiply", multiply(2));

// ES5 this keyword
//www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/
// this on the method of an object binds to the object, that's fine
// this in a function within the method on a object causes 'this' to lose scope, so it binds to the window object instead
// ‘this’, always references the owner of the function it is in, for this case — since it is now out of scope — the window/global object.

// Test it here: https://jsfiddle.net/maasha/x7wz1686/

var bunny = {
  name: "Usagi",
  showName: function () {
    alert(this.name);
  },
};

bunny.showName(); // Usagi

// Test it here: https://jsfiddle.net/maasha/z65c1znn/

let doggy = {
  name: "Yashimoto",
  tasks: ["transform", "eat cake", "blow kisses"],
  showTasks: function () {
    this.tasks.forEach(function (task) {
      alert(this.name + " wants to " + task);
    });
  },
};

// doggy.showTasks();
// [object Window] wants to transform
// [object Window] wants to eat cake
// [object Window] wants to blow kisses

// please note, in jsfiddle the [object Window] is named 'result' within inner functions of methods.

// ES6 this keyword
// While in ES5 ‘this’ referred to the parent of the function,
// in ES6, arrow functions use lexical scoping — ‘this’ refers to it’s current surrounding scope and no further.
// Thus the inner function knew to bind to the inner function only, and not to the object’s method or the object itself.
// When you use ‘this’ in arrow functions, it will always keep it’s context and not change on runtime.

// ES6 - we can create classes - don't need a constructor if nothing passed in. Can support inheritance.
// https://www.tutorialspoint.com/es6/es6_classes.htm

class Person {
  firstName = "Lucy";
  sayHello() {
    console.log(`Hi there I'm ${this.firstName}`);
  }
}

const myNewLucy = new Person();
myNewLucy.sayHello();

// Classes can inherit in ES6 - you must have a constructor on it in order to extend to this class

// Properties in constructors must have 'this.' so that when the constructor is called, the object it creates has the properties bound to it

class Turbo {
  constructor() {
    this.turbo = true;
  }

  printMyOriginalTurbo() {
    console.log(
      `It is definitely ${this.turbo} I have a turbo - this method is in parent, as is property`
    );
  }

  turboGoesVroom() {
    console.log("Vroom");
  }
}

// with arguments passed in you need a constructor
// notice how you apply this.model at the start, we are saying the property related to the object is going to
// equal the model we're passing in

// If you are extending a class, and using a constructor on the extension, then you have to add the keyword 'super' in the child
// This constructs the parent class so the child has access to it

class bmwCar extends Turbo {
  constructor(model) {
    super();
    this.model = model;
  }
  make = "BMW";

  printMyCar() {
    console.log(`Vroom I'm in my ${this.make} ${this.model}`);
  }

  printMyTurbo() {
    console.log(
      `It is ${this.turbo} I have a turbo - this is using property from parent class, method in child`
    );
  }
}

const newBimmer = new bmwCar("5-series");
console.log("car make", newBimmer.make);
console.log("car model", newBimmer.model);

console.log("car has turbo", newBimmer.turbo);

// This is interesting - so you CAN have a method that when called can use a property from the inheriterd class
newBimmer.printMyTurbo();
newBimmer.printMyOriginalTurbo();

// If the child and the parent have the same titled property or method, the child one overrides.

class Human {
  type = "Human";
}

class Girl extends Human {
  name = "Lucy";
  type = "Dev";
}

const lucy = new Girl();
console.log(lucy.type);
console.log(lucy.name);

// ES7 class - as highlighted above, if you don't have arguments passing in, bin off the constructor
// Use arrow functions on methods
// Still use this on the arrow function as it reaches out to the property

class WaterBottle {
  inside = "water";

  pour = () => {
    console.log(`Pour the ${this.inside}`);
  };
}

// So in ES7 with a class that extends, we don't need to call super

class Canine {
  legs = 4;

  walk = () => {
    console.log("I'm walking");
  };
}

class Dog extends Canine {
  name = "Fido";
}

const doggo = new Dog(); // has access to all 3
doggo.walk();

// Note that you can't pass in arguments into a constructorless ES7 class - you need a constructor for that

// SPREAD AND REST OPERATORS

// Spread operator -  used to split up array elements OR object properties
// Note if the new object had a property entitled the same as the old object, the new one would overwrite the value

const oldArray = [1, 2, 3];
const crapNewArray = [oldArray, 4];
const newArray = [...oldArray, 4, 5];
console.log("Crappy array not using spread", crapNewArray);
console.log("New array babaaay", newArray);

const oldObj = {
  color: "Red",
  number: 3,
};

const newObj = {
  ...oldObj,
  color: "Blue overwrites red",
  location: "Manchester",
};

console.log("New shiny object", newObj);

// REST operator - used to merge a list of function arguments into an array
// Here we are using the built in filter method which is available on arrays
// the ...args is turning all the arguments into 1 array so we can use array methods on it
// filter will execute a function on every element in the array

const filter = (...args) => {
  return args.filter((el) => console.log(el));
};

filter(1, 2, 3);

// DESTRUCTURING
// Allows us to easily extract array elements or object properties and store them in variables
// Whereas spread takes ALL elements or properties, destructuring you can be surgical

// Array destructuring

const basicArray = ["Hello", "Lucy"];
[a, b] = ["Hello", "Lucy"];
console.log("a", a);
console.log("b", b);

// That's quite cool - this works
[c, d] = basicArray;
console.log("c", c);
console.log("d", d);

// And this also:
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log("num1", num1);
console.log("num3", num3);

// Object destructuring - whereas for array destructuring the order defines which property it  takes,
// For objects it's the name
const myObj = { e: "Lucy", f: 33 };
const { e } = myObj;
console.log("e", e);
console.log("myObj", myObj);

const myNestedObject = {
  greeting: "hiThere",
  items: {
    uk: "lots",
    usa: "evenMoreItemsInTheUSA",
  },
};

// One way to go into nested objects
const {
  items: { uk },
} = myNestedObject;

// Another way
const { usa } = myNestedObject.items;

console.log("uk", uk);
console.log("usa", usa);

// Reference and Primitive Types

// PRIMITIVE types
// numbers, strings, booleans
let number = 1;
console.log("Number", number);
let num2 = number; // this will create a copy of number. If I change number, num2 won't change.
console.log("num2", num2);
number = 13;
console.log("Number changed", number);
console.log("Check if num2 has also changed? No. It's a primitive", num2);

// REFERENCE types
// Objects and arrays are reference types - they reference a place in memory.
// The variable is a pointer to that place in memory.

const lucyIronmonger = {
  name: "Lucy Ironmonger",
  isAce: true,
};

const lucyTwin = lucyIronmonger;

console.log("lucyIronmonger", lucyIronmonger);
console.log("lucyTwin", lucyTwin);

lucyIronmonger.hasKids = true;

console.log("lucyIronmonger added kids", lucyIronmonger);
console.log("lucyTwin - has this changed? Yes! Reference type!", lucyTwin);

// Now with arrays

const array1 = ["goose", "drank", "wine"];
const array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("ohYeah");

console.log("Added to array1", array1);
console.log("Is array2 changed? Yep! Reference type", array2);

// If you reassign objects and arrays, you're copying the pointer
// We need to copy objects and arrays in an immutable way - copy the real object/array, not just a pointer.
// This is where the spread operator comes in.

// Array Functions
// Map - takes a function as an input (a callback), and this function is executed on EVERY element in the array. It will map to a NEW array.
// Filter - also creates new array, also has a function passed, but removes elements that don't belong.
// Reduce - down to 1!

// Remember - a callback function is a function passed into another function as an argument. The below have callbacks which are called.
const numbersWoo = [1, 2, 3];
const mapNumArray = numbersWoo.map((e) => e * 2);
const filterNumArray = numbersWoo.filter((e) => e % 2 !== 0);
const reduceNumArray = numbersWoo.reduce((e, f) => e + f);
console.log("mapNumArray", mapNumArray);
console.log("filterNumArray", filterNumArray);
console.log("reduceNumArray", reduceNumArray);

// Also be using
// find() - returns first element in the array that satisfies the function
// findIndex() - returns the index of the first element in the array that satisfies the function
// concat() - merges 2 or more arrays
// slice() - returns a shallow copy of a portion of an array into a new array. The original array won't be modified.
// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// splice cont - To access part of an array without modifying it, see slice().
