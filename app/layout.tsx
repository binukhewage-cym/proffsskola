import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Motion from '@/components/motion';
import Schema from '@/components/schema';
import { business } from '@/lib/data';
import { localBusiness } from '@/lib/seo';
import './globals.css';
const display = localFont({
  src: '../public/fonts/manrope-latin-wght-normal.woff2',
  variable: '--font-display',
  display: 'swap',
});
const body = localFont({
  src: '../public/fonts/dm-sans-latin-wght-normal.woff2',
  variable: '--font-body',
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: 'Proffs Trafikskola i Järfälla & Jakobsberg',
    template: '%s | Proffs Trafikskola',
  },
  description:
    'Körlektioner, intensivkurser och riskutbildning i Järfälla. Automat och manuell bil hos Proffs Trafikskola. Boka din utbildning.',
  applicationName: business.name,
  authors: [{ name: business.name, url: business.url }],
  creator: business.name,
  publisher: business.name,
  alternates: {
    canonical: business.url,
    languages: {
      'sv-SE': business.url,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: business.url,
    siteName: business.name,
    title: 'Proffs Trafikskola i Järfälla & Jakobsberg',
    description:
      'Körlektioner, intensivkurser, teori och riskutbildning för B-körkort i Järfälla.',
    images: [
      {
        url: '/images/proffs-car.jpg',
        width: 1200,
        height: 896,
        alt: 'Proffs Trafikskolas utbildningsbil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proffs Trafikskola i Järfälla & Jakobsberg',
    description:
      'Körlektioner, intensivkurser, teori och riskutbildning för B-körkort i Järfälla.',
    images: ['/images/proffs-car.jpg'],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Hoppa till innehållet
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
        <Schema
          data={[
            localBusiness,
            {
              '@type': 'WebSite',
              '@id': `${business.url}/#website`,
              url: business.url,
              name: business.name,
              description: business.description,
              inLanguage: 'sv-SE',
              publisher: { '@id': `${business.url}/#school` },
            },
          ]}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WHY4TF6M8X"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WHY4TF6M8X');
          `}
        </Script>
      </body>
    </html>
  );
}
