export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© {year} Logistics. All rights reserved.</p>
    </footer>
  )
}

const footerStyle = {
  padding: '1.5rem 2rem',
  borderTop: '1px solid var(--color-border)',
  background: 'var(--color-surface)',
  textAlign: 'center',
}

const textStyle = {
  margin: 0,
  fontSize: '0.875rem',
  color: 'var(--color-muted)',
}
