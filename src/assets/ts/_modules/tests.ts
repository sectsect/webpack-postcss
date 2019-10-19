import dedent from 'dedent';
import detect from './detect';

declare let jQuery: any;
declare let R: any;

export default (): void => {
  /*= =================================================
    Detect Testing
  ================================================== */
  console.log(detect());

  /*= =================================================
    Dedent Example
  ================================================== */
  const sectsect = dedent`A string that gets so long you need to break it over
                       multiple lines. Luckily dedent is here to keep it
                       readable without lots of spaces ending up in the string
                       itself.`;
  console.log(sectsect);

  /*= =================================================
    jQuery Testing
  ================================================== */
  jQuery('body').addClass('sektsekt');

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
  const foo = (a = 5, b = 10): void => {
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

  /*= =================================================
    ES7 Example
  ================================================== */
  // async / await
  const resolveAfter2Seconds = (): any =>
    new Promise<string>((resolve: any | null): any => {
      setTimeout((): any => {
        resolve('resolved');
      }, 2000);
    });
  // new Promise<string>(resolve => {
  //   setTimeout((): void => {
  //     resolve('resolved');
  //   }, 2000);
  // });
  const asyncCall = async (): Promise<void> => {
    try {
      console.log('calling');
      const result = await resolveAfter2Seconds();
      console.log(result);
      // expected output: "resolved"
    } catch (err) {
      alert(err);
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
  const sampleResolve = (value: number): any =>
    new Promise<string>((resolve: any | null): any => {
      setTimeout((): any => {
        resolve(value);
      }, 1000);
    });
  const sample = async (): Promise<string> => {
    try {
      return (await sampleResolve(5)) * (await sampleResolve(10)) + (await sampleResolve(20));
    } catch (error) {
      return error;
    }
  };
  const sample2 = async (): Promise<string> => {
    try {
      const a = await sampleResolve(5);
      const b = await sampleResolve(10);
      const c = await sampleResolve(21);
      return a * b + c;
    } catch (error) {
      return error;
    }
  };
  sample().then((v: string): void => {
    console.log(v); // => 70
  });
  sample2().then((v: string): void => {
    console.log(v); // => 71
  });

  // The await syntax can be used to wait for the completion of any thenable (an object containing a then function that takes a callback)!
  // @ https://dev.to/spaciecat/thenables-await-objects-and-cancel-or-defer-your-promises-1f12
  // const wait = (time: any) => ({ then: (done: any) => setTimeout(done, time) });

  // async function example() {
  //   console.log('Hello...');
  //   await wait(2000);
  //   console.log('World!');
  // }
  // example();
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
};
