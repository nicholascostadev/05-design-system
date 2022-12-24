import { X } from 'phosphor-react'
import { Text } from '../Text'
import { ToastCloseButton, ToastContainer, ToastTitle } from './styles'

export interface ToastProps {
  title: string
  description?: string
  onClose: () => void
}

export const Toast = ({ title, description, onClose }: ToastProps) => {
  return (
    <ToastContainer>
      <ToastCloseButton aria-label="Close toast" onClick={onClose}>
        <X size={20} />
      </ToastCloseButton>
      <ToastTitle>{title}</ToastTitle>
      <Text size="sm">{description}</Text>
    </ToastContainer>
  )
}
