module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
          root: ['.'],
          alias: {
            src: './src',
            assets: './assets',
          },
        },
      ],
    ],
  };
};
