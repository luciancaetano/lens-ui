const path = require("path");
const loaderUtils = require('loader-utils');

const regexLikeIndexModule = /(?<!pages[\\/])index\.module\.(scss|sass|css)$/;

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
            getLocalIdent: (context, _, exportName, options) => {
              const relativePath = path
                .relative(context.rootContext, context.resourcePath)
                .replace(/\\+/g, '/');

              const hash = loaderUtils.getHashDigest(
                Buffer.from(`${relativePath}`),
                'sha1',
                'base64',
                128,
              );

              return (
                loaderUtils
                  .interpolateName(
                    context,
                    `lens-ui__${exportName}__${hash}`,
                    options,
                  )
                  .replace(
                    /\.module_/,
                    '_',
                  )
                  .replace(/[^a-zA-Z0-9-_]/g, '_')
                  .replace(/^(\d|--|-\d)/, '__$1')
              );
            },
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
