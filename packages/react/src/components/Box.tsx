import { styled } from '../styles'
import Stitches from '@stitches/react'
import { ElementType } from 'react'

export const Box = styled('button', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  width: '100%',
})

export type BoxProps = Stitches.ComponentProps<typeof Box> & {
  as?: ElementType
}

Box.displayName = 'Box'
