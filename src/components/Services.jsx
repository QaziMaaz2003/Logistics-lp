export default function Services() {
  const items = [
    { title: 'Freight', desc: 'Full truckload and LTL shipping.' },
    { title: 'Warehousing', desc: 'Secure storage and fulfillment.' },
    { title: 'Last mile', desc: 'On-time local delivery.' },
  ]

  return (
    <section id="services" style={sectionStyle}>
      <h2 style={titleStyle}>Services</h2>
      <div style={gridStyle}>
        {items.map((item) => (
          <div key={item.title} style={cardStyle}>
            <h3 style={cardTitleStyle}>{item.title}</h3>
            <p style={cardDescStyle}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const sectionStyle = {
  padding: '4rem 2rem',
  maxWidth: 960,
  margin: '0 auto',
}

const titleStyle = {
  fontSize: '1.5rem',
  marginBottom: '2rem',
  textAlign: 'center',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1.5rem',
}

const cardStyle = {
  padding: '1.5rem',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 8,
}

const cardTitleStyle = { margin: '0 0 0.5rem', fontSize: '1.125rem' }
const cardDescStyle = { margin: 0, color: 'var(--color-muted)', fontSize: '0.9375rem' }
