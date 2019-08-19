module.exports = api => {
  api.cache(true);
  const presets = [
    ["@babel/preset-env", {
      "modules": false,
      "useBuiltIns": "usage",
      "corejs": 3,
    }],
    ["@babel/preset-react"]
  ];
  const plugins = [
    ["@babel/plugin-transform-runtime", {
      "corejs": 3,
    }]
  ];

  return {
    presets,
    plugins
  };
}
