import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "ContaCerta - Escritório Contábil | Diagnóstico Gratuito",
  description: "Descubra como podemos otimizar sua gestão contábil com nosso diagnóstico personalizado. Economize tempo e dinheiro com soluções especializadas.",
  keywords: ['contabilidade', 'digital', 'fiscal', 'tributário', 'DPO', 'LGPD'],
  authors: [{ name: 'Contacerta' }],
  creator: 'Contacerta',
  publisher: 'Contacerta',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-sans antialiased relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" suppressHydrationWarning>
        <div className="relative z-10 outline outline-4 outline-accent rounded-3xl shadow-[0_0_0_4px_#0ff,0_0_16px_4px_#0ff,0_0_32px_8px_#f0f] transition-shadow duration-300">
          {children}
        </div>
      </body>
    </html>
  );
}
