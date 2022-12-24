import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Muti Step',
  component: MultiStep,

  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        {Story()}
      </Box>
    ),
  ],

  args: {
    size: 4,
    currentStep: 1,
  },
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
