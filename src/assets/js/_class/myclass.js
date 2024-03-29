/* eslint max-classes-per-file: 0 */

/**
 * ES6 Class
 *
 * @param string  msg   Where something interesting takes place
 *
 * @return string
 */
export class MyClass {
  constructor(name, age, city, country, email = false) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
    this.email = email;
  }

  toString() {
    return `${this.name} | ${this.age} | ${this.city} | ${this.email}`;
  }

  addCountry() {
    return `${this.toString()} | ${this.country}`;
  }

  run() {
    return this.addCountry();
  }
}

export class Animal {
  constructor(name = 'anonymous', legs = 4, noise = 'nothing') {
    this.type = 'animal';
    this.name = name;
    this.legs = legs;
    this.noise = noise;
  }

  set eats(food) {
    this.food = food;
  }

  get dinner() {
    return `${this.name} eats ${this.food || 'nothing'} for dinner.`;
  }
}

// export class CustomClass {
//   a = 1; // .a is public

//   #b = 2; // .#b is private

//   static #c = 3; // .#c is private and static

//   incB() {
//     this.#b += 1;
//     return this.#b;
//   }
// }
