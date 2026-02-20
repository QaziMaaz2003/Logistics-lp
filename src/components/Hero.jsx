export default function Hero() {
  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>Reliable logistics for your business</h1>
      <p style={subtitleStyle}>
        Shipping, freight, and delivery solutions you can count on.
      </p>
      <a href="#services" style={ctaStyle}>View services</a>
    </section>
  )
}

const sectionStyle = {
  padding: '4rem 2rem',
  textAlign: 'center',
  maxWidth: 720,
  margin: '0 auto',
}

const titleStyle = {
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontWeight: 700,
  margin: '0 0 1rem',
  lineHeight: 1.2,
}

const subtitleStyle = {
  fontSize: '1.125rem',
  color: 'var(--color-muted)',
  margin: '0 0 2rem',
}

const ctaStyle = {
  display: 'inline-block',
  padding: '0.75rem 1.5rem',
  background: 'var(--color-accent)',
  color: '#fff',
  borderRadius: 6,
  fontWeight: 600,
  textDecoration: 'none',
}
