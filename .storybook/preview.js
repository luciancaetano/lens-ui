import React from 'react';
import anysort from 'anysort';
import '!style-loader!css-loader!sass-loader!../src/styles/index.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/__debug.scss';

export default {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      /**
       * display the top-level grouping as a "root" in the sidebar
       * @type {Boolean}
       */
      showRoots: true,
      storySort: {
        order:[
          'Overview/Introduction',
          'Overview/Getting Started',
          'Overview/Installation and Usage',
          'General/**',
          'Navigation/**',
          'Layout/**',
          'Data Entry/**',
          'Data Display/**',
          'Feedback/**',
          'Icon/Introduction',
          'Icon/**',
          'Hooks/**',
          'Examples/**',
        ],
      }
      // storySort: (a, b) => {
      //   const anysort = require('anysort');

      //   return anysort(a.kind, b.kind, [
      //     'Overview/Introduction',
      //     'Overview/Getting Started',
      //     'Overview/Installation and Usage',
      //     'General/**',
      //     'Navigation/**',
      //     'Layout/**',
      //     'Data Entry/**',
      //     'Data Display/**',
      //     'Feedback/**',
      //     'Icon/Introduction',
      //     'Icon/**',
      //     'Hooks/**',
      //     'Examples/**',
      //   ])
      // }
    },
  }
};