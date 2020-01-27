// declare let jQuery: any;

export const typescript = () => {
  // 列挙型 (Enums)
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
};
