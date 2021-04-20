module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: [
            '> 1%',
            'last 10 versions',
            'not ie <= 8',
            'iOS >= 8',
            'Android >= 4.1',
          ],
        },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
  ],
};
