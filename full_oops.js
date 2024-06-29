// object and classes 
/*
classes:- blue Print for creating object.
Object:- instance of class.
*/

// class example:-
/*class Person{

  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  display(){
    console.log(`Name: ${this.name} and age: ${this.age}`);
  }
  
};

let human = new Person("Abhishek",23);
human.display();
*/ 

// Access Modifiers in js
/*
there are three types of access modifiers in js
1.public  {accessible from anywhere}
2. private {accessible only from inside the class} using '#'
3.protected {accessible from inside the class and subclasses} using '_'
*/

// example
/*
class Hero {
  name;         // Public property
  #identity;    // Private property
  _power;       // Protected property (by convention)

  constructor(name, identity, power) {
    this.name = name;
    this.#identity = identity;
    this._power = power;
  }

  // Public method
  revealIdentity() {
    console.log(`I am ${this.#identity}, known as ${this.name}`);
  }

  // Private method
  #privateIdentity() {
    console.log(`This is a private method. My real name is ${this.#identity}`);
  }

  // Protected method (by convention)
  _protectedPower() {
    console.log(`My power is protected and it is ${this._power}`);
  }

  // Method to demonstrate accessing the private method
  demonstratePrivate() {
    this.#privateIdentity();
  }
}
class FlyingHero extends Hero {
  constructor(name, identity, power, flightSpeed) {
    super(name, identity, power);
    this.flightSpeed = flightSpeed; // Public property
  }

  // Public method
  fly() {
    console.log(`${this.name} is flying at ${this.flightSpeed} mph!`);
  }

  // Method to demonstrate accessing the protected method
  useProtectedMethod() {
    this._protectedPower();
  }
}
// Creating an instance of Hero
const superHero = new Hero("Captain Code", "John Doe", "Secret Data");
superHero.revealIdentity(); 
superHero.demonstratePrivate(); 
// superHero.#privateIdentity(); 
// console.log(superHero.#identity); 
// superHero._protectedPower(); 

// Creating an instance of FlyingHero
const flyingHero = new FlyingHero("Sky Walker", "Jane Smith", "Flying Data", 300);
flyingHero.revealIdentity(); 
flyingHero.fly(); 
flyingHero.useProtectedMethod();
*/

// .............................................................//
// polymorphism 
/*
means many form 
it can be two types such as 
method overloading and method overriding
*/
// ................................................................//
// method overriding
/*
class calculator{
 add(a,b){
   if(b===undefined){
     return this.addsingle(a);
   }
   return this.twoadd(a,b)
 }

  addsingle(a){
    return a+a;
  }
  twoadd(a,b){
    return a+b;
  }

  
}
const cal = new calculator();
console.log(cal.add(2));
console.log(cal.add(2,3));
*/
// ..............................................................//
// method overloading
/* class animal{
  speek(){
    console.log('animal speek');
  }
  
}
class dog extends animal{
  speek(){
    console.log('dog speek');
  }
}

const doggy = new dog();
const bod = new animal();
doggy.speek();
bod.speek();

*/

// Encapulations
/*
    // Encapsulation
    /*
    - It describes the idea of bundling the data (properties) and methods that operate on the data (behavior) into a single unit, objects.
    - The data is stored in private attributes, and access to the data is restricted to public methods.
    */

// example using Getter and setter method
/*
class Bankaccount{
    constructor(owner,balance){
      this.owner = owner;
      this._balance = balance;
    }

  get balance(){
    return this._balance;
  }
  set balance(amount){
  if(amount<0){
    console.log('error');
  }
    else {
      this._balance = amount;
    }
}
  
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this._balance}`);
    } else {
      console.error("Deposit amount must be positive");
    }
  }
  
  
}

const account1 = new Bankaccount("Abhishek",1000);
account1.deposit(100);
account1._balance;

*/
// ..............................................................//

// object creation in javascript
/*
1. Object literals
2. Object Constructors
3. Object.create()
4. Object new Keywords


1. const object = {
name : 'Abhishek',
age : 23, 
print(){
console.log(`${name}, ${age}`);
}
};
object.print();

2. 
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person1 = new Person("Charlie", 28);
const person2 = new Person("Dana", 22);

person1.greet(); // Output: Hello, my name is Charlie
person2.greet(); // Output: Hello, my name is Dana

3.const personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person = Object.create(personPrototype);
person.name = "Eve";
person.age = 35;

person.greet();

*/
// ...........................................................//
// prototype in js

// in Each object javascript has a special property called prototype that is ether null or reference to another object. And which Inherits properties and method  //

/*
function person(name,age){
  this.name = name;
  this.age = age;
}

person.prototype.print = function(){
  console.log(`Name: ${this.name} and age: ${this.age}`);
}
const ram = new person("ram",29);
ram.print();
*/

// prototype chaining :- when you trying to find object method in protoype chaining it will check in the object it self and then in the prototype of the object and then in the prototype of the prototype and so on.

/*
Object.prototype.sayGoodbye = function() {
  console.log('Goodbye!');
};

ram.print(); // Output: Hello, my name is Jane and I am 25 years old.
ram.sayGoodbye(); // Output: Goodbye!
*/

//.............................................................//