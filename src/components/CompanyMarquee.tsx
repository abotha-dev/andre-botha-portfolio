const COMPANY_NAMES = [
  'P&G',
  'NTT Data',
  'Hasbro',
  'Pier59 Studios',
  'Olay',
  'BlueCross Blue Shield',
  'Credit Connection',
  'The Industry Model Management',
  'Qeepsake',
]

export function CompanyMarquee() {
  const items = [...COMPANY_NAMES, ...COMPANY_NAMES]

  return (
    <section aria-label="Company logos" className="logo-marquee">
      <div className="logo-marquee__track">
        {items.map((name, i) => (
          <div key={`${name}-${i}`} className="logo-marquee__item">
            {name}
          </div>
        ))}
      </div>
    </section>
  )
}
