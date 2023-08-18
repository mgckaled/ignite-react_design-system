/** @type { import('@storybook/react').Preview } */

import { themes } from "@storybook/theming"

export const preview = {
  backgrounds: {
    default: themes.dark
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  docs: {
    theme: themes.dark,
  },
}

