import { Avatar, AvatarProps } from '@ignite-ui/react'

import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/nicholascostadev.png',
    alt: 'Nicholas Costa',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}