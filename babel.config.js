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
            targets: {
              browsers: [
                '> 1%, last 2 versions, Firefox ESR, IE >= 11, not Android 4.4.3-4.4.4, not dead',
              ],
            },
          },
        ],
      ],
      plugins: [...plugins, ['@babel/plugin-transform-runtime', { corejs: 3 }]],
    },
    modern: {
      presets: [['@babel/preset-modules']],
      plugins,
    },
  },
};
