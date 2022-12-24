import { Box, Text, Checkbox, CheckboxProps } from '@ncdev-ignite-ui/react'

import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,

  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        {Story()}
        <Text size="sm">Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}
