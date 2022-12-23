import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$defalt',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return <Button>Test</Button>
}
