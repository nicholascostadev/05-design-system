import { styled } from '../../styles'
import { VariantProps } from '@stitches/react'

export const TooltipContainer = styled('div', {
  position: 'relative',
  width: 'fit-content',
})

export const Tooltip = styled('div', {
  color: '$gray100',
  position: 'absolute',

  padding: '$3 $4',

  left: '50%',
  transform: 'translateX(-50%)',

  backgroundColor: '$gray900',
  borderRadius: '$sm',

  display: 'flex',

  '&::before': {
    content: ' ',
    left: '50%',
    border: 'solid transparent',
    height: 0,
    width: 0,
    position: 'absolute',
    pointerEvents: 'none',
    borderWidth: '6px',
    marginLeft: 'calc(6px * -1)',
  },

  variants: {
    position: {
      top: {
        top: 'calc(30px * -1)',

        '&::before': {
          top: '100%',
          borderTopColor: '$gray900',
        },
      },
      right: {
        left: 'calc(100% + 30px)',
        top: '50%',
        transform: 'translateX(0) translateY(-50%)',

        '&::before': {
          left: 'calc(6px * -1)',
          top: '50%',
          transform: 'translateX(0) translateY(-50%)',
          borderRightColor: '$gray900',
        },
      },
      bottom: {
        bottom: 'calc(30px * -1)',

        '&::before': {
          bottom: '100%',
          borderBottomColor: '$gray900',
        },
      },
      left: {
        left: 'auto',
        right: 'calc(100% + 30px)',
        top: '50%',
        transform: 'translateX(0) translateY(-50%)',

        '&::before': {
          left: 'auto',
          right: 'calc(6px * -2)',
          top: '50%',
          transform: 'translateX(0) translateY(-50%)',
          borderLeftColor: '$gray900',
        },
      },
    },
  },

  defaultVariants: {
    position: 'top',
  },
})

export type TooltipPositions = VariantProps<typeof Tooltip>['position']
