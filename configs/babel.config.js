module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-react'];
  const plugins = [];

  const isDevelopment = process.env.ENV === 'development';

  if (isDevelopment) {
    plugins.push('@babel/plugin-transform-react-jsx-source');
  }

  return {
    presets,
    plugins,
  };
};
