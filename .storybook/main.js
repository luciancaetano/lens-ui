module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
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
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  core: {
    builder: "webpack5",
  },
}