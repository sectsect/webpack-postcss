import './_modules/commons';
import { glide } from './_modules/glide';
import { MyClass } from './_class/myclass';

console.log(window.wp_data);

glide();

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
