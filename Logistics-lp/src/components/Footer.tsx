import type { CSSProperties } from 'react'

const footerStyle: CSSProperties = {
  padding: '1.5rem 2rem',
  borderTop: '1px solid var(--color-border)',
  background: 'var(--color-surface)',
  textAlign: 'center',
}

const textStyle: CSSProperties = {
  margin: 0,
  fontSize: '0.875rem',
  color: 'var(--color-muted)',
}

export default function Footer(): React.ReactElement {
  const year = new Date().getFullYear()
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© {year} Logistics. All rights reserved.</p>
    </footer>
  )
}
