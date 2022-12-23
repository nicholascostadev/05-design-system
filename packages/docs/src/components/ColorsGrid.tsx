import { colors } from '@ignite-ui/tokens'

import { getContrast } from 'polished'

console.log(getContrast('#E1E1E6', '#FFFFFF'))

export const ColorsGrid = () => {
  return Object.entries(colors).map(([name, color]) => (
    <div key={name} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#FFFFFF') < 3.5 ? '#000000' : '#FFFFFF',
        }}
      >
        <strong>${name}</strong>
      </div>
    </div>
  ))
}
