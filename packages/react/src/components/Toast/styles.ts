import { styled } from '../../styles'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const ToastContainer = styled('div', {
  position: 'relative',

  backgroundColor: '$gray600',
  borderRadius: '$sm',

  padding: '$3 $5',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1g',
})

export const ToastCloseButton = styled('button', {
  cursor: 'pointer',
  lineHeight: 0,

  border: 0,
  background: 'transparent',

  position: 'absolute',
  top: '$2',
  right: '$2',

  svg: {
    color: '$gray200',
  },
})

export const ToastTitle = styled(Heading, {
  color: '$white',

  fontSize: '$xl',
})

export const ToastDescription = styled(Text, {
  color: '$gray200',

  fontSize: '$sm',
})
