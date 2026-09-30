import './globals.css';

export const metadata = {
  metadataBase: new URL('https://girjadryfruitsandspices.com'),
  title: {
    default: 'Girja Dry Fruits & Spices | Premium Indian Spices & Royal Dry Fruits Exporter',
    template: '%s | Girja Dry Fruits & Spices',
  },
  description:
    'Girja Dry Fruits & Spices is an APEDA & FSSAI certified Indian exporter and wholesale supplier of authentic single-origin spices, Guntur & Byadgi red chillies, Salem turmeric, Tellicherry black pepper, Royal Mamra almonds, and Kashmiri walnuts. Sourced directly from regional farming origins for global ocean and air consignments.',
  keywords: [
    // Brand & Domain
    'Girja Dry Fruits & Spices',
    'girjadryfruitsandspices.com',
    'Girja Dry Fruits and Spices',
    'Girija Spices',
    // Global Spices Export
    'Indian spices exporter',
    'Indian spices wholesale supplier',
    'bulk spices supplier India',
    'APEDA certified spices exporter',
    'Indian spices CIF rates Dubai USA Europe',
    'Guntur S17 red chilli exporter',
    'Byadgi chilli wholesale supplier',
    'Kashmiri red chilli exporter',
    'Salem turmeric finger supplier India',
    'high curcumin turmeric wholesale',
    'Tellicherry black pepper TGSEB exporter',
    'Indian green cardamom whole supplier',
    'Fennel seeds exporter India',
    'Mace supplier Kerala',
    'Star anise exporter',
    'single origin pure Indian spices',
    'organic spices exporter India',
    // Global Dry Fruits Export
    'Indian dry fruits exporter',
    'royal dry fruits wholesale supplier',
    'Mamra almonds wholesale India',
    'Kashmiri Mamra almonds exporter',
    'Gurbandi almond kernels supplier',
    'Kashmiri walnut kernels exporter',
    'Kagzi paper-shell walnut wholesale',
    'Afghan green raisins supplier',
    'black seedless raisins exporter India',
    'golden raisins wholesale India',
    'Jumbo seeded raisins supplier India',
    'Sultanas raisins exporter India',
    'Black currants wholesale exporter',
    // Trade, Logistics & Compliance
    'APMC Navi Mumbai spice export terminal',
    'FSSAI certified food exporter India',
    'ISO 22000 quality spices supplier',
    'DGFT IEC registered Indian exporter',
    'phytosanitary certified spice export',
    'bulk commodity export container loads',
    'Indian spices importer UAE UK Europe America Australia',
  ],
  authors: [{ name: 'Girja Dry Fruits & Spices', url: 'https://girjadryfruitsandspices.com' }],
  creator: 'Girja Dry Fruits & Spices',
  publisher: 'Girja Dry Fruits & Spices',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://girjadryfruitsandspices.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://girjadryfruitsandspices.com',
    siteName: 'Girja Dry Fruits & Spices',
    title: 'Girja Dry Fruits & Spices | Sovereign Grade Indian Spices & Royal Dry Fruits Exporter',
    description:
      'Direct estate-sourced Indian spices and royal dry fruits from regional farming hubs. APEDA & FSSAI certified global consignments for international importers and distributors.',
    images: [
      {
        url: '/bannerH.jpg',
        width: 1200,
        height: 630,
        alt: 'Girja Dry Fruits & Spices - Premium Indian Spices & Royal Dry Fruits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girja Dry Fruits & Spices | Indian Spices & Dry Fruits Exporter',
    description:
      'Direct origin-sourced Indian spices and royal dry fruits. APEDA & FSSAI certified export consignments shipped worldwide.',
    images: ['/bannerH.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  category: 'Food & Commodity Export',
};

export default function RootLayout({ children }) {
  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Girja Dry Fruits & Spices',
    alternateName: ['Girja Dry Fruits & Spices', 'Girja Export House'],
    url: 'https://girjadryfruitsandspices.com',
    logo: 'https://girjadryfruitsandspices.com/logo.png',
    image: 'https://girjadryfruitsandspices.com/bannerH.jpg',
    description:
      'Leading Indian exporter and wholesale supplier of authentic single-origin spices, Guntur & Byadgi red chillies, Salem turmeric, Tellicherry black pepper, Royal Mamra almonds, and Kashmiri walnuts.',
    telephone: '+91-8860723545',
    email: 'Shahi.pradeep5@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'APMC Market-I, Phase-2',
      addressLocality: 'Navi Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400703',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.0760',
      longitude: '73.0075',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'APEDA Registration',
        credentialCategory: 'Export Authority Registry',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'FSSAI Certification',
        credentialCategory: 'Food Safety & Quality Standard',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 22000',
        credentialCategory: 'Food Safety Management Systems',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'DGFT IEC Registration',
        credentialCategory: 'Directorate General of Foreign Trade Import-Export Code',
      },
    ],
    knowsAbout: [
      'Guntur Red Chillies Export',
      'Byadgi Chilli Export',
      'Salem Turmeric Fingers Export',
      'Tellicherry Black Pepper Export',
      'Mamra Almonds Wholesale',
      'Kashmiri Kagzi Walnuts Export',
      'CIF and FOB Export Documentation',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-8860723545',
        contactType: 'international export sales desk',
        areaServed: ['AE', 'US', 'GB', 'EU', 'SA', 'AU', 'IN', 'SG', 'CA'],
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  };

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Girja Dry Fruits & Spices',
    url: 'https://girjadryfruitsandspices.com',
    description:
      'Wholesale Indian spices and royal harvest dry fruits export catalog from APMC Navi Mumbai.',
    publisher: {
      '@type': 'Organization',
      name: 'Girja Dry Fruits & Spices',
      logo: {
        '@type': 'ImageObject',
        url: 'https://girjadryfruitsandspices.com/logo.png',
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="canonical" href="https://girjadryfruitsandspices.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data / JSON-LD for Google Search & International SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="bg-background font-body text-on-surface antialiased selection:bg-primary-container/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
