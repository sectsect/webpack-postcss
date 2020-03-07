// declare let jQuery: any;

export const typescript = () => {
  // Enums
  // @ https://typescript-jp.gitbook.io/deep-dive/type-system/enums
  enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 'AUTHOR',
  }

  const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
  };

  if (person.role === Role.ADMIN) {
    console.log('is admin');
  }

  // Literal Types
  // @ https://typescript-jp.gitbook.io/deep-dive/type-system/literal-types
  function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text',
  ) {
    let result;
    if (
      (typeof input1 === 'number' && typeof input2 === 'number') ||
      resultConversion === 'as-number'
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
  }

  const combinedAges = combine(30, 26, 'as-number');
  console.log(combinedAges);

  const combinedStringAges = combine('30', '26', 'as-number');
  console.log(combinedStringAges);

  const combinedNames = combine('Max', 'Anna', 'as-text');
  console.log(combinedNames);

  // Function Types & Callbacks
  function add(n1: number, n2: number) {
    return n1 + n2;
  }

  function printResult(num: number): void {
    console.log(`Result: ${num}`);
  }

  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }

  printResult(add(5, 12));

  let combineValues: (a: number, b: number) => number;

  // eslint-disable-next-line prefer-const
  combineValues = add;
  // combineValues = printResult;
  // combineValues = 5;

  console.log(combineValues(8, 8));

  // let someValue: undefined;

  addAndHandle(10, 20, result => {
    console.log(result);
  });
};
