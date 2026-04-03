const COMPANY_LOGOS = [
  { name: 'P&G', src: '/assets/logos/pg.svg' },
  { name: 'NTT Data', src: '/assets/logos/ntt-data.svg' },
  { name: 'Pier59 Studios', src: '/assets/logos/pier59studios.png' },
  { name: 'Olay', src: '/assets/logos/olay.svg' },
  { name: 'BlueCross Blue Shield', src: '/assets/logos/bluecrossblueshield.png' },
  { name: 'Credit Connection', src: '/assets/logos/creditconnection.png' },
  { name: 'Qeepsake', src: '/assets/logos/qeepsake.png' },
  { name: 'SmartPlan AI', src: '/assets/logos/SmartPlan-ai.svg' },
]

export function CompanyMarquee() {
  const items = [...COMPANY_LOGOS, ...COMPANY_LOGOS]

  return (
    <section aria-label="Company logos" className="logo-marquee">
      <div className="logo-marquee__track">
        {items.map((item, i) => (
          <div key={`${item.name}-${i}`} className="logo-marquee__item">
            {item.src ? (
              <img src={item.src} alt={item.name} className="logo-marquee__img" />
            ) : (
              <span className="logo-marquee__text">{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
