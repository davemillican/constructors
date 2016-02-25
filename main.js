/**
 * Create a simple constructor function called `Foo` and create a new instance
 * from it called `foo`.
 */

// YOUR CODE HERE

function Foo () {

}

var foo = new Foo();

console.assert(foo instanceof Foo);

/**
 * Create a constructor function called `Animal` with a single method on its
 * prototoype called `pet`. This function shouldn't log anything.
 * 
 * Create a constructor function called `Dog` that sets a property on itself
 * within the constructor. The property should be called `says` and the value
 * should be `"woof"`.
 */

// YOUR CODE HERE

function Animal () {

}

Animal.prototype.pet = "Shaggy";


function Dog () {
    this.says = 'woof';
}

Dog.prototype = new Animal();

var dog = new Dog();

console.assert(new Dog().says === "woof");

/**
 * Create a constructor function called `Cat` that sets a property on itself
 * within the constructor. The property should be called `says` and the value
 * should be `"meow"`.
 */

// YOUR CODE HERE
function Cat () {
    this.says = "meow";
}

Cat.prototype = new Animal();

var cat = new Cat();

console.assert(cat instanceof Cat);
console.assert(cat.says === "meow");

/**
 * Add a method to the `Animal` prototype called `speak` that will log out the
 * value of an instance's `.says` property with an exclamation mark appended.
 */

// YOUR CODE HERE
Animal.prototype.speak = function () {
    return this.says += "!";
}

console.assert(cat.speak() === "meow!");
console.assert(dog.speak() === "woof!");

/**
 * Create a constructor called `KeepSecret`. The constructor function itself
 * should accept a parameter called `secret` it should store this in a private
 * variable (use a closure). Add a method to the prototype that is called
 * `squeal` that returns the secret string.
 */

// YOUR CODE HERE
function KeepSecret ( secret ) {
    this.tellAll = function () {
        return secret;
    }
}

KeepSecret.prototype.squeal = function () {
    return this.tellAll();
}


var mySecret = "My class rocks!";
var dontTellNobody = new KeepSecret(mySecret);
console.assert(dontTellNobody.squeal() === mySecret);

/**
 * Create a constructor called `Key`. Create another constructor called `Safe`.
 * Make the Safe constructor take 2 arguments. The first argument can be any
 * piece if data to keep safe. This must be stored using a private variable like
 * you did with KeepSecret. The 2nd param to the `Safe` constructor needs to be
 * an instance of `Key` you need to store it privately as well. Add a function
 * to the Safe prototype called `unlock` that accepts a key. If the key matches
 * the key that was used to create the Safe; then return the secret data.
 */

// YOUR CODE HERE

function Key () {

}

function Safe (treasure, savedKey) {

    this.inner = function ( inKey ) {

        if (inKey === savedKey ) {
            return treasure;
        }
    }    
}

Safe.prototype.unlock = function (key) {
    
    return this.inner(key);
};

var sensitive = 'shhhhh!';
var rightKey = new Key();
var wrongKey = new Key();
var safe = new Safe(sensitive, rightKey);

console.assert(safe.unlock(wrongKey) !== sensitive);
console.assert(safe.unlock(rightKey) === sensitive);

/**
 * Create a constructor called `Validator`. Give it a method on it's prototype
 * called `email` that takes a string and returns true if the string is a valid
 * email address and false if it is not. Email validation is no simple feat, so
 * look up how to do it online.
 */

// YOUR CODE HERE
function Validator() {

}

Validator.prototype.email = function ( email ) {
    var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if ( filter.test(email) === true ) {
        return true;
    }

}


if (typeof Validator === "function") {
  var valid = new Validator();
  console.assert(valid.email("name@theironyard.com"));
  console.assert(!valid.email("name-at-theironyard.com"));
 }