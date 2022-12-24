import { Avatar, AvatarProps } from '@ncdev-ignite-ui/react'

import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/nicholascostadev.png',
    alt: 'Nicholas Costa',
  },

  argTypes: {
    src: {
      type: 'string',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
