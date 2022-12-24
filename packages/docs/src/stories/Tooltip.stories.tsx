import { Box, Text, Tooltip, TooltipProps } from '@ncdev-ignite-ui/react'

import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Notification/Tooltip',
  component: Tooltip,

  args: {
    children: <Text>Hello World</Text>,
    description: "I'm a tooltip!",
    position: 'top',
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    position: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },

  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}
