const path = require("path");

module.exports = {
  typescript: {
    check: false,
    reactDocgen: false,
  },
  stories: ["../**/*.stories.tsx", "../**/*.stories.mdx"],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: {
            auto: true,
            exportLocalsConvention: 'camelCase',
          },
        }
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    'storybook-mobile',
    '@storybook/preset-typescript'
  ],
  core: {
    builder: 'webpack5',
  },
};
