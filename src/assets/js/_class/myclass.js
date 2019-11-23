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
