/* eslint max-classes-per-file: 0 */

/**
 * ES6 Class
 *
 * @param msg - Where something interesting takes place
 */
export class MyClass {
  name: string;

  age: number;

  city: string;

  country: string;

  email: string;

  constructor(name = '', age = 20, city = '', country = '', email = '') {
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
    this.email = email;
  }

  toString(): string {
    return `${this.name} | ${this.age} | ${this.city} | ${this.email}`;
  }

  addCountry(): string {
    return `${this.toString()} | ${this.country}`;
  }

  run(): string {
    return this.addCountry();
  }
}

export class Animal {
  type: string;

  name: string;

  legs: number;

  noise: string;

  food: any;

  constructor(name = 'anonymous', legs = 4, noise = 'nothing') {
    this.type = 'animal';
    this.name = name;
    this.legs = legs;
    this.noise = noise;
  }

  set eats(food: string) {
    this.food = food;
  }

  get dinner(): string {
    return `${this.name} eats ${this.food || 'nothing'} for dinner.`;
  }
}

export class CustomClass {
  a = 1; // .a is public

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  #b = 2; // .#b is private

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  static #c = 3; // .#c is private and static

  incB(): number {
    this.#b += 1;
    return this.#b;
  }
}
