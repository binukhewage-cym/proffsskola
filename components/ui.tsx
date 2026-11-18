import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Phone,
  MapPin,
  SteeringWheel,
  BookOpen,
  RoadHorizon,
} from '@phosphor-icons/react/dist/ssr';
import { business, courses, photos, steps, faqs, money, type Price } from '@/lib/data';
export function Button({
  href = '/boka',
  children = 'Boka nu',
  secondary = false,
}: {
  href?: string;
  children?: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={`button ${secondary ? 'button-secondary' : ''}`} href={href}>
      {children}
      <ArrowUpRight size={20} aria-hidden="true" />
    </Link>
  );
}
export function Photo({
  name,
  className = '',
  priority = false,
  sizes = '(max-width: 767px) 100vw, 50vw',
}: {
  name: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const p = photos[name];
  return (
    <div className={`photo ${className}`}>
      <Image
        {...p}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
}
export function AreaChips() {
  return (
    <ul className="area-chips" aria-label="Områden vi kör i">
      {business.serviceAreas.map((area, i) => (
        <li key={area} className={i < 2 ? 'area-chip-home' : undefined}>
          {i < 2 && <MapPin size={14} weight="fill" aria-hidden="true" />}
          {area}
        </li>
      ))}
    </ul>
  );
}
export function ServiceAreas() {
  return (
    <section className="service-areas" aria-labelledby="service-areas-title">
      <div className="container">
        <div className="service-areas-card" data-reveal>
          <div className="service-areas-copy">
            <span className="service-areas-badge">Här kör vi</span>
            <h2 id="service-areas-title">Körlektioner i Järfälla, Jakobsberg och nordvästra Stockholm</h2>
            <p>
              Proffs Trafikskola är en trafikskola i Järfälla. Vi utgår från {business.street}, mellan
              Jakobsberg och Barkarby, och kör med elever i hela närområdet.
            </p>
            <p>
              Söker du en trafikskola i Jakobsberg ligger vi nära dig. Oavsett om du bor i Jakobsberg,
              Kista eller Sollentuna kan du ta körlektioner, gå intensivkurs, läsa körkortsteori och gå
              Riskettan och Risktvåan hos oss.
            </p>
            <ul className="service-areas-links" aria-label="Utbildningar i Järfälla och Jakobsberg">
              <li><Link href="/intensivkurs/">Intensivkurs i Järfälla</Link></li>
              <li><Link href="/korlektioner/">Körlektioner i Järfälla</Link></li>
              <li><Link href="/riskettan/">Riskettan i Järfälla</Link></li>
              <li><Link href="/risktvaan/">Risktvåan i Järfälla</Link></li>
              <li><Link href="/teori/">Körkortsteori på flera språk</Link></li>
            </ul>
            <div className="button-group">
              <Button href="/kontakt">Kontakta oss</Button>
              <TextLink href="/priser">Se priser</TextLink>
            </div>
          </div>
          <div className="service-areas-list">
            <h3>Områden vi kör i</h3>
            <AreaChips />
          </div>
        </div>
      </div>
    </section>
  );
}
export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-link">
      {children}
      <ArrowUpRight size={19} aria-hidden="true" />
    </Link>
  );
}
export function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav className="breadcrumbs container" aria-label="Brödsmulor">
      <Link href="/">Start</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{title}</span>
    </nav>
  );
}
export function PriceList({ items }: { items: Price[] }) {
  return (
    <div className="price-list">
      {items.map((p) => (
        <div className="price-row" key={p.name}>
          <div>
            <h3>{p.name}</h3>
            <p>{p.detail}</p>
          </div>
          <strong>{money(p.price)}</strong>
        </div>
      ))}
    </div>
  );
}
export function FAQ({ items = faqs }: { items?: typeof faqs }) {
  return (
    <section className="section container faq-section" data-reveal>
      <div>
        <span className="eyebrow">Vanliga frågor</span>
        <h2>
          Lite klarare.
          <br />
          Lite närmare.
        </h2>
        <p>Har du fler frågor? Vi hjälper dig gärna.</p>
        <TextLink href="/kontakt">Prata med oss</TextLink>
      </div>
      <div className="faq-list">
        {items.map((f) => (
          <details key={f.q}>
            <summary>
              {f.q}
              <span aria-hidden="true">+</span>
            </summary>
            {f.a.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </details>
        ))}
      </div>
    </section>
  );
}
export function CourseGrid() {
  return (
    <div className="course-grid">
      {courses.map((c, i) => (
        <Link className="course-card" href={`/${c.slug}`} key={c.slug} data-reveal>
          <Photo name={c.image} />
          <div className="course-copy">
            <span className="course-type">
              {i === 0
                ? 'Riskutbildning, del 1'
                : i === 1
                  ? 'Riskutbildning, del 2'
                  : 'Privat övningskörning'}
            </span>
            <h3>
              {c.name}
              <ArrowUpRight size={25} />
            </h3>
            <p>{c.description}</p>
            <span className="course-bottom">
              {c.slug === 'handledarkurs' ? 'Se aktuella regler' : `${money(c.price)} · Läs mer`}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function Timeline({ full = false }: { full?: boolean }) {
  return (
    <ol className={`timeline ${full ? 'timeline-full' : ''}`}>
      {(full
        ? steps
        : [
            steps[0],
            {
              name: 'Lär dig, i din takt',
              text: 'Kombinera körlektioner och teori. Bygg trygghet och genomför din riskutbildning.',
            },
            steps[5],
          ]
      ).map((s, i) => (
        <li key={s.name} data-reveal>
          <span className="step-number">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s.name}</h3>
          {s.text.split('\n\n').map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </li>
      ))}
    </ol>
  );
}
export function TrustStrip() {
  return (
    <div className="trust-strip container">
      <span>
        <SteeringWheel size={23} />
        Automat & manuell
      </span>
      <span>
        <BookOpen size={23} />
        Undervisning på flera språk
      </span>
      <span>
        <MapPin size={23} />
        Jakobsberg · Järfälla · Barkarby
      </span>
    </div>
  );
}
export function Location() {
  const mapEmbed =
    `https://www.google.com/maps?cid=${business.mapsCid}&hl=sv&output=embed`;
  return (
    <section className="container section location" data-reveal>
      <div className="location-map">
        <iframe
          src={mapEmbed}
          title="Proffs Trafikskola på Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="location-copy">
        <span className="eyebrow">Din lokala trafikskola</span>
        <h2>
          Nära dig.
          <br />
          Nära nästa steg.
        </h2>
        <p>Du hittar oss mellan Jakobsberg och Barkarby. Kom förbi och prata körkort med oss.</p>
        <address>
          {business.street}
          <br />
          {business.postal} {business.city}
        </address>
        <dl className="hours">
          {business.hours.map(([day, time]) => (
            <div key={day}>
              <dt>{day}</dt>
              <dd>{time}</dd>
            </div>
          ))}
        </dl>
        <p className="small">Körtider: {business.drivingHours.toLowerCase()}</p>
        <TextLink href={business.map}>Hitta till oss</TextLink>
      </div>
    </section>
  );
}
export function BookingCTA() {
  return (
    <section className="container final-cta" data-reveal>
      <div className="cta-road" aria-hidden="true">
        <RoadHorizon size={78} weight="thin" />
      </div>
      <h2>
        Ta första steget.
        <br />
        Vi tar nästa tillsammans.
      </h2>
      <p>Boka en kurs eller låt oss planera din första körlektion.</p>
      <div className="button-group">
        <Button>Hitta din utbildning</Button>
        <a className="text-link" href={`tel:${business.tel}`}>
          <Phone size={19} />
          {business.phone}
        </a>
      </div>
    </section>
  );
}
export function PackageCard({
  name,
  price,
  count,
  intensive = false,
  duration,
}: {
  name: string;
  price: number;
  count: number;
  intensive?: boolean;
  duration?: string;
}) {
  return (
    <article className="package-card" data-reveal>
      <div className="package-top">
        <h3>{name}</h3>
        {duration && <span>{duration}</span>}
      </div>
      <div className="package-price">{money(price)}</div>
      <ul>
        <li>
          <Check size={17} />
          {count} körlektioner
        </li>
        <li>
          <Check size={17} />
          {intensive ? 'Riskettan & Risktvåan' : 'Riskettan'}
        </li>
        <li>
          <Check size={17} />
          Teori online, svenska/engelska
        </li>
      </ul>
      <Button href={business.shop}>
        {intensive ? 'BOKA NU' : 'Se i e-handeln'}
      </Button>
    </article>
  );
}
