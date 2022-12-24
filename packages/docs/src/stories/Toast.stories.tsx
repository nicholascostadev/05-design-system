import { Box, Toast, ToastProps } from '@ncdev-ignite-ui/react'

import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Notification/Toast',
  component: Toast,

  args: {
    title: "You've got mail!",
    description: 'You have 3 new messages.',
  },

  argTypes: {
    title: { type: 'string' },
    description: { type: 'string' },
    onClose: {
      type: 'function',
      description: 'Callback function to be called when the toast is closed.',
    },
  },

  decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {},
}
