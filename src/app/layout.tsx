import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ContaCerta - Escritório Contábil | Diagnóstico Gratuito",
  description: "Descubra como podemos otimizar sua gestão contábil com nosso diagnóstico personalizado. Economize tempo e dinheiro com soluções especializadas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
        <div className="relative z-10 outline outline-4 outline-accent rounded-3xl shadow-[0_0_0_4px_#0ff,0_0_16px_4px_#0ff,0_0_32px_8px_#f0f] transition-shadow duration-300">
          {children}
        </div>
      </body>
    </html>
  );
}
