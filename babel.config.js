module.exports = api => {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: 'auto',
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    ['@babel/preset-react'],
  ];
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
    ['@babel/plugin-proposal-class-properties', { loose: true }], // https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
    ['@babel/plugin-proposal-private-methods', { loose: true }], // https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
  ];

  return {
    presets,
    plugins,
  };
};
