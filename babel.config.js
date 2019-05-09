module.exports = api => {
  api.cache(true);
  const presets = [
    ["@babel/preset-env", {
      "useBuiltIns": "usage",
      "corejs": 2,
    }],
    "@babel/preset-react"
  ];
  const plugins = [
    ["@babel/plugin-transform-runtime"]
  ];

  return {
    presets,
    plugins
  };
}
