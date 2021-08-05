import { detect } from './detect';

declare let R: any;

export const tests = (): void => {
  /*= =================================================
    Detect Testing
  ================================================== */
  console.log(detect());

  /*= =================================================
    jQuery Testing
  ================================================== */
  $('body').addClass('sektsekt');

  /*= =================================================
    Example for Rambda.js
  ================================================== */
  console.log(R.append('foo', ['bar', 'baz']));
  console.log(R.flatten([1, [2, [3]]]));
  console.log(R.init([1, 2, 3]));
  console.log(R.is(String, 'foo')); // => true
  console.log(R.is(Array, 1)); // => false
  console.log(R.last(['foo', 'bar', 'baz']));
  const mapFn = (x: number): number => x * 2;
  console.log(R.map(mapFn, [1, 2, 3]));
  // => [2, 4, 6]

  /*= =================================================
    ES6 Example
  ================================================== */
  // Spread Operator
  const arr: number[] = [1, 2, 3];
  console.log(arr); // [1, 2, 3]
  console.log(...arr); // 1 2 3

  const arr1: string[] = ['two', 'three'];
  const arr2: string[] = ['one', ...arr1, 'four', 'five'];
  console.log(arr2);

  const numbers: number[] = [9, 4, 7, 1];
  console.log(Math.min(...numbers));

  // Array.prototype.includes() (ES7)
  const array: number[] = [1, 2, 3, 4, 5];
  console.log(array.includes(3));

  // Default Parameters
  const foo = (a = 5, b = 10) => {
    console.log(a + b);
  };
  foo(); // 15
  foo(7, 12); // 19
  foo(undefined, 8); // 13
  foo(8); // 18

  // Object.assign()
  interface Object1Type {
    a: number;
    b: number;
    c: number;
    x: {
      y: {
        z: number;
      };
    };
  }
  const object1: Object1Type = {
    a: 1,
    b: 2,
    c: 3,
    x: {
      y: {
        z: 9999,
      },
    },
  };
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
  const resolveAfter2Seconds = (): Promise<string> =>
    new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  // new Promise<string>(resolve => {
  //   setTimeout(() => {
  //     resolve('resolved');
  //   }, 2000);
  // });
  const asyncCall = async (): Promise<void> => {
    try {
      console.log('calling');
      const result = await resolveAfter2Seconds();
      console.log(result);
      // expected output: "resolved"
    } catch (e: unknown) {
      if (e instanceof ReferenceError) {
        console.error(e.stack);
      } else if (e instanceof Error) {
        console.log(e.stack);
      } else {
        throw e; // unknown error, rethrow it
      }
    }
  };
  asyncCall();

  // async / await & fetch JSON   @ http://blog.fixter.org/learn-es6-promise-and-es7-async-await/
  const doFetch = async (user: string): Promise<void> => {
    try {
      const url = `https://api.github.com/users/${user}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('The user does not exist.');
      return await response.json();
    } catch (err) {
      return err;
    }
  };
  async function getUser(user: string): Promise<void> {
    const userData = await doFetch(user);
    console.log(userData);
  }
  getUser('sectsect');

  // async / await
  const sampleResolve = (value: number): Promise<number> =>
    new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(value);
      }, 1000);
    });
  const sample = async (): Promise<number> => {
    try {
      return (await sampleResolve(5)) * (await sampleResolve(10)) + (await sampleResolve(20));
    } catch (error) {
      return error;
    }
  };
  const sample2 = async (): Promise<number> => {
    try {
      const a = await sampleResolve(5);
      const b = await sampleResolve(10);
      const c = await sampleResolve(21);
      return a * b + c;
    } catch (error) {
      return error;
    }
  };
  sample().then((v: number) => {
    console.log(v); // => 70
  });
  sample2().then((v: number) => {
    console.log(v); // => 71
  });

  // The await syntax can be used to wait for the completion of any thenable (an object containing a then function that takes a callback)!
  // @ https://dev.to/spaciecat/thenables-await-objects-and-cancel-or-defer-your-promises-1f12
  const wait = (time: number) => ({
    then: (done: (...args: any[]) => void) => setTimeout(done, time),
  });
  const example = async () => {
    console.log('Hello...');
    await wait(2000);
    console.log('World!');
  };
  example();

  const object = { a: 1, b: 2, c: 3 };
  console.log('object');
  Object.entries(object).forEach(([key, value]) => {
    console.log({ key, value });
  });
  /*= =================================================
    ES8 Example
  ================================================== */
  // Map @ https://qiita.com/kws9/items/6ce80ae1c0fd28a3a9d7
  interface ObjType {
    'key-1': string;
    'key-2': string;
    'key-3': string;
  }
  const obj: ObjType = {
    'key-1': 'value-1',
    'key-2': 'value-2',
    'key-3': 'value-3',
  };
  const converted = Object.entries(obj).map(([key, value]): any => ({ key, value }));
  console.log(converted);

  /*= =================================================
    ES11 Example a.k.a. ES2020
  ================================================== */
  // Nullish coalescing
  const sss = 0;
  const sect = sss ?? 100;
  console.log(sect);
};
