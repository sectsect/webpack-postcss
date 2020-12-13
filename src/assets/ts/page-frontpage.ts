import './_modules/commons';
import { MyClass, Animal, CustomClass } from './_class/myclass';
import { glide } from './_modules/glide';
import { slider } from './_modules/slider';

console.log(window.wp_data);

glide();
slider();

// console.log(add(10, 5));

// const sect = 'sect';
// console.log(sect);

// let message: String = '';
// message = 'TypeScript World';
// console.log(`Hello!${message}`);

// menu();

// let message: String = '';
// message = 2;
// console.log(`Hello!${message}`);

/**
 * ES6 Class
 *
 * @param string  msg   Where something interesting takes place
 *
 * @return string
 */
// class MyClass {
//   constructor(name, age, city, country, email) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country;
//     this.email = email;
//   }
//
//   toString() {
//     return `${this.name} | ${this.age} | ${this.city} | ${this.email}`;
//   }
//
//   addCountry() {
//     return `${this.toString()} | ${this.country}`;
//   }
//
//   run() {
//     return this.addCountry();
//   }
// }
const myClass = new MyClass('SECT', 37, 'Tokyo', 'Japan', 'info@xxxxxxxxx.com');
const meta = myClass.run(); // 'SECT | 37 | Tokyo | info@xxxxxxxxx.com'
console.log(meta);
// console.log(myClass.email); // 'info@xxxxxxxxx.com'

// Getters and Setters
// https://www.sitepoint.com/javascript-private-class-fields/#gettersandsetters
const rex = new Animal('Rex', 4, 'woof');
rex.eats = 'anything'; // standard setter
rex.food = 'tofu'; // bypass the eats setter altogether
console.log(rex.dinner); // Rex eats tofu for dinner.

// Private Class Fields
// https://www.sitepoint.com/javascript-private-class-fields/#privateclassfields
const m = new CustomClass();
console.log(m.a);
// console.log(m.#b); // error - private variable cannot be modified outside class
const ib = m.incB(); // runs OK
console.log(ib);
// m.#b = 0; // error - private property cannot be modified outside class
