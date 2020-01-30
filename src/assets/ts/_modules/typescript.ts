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
};
