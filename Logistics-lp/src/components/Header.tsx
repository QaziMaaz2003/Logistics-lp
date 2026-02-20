import type { CSSProperties } from 'react'

const headerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  borderBottom: '1px solid var(--color-border)',
  background: 'var(--color-surface)',
}

const logoStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: '1.25rem',
  color: 'var(--color-text)',
  textDecoration: 'none',
}

const navStyle: CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
}

export default function Header(): React.ReactElement {
  return (
    <header style={headerStyle}>
      <a href="/" style={logoStyle}>Logistics</a>
      <nav style={navStyle}>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
