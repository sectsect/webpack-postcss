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
//   ];
//   const plugins = [
//     [
//       '@babel/plugin-transform-runtime',
//       {
//         corejs: 3,
//       },
//     ],
//   ];

//   return {
//     presets,
//     plugins,
//   };
// };

const plugins = [
  // "@babel/plugin-syntax-dynamic-import",
  // "@babel/plugin-proposal-export-default-from",
  // '@babel/plugin-transform-react-jsx',
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
      ],
      plugins,
    },
  },
};
