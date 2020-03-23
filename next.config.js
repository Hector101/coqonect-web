const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const Dotenv = require('dotenv-webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withPlugins = require('next-compose-plugins');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
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

    config.optimization.minimizer = [];
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
          loader: 'url-loader',
          options: {
              limit: 100000
          }
      }
    });

    if (isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    if (config.resolve.plugins) config.resolve.plugins.push(new TsconfigPathsPlugin());

    config.resolve.modules.unshift(__dirname);

    return config;
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/signup': { page: '/signup' },
      '/dashboard': { page: '/dashboard' },
      '/dashboard/active-session': { page: '/dashboard/active-session' },
      '/dashboard/help': { page: '/dashboard/help' },
      '/dashboard/mentors': { page: '/dashboard/mentors' },
      '/dashboard/profile': { page: '/dashboard/profile' },
      '/dashboard/notifications': { page: '/dashboard/notifications' },
      '/reset-password': { page: '/reset-password' },
      '/unauthorized': { page: '/unauthorized' },
    }
  },
};

module.exports = withPlugins(
  [
    [withCSS],
    [withSass],
  ],
  nextConfig,
);
