import './_modules/commons';
import { slider } from './_modules/slider';
import { MyClass } from './_class/myclass';

// const ary = R.append('111', ['222', '333']);
// console.log(ary);

slider();

// jQuery(() => {
//   jQuery('.slider_wrap').each(function() {
//     const parentid = `#${jQuery(this).attr('id')}`;
//     jQuery('.slider').on('init', function(event, slick) {
//       jQuery(this)
//         .closest('.slider_wrap')
//         .addClass('ready');
//     });
//     jQuery(`${parentid} .slider-for`).slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       speed: 200,
//       arrows: true,
//       fade: false,
//       asNavFor: `${parentid} .slider-nav`,
//     });
//     jQuery(`${parentid} .slider-nav`).slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       speed: 200,
//       asNavFor: `${parentid} .slider-for`,
//       arrows: false,
//       dots: false,
//       //	centerMode		  : true,
//       focusOnSelect: true,
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     });
//   });
// });

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
