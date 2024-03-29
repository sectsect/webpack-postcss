import isEmail from 'is-email';
import isUrl from 'is-url';
import isUuid from 'is-uuid';
import { object, string, optional, define, assert } from 'superstruct';

export const tests = () => {
  /*= =================================================
    Detect Testing
  ================================================== */
  // console.log(detect);

  /*= =================================================
    jQuery Testing
  ================================================== */
  $('body').addClass('sektsekt');

  /*= =================================================
    Example for Rambda.js
  ================================================== */
  // console.log(R.append('foo', ['bar', 'baz']));
  // console.log(R.flatten([1, [2, [3]]]));
  // console.log(R.init([1, 2, 3]));
  // console.log(R.is(String, 'foo')); // => true
  // console.log(R.is(Array, 1)); // => false
  // console.log(R.last(['foo', 'bar', 'baz']));
  // const mapFn = x => x * 2;
  // console.log(R.map(mapFn, [1, 2, 3]));
  // // => [2, 4, 6]

  /*= =================================================
    ES6 Example
  ================================================== */
  // Spread Operator
  const arr = [1, 2, 3];
  console.log(arr); // [1, 2, 3]
  console.log(...arr); // 1 2 3

  const arr1 = ['two', 'three'];
  const arr2 = ['one', ...arr1, 'four', 'five'];
  console.log(arr2);

  const numbers = [9, 4, 7, 1];
  console.log(Math.min(...numbers));

  // Array.prototype.includes() (ES7)
  const array = [1, 2, 3, 4, 5];
  console.log(array.includes(3));

  // Default Parameters
  const foo = (a = 5, b = 10) => {
    console.log(a + b);
  };
  foo(); // 15
  foo(7, 12); // 19
  foo(undefined, 8); // 13
  foo(8); // 18
  foo(null); // 10 as null is coerced to 0

  // Object.assign()
  const object1 = {
    a: 1,
    b: 2,
    c: 3,
    x: {
      y: {
        z: 9999,
      },
    },
  };
  // const object2 = Object.assign({ d: 4 }, object1);
  const object2 = { d: 4, ...object1 };
  console.log(object2);

  // Condition with 'Map' object
  // @ https://twitter.com/sulco/status/1156194824866979840 https://qiita.com/chihiro/items/9965cd7eca0380cf288c
  const size = 'lg';
  const sizes = new Map([
    ['sm', '10x10'],
    ['md', '60x25'],
    ['lg', '120x80'],
  ]);
  const dimention = sizes.get(size);
  console.log(dimention);

  /*= =================================================
    ES7 Example
  ================================================== */
  // async / await
  const resolveAfter2Seconds = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  const asyncCall = async () => {
    try {
      console.log('calling');
      const result = await resolveAfter2Seconds();
      console.log(result);
      // expected output: "resolved"
    } catch (err) {
      alert(err);
    } finally {
      console.log(
        'Statements that are executed after the try statement completes. These statements execute regardless of whether an exception was thrown or caught.',
      );
    }
  };
  asyncCall();

  // async / await & fetch JSON   @ http://blog.fixter.org/learn-es6-promise-and-es7-async-await/
  const doFetch = async user => {
    try {
      const url = `https://api.github.com/users/${user}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('The user does not exist.');
      return await response.json();
    } catch (err) {
      return err;
    }
  };
  const getUser = async user => {
    const userData = await doFetch(user);
    console.log(userData);
  };
  getUser('sectsect');

  // async / await
  const sampleResolve = value =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, 1000);
    });
  const sample = async () => {
    try {
      return (await sampleResolve(5)) * (await sampleResolve(10)) + (await sampleResolve(20));
    } catch (error) {
      return error;
    }
  };
  const sample2 = async () => {
    try {
      const a = await sampleResolve(5);
      const b = await sampleResolve(10);
      const c = await sampleResolve(21);
      return a * b + c;
    } catch (error) {
      return error;
    }
  };
  sample().then(v => {
    console.log(v); // => 70
  });
  sample2().then(v => {
    console.log(v); // => 71
  });

  // The await syntax can be used to wait for the completion of any thenable (an object containing a then function that takes a callback)!
  // @ https://dev.to/spaciecat/thenables-await-objects-and-cancel-or-defer-your-promises-1f12
  const wait = time => ({ then: done => setTimeout(done, time) });
  const example = async () => {
    console.log('Hello...');
    await wait(2000);
    console.log('World!');
  };
  example();

  const myObject = { a: 1, b: 2, c: 3 };
  console.log('object');
  Object.entries(myObject).forEach(([key, value]) => {
    console.log({ key, value });
  });
  /*= =================================================
    ES8 Example
  ================================================== */
  // Map @ https://qiita.com/kws9/items/6ce80ae1c0fd28a3a9d7
  const obj = {
    'key-1': 'value-1',
    'key-2': 'value-2',
    'key-3': 'value-3',
  };
  const converted = Object.entries(obj).map(([key, value]) => ({ key, value }));
  console.log(converted);

  /*= =================================================
    Superstruct
  ================================================== */
  // @ https://github.com/ianstormtaylor/superstruct/blob/main/examples/custom-types.js

  // Define custom structs with validation functions.
  const Uuid = define('Uuid', isUuid.v4);

  const Url = define('Url', value => isUrl(value) && value.length < 2048);

  const Email = define('Email', value => {
    if (!isEmail(value)) {
      return { code: 'not_email' };
    }
    if (value.length >= 256) {
      return { code: 'too_long' };
    }
    return true;
  });

  // Define a struct to validate with.
  const User = object({
    id: Uuid,
    name: string(),
    email: Email,
    website: optional(Url),
  });

  // Define data to be validated.
  const data = {
    id: 'c8d63140-a1f7-45e0-bfc6-df72973fea86',
    name: 'Jane Smith',
    email: 'jane@example.com',
    website: 'https://jane.example.com',
  };

  try {
    // Validate the data. In this case the data is valid, so it won't throw.
    assert(data, User);
    console.log('Valid!!!!');
  } catch (e) {
    const { key, value, type } = e;

    if (value === undefined) {
      const error = new Error(`user_${key}_required`);
      error.attribute = key;
      throw error;
    } else if (type === 'never') {
      const error = new Error(`user_attribute_unknown`);
      error.attribute = key;
      throw error;
    } else {
      const error = new Error(`user_${key}_invalid`);
      error.attribute = key;
      error.value = value;
      throw error;
    }
  }
};
