// module.exports = api => {
//   api.cache(true);
//   const presets = [
//     [
//       '@babel/preset-env',
//       {
//         modules: false,
//         useBuiltIns: 'usage',
//         corejs: 3,
//       },
//     ],
//     '@babel/typescript',
//   ];
//   const plugins = [
//     [
//       '@babel/plugin-transform-runtime',
//       {
//         corejs: 3,
//       },
//     ],
//    ['@babel/plugin-proposal-class-properties', { loose: true }], // https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
//    ['@babel/plugin-proposal-private-methods', { loose: true }], // https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
//     '@babel/proposal-object-rest-spread',
//   ];

//   return {
//     presets,
//     plugins,
//   };
// };

const presets = [
  '@babel/typescript',
];

const plugins = [
  // "@babel/plugin-syntax-dynamic-import",
  // "@babel/plugin-proposal-export-default-from",
  // '@babel/plugin-transform-react-jsx',
  // '@babel/proposal-class-properties',
  // '@babel/proposal-object-rest-spread',
  ['@babel/plugin-proposal-class-properties', { loose: true }], // https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
  ['@babel/plugin-proposal-private-methods', { loose: true }], // https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
  '@babel/proposal-object-rest-spread',
];

module.exports = {
  env: {
    legacy: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: 3,
          },
        ],
        ...presets,
      ],
      plugins: [...plugins, ['@babel/plugin-transform-runtime', { corejs: 3 }]],
    },
    modern: {
      // presets: [['@babel/preset-modules']],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            },
            bugfixes: true,
          },
        ],
        ...presets,
      ],
      plugins,
    },
  },
};
