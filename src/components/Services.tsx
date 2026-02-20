import type { CSSProperties } from 'react'

interface ServiceItem {
  title: string
  desc: string
}

const sectionStyle: CSSProperties = {
  padding: '4rem 2rem',
  maxWidth: 960,
  margin: '0 auto',
}

const titleStyle: CSSProperties = {
  fontSize: '1.5rem',
  marginBottom: '2rem',
  textAlign: 'center',
}

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1.5rem',
}

const cardStyle: CSSProperties = {
  padding: '1.5rem',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 8,
}

const cardTitleStyle: CSSProperties = { margin: '0 0 0.5rem', fontSize: '1.125rem' }
const cardDescStyle: CSSProperties = { margin: 0, color: 'var(--color-muted)', fontSize: '0.9375rem' }

const items: ServiceItem[] = [
  { title: 'Freight', desc: 'Full truckload and LTL shipping.' },
  { title: 'Warehousing', desc: 'Secure storage and fulfillment.' },
  { title: 'Last mile', desc: 'On-time local delivery.' },
]

export default function Services(): React.ReactElement {
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
