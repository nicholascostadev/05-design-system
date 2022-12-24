import { cloneElement, ReactElement, useState } from 'react'
import {
  TooltipContainer,
  Tooltip as TooltipComponent,
  TooltipPositions,
} from './styles'

export type TooltipProps = {
  children: ReactElement
  onOpen?: () => void
  onClose?: () => void
  delayMs?: number
  description: string
  position: TooltipPositions
}

export const Tooltip = ({
  children,
  onOpen,
  onClose,
  delayMs = 400,
  description,
  position,
}: TooltipProps) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  let timeout: any

  const openTooltip = () => {
    timeout = setTimeout(() => {
      if (onOpen) onOpen()
      setTooltipOpen(true)
    }, delayMs)
  }

  const closeTooltip = () => {
    clearInterval(timeout)
    if (onClose) onClose()
    setTooltipOpen(false)
  }

  return (
    <TooltipContainer tooltip-state={tooltipOpen ? 'open' : 'closed'}>
      {tooltipOpen && (
        <TooltipComponent position={position}>{description}</TooltipComponent>
      )}
      {cloneElement(children, {
        onMouseEnter: openTooltip,
        onMouseLeave: closeTooltip,
      })}
    </TooltipContainer>
  )
}
