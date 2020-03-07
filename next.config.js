const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withPlugins = require('next-compose-plugins');
const path = require('path');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
}

const nextConfig = {
  env: {
    API_URL: 'http://api.coqonect.com:5000',
  },
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];

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
