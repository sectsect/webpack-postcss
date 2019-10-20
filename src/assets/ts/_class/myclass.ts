/**
 * ES6 Class
 *
 * @param string  msg   Where something interesting takes place
 *
 * @return string
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
