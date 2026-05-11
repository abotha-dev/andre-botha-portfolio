const COMPANY_LOGOS = [
  { name: 'P&G',                   src: '/assets/logos/pg.svg',                  sizeKey: 'pg' },
  { name: 'NTT Data',              src: '/assets/logos/ntt-data.svg',            sizeKey: 'ntt' },
  { name: 'Olay',                  src: '/assets/logos/olay.svg',                sizeKey: 'olay' },
  { name: 'BlueCross Blue Shield', src: '/assets/logos/bluecrossblueshield.png', sizeKey: 'bcbs' },
  { name: 'Credit Connection',     src: '/assets/logos/creditconnection.png',    sizeKey: 'cc' },
  { name: 'Qeepsake',              src: '/assets/logos/qeepsake.png',            sizeKey: 'qeepsake' },
  { name: 'SmartPlan AI',          src: '/assets/logos/smartplan-ai.png',        sizeKey: 'smartplan' },
]

export function CompanyMarquee() {
  const items = [...COMPANY_LOGOS, ...COMPANY_LOGOS]

  return (
    <section aria-label="Company logos" className="logo-marquee">
      <div className="logo-marquee__track">
        {items.map((item, i) => (
          <div key={`${item.name}-${i}`} className="logo-marquee__item">
            {item.src ? (
              <img
                src={item.src}
                alt={item.name}
                className={`logo-marquee__img logo-marquee__img--${item.sizeKey}`}
              />
            ) : (
              <span className="logo-marquee__text">{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
