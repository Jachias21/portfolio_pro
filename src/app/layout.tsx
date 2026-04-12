import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio — Joan Albert Chías",
  description: "Full-stack & mobile engineer based in Barcelona. Specialized in Kotlin, Spring Boot, Flutter, and AI. Available for hire.",
  openGraph: {
    title: "Joan Albert Chías — Software Developer",
    description: "Full-stack & mobile engineer based in Barcelona. Available for hire.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'var(--font-body)', background: 'var(--bg)' }}>
        {children}
      </body>
    </html>
  );
}
