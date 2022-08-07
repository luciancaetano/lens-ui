import React from 'react';
import anysort from 'anysort';

export const parameters = {
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
    storySort: (previous, next) => {
      const [previousStory, previousMeta] = previous
      const [nextStory, nextMeta] = next

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Overview/Introduction',
        'Overview/Getting Started',
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
      ])
    }
  },
}
