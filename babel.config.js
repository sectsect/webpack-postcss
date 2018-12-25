module.exports = api => {
  api.cache(true);
  const presets = [
    ["@babel/preset-env", {
      "useBuiltIns": "usage"
    }]
  ];
  const plugins = [
    ["@babel/plugin-transform-runtime"]
  ];

  return {
    presets,
    plugins
  };
}