const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withPlugins = require('next-compose-plugins');
const path = require('path');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
}

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    if (isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    if (config.resolve.plugins) config.resolve.plugins.push(new TsconfigPathsPlugin());

    config.resolve.modules.unshift(__dirname);

    return config;
  },
};

module.exports = withPlugins(
  [
    [withCSS],
    [withSass],
  ],
  nextConfig,
);
