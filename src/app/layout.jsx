import './globals.css';

export const metadata = {
  title: 'Girja Dry Fruits & Spices | Meva aur Masale',
  description: 'Pure & Trusted • Meva Aur Masale — Handpicked Whole Spices, Fiery Chillies, Royal Harvest Mamra Badam, and Kashmiri Walnuts directly sourced from origin.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className="bg-background font-body text-on-surface antialiased selection:bg-primary-container/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
