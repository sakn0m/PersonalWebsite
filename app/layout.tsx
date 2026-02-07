import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  title: "Giorgio Vanini | Data Analyst",
  description: "Portfolio of Giorgio Vanini, a Data Analyst based in Italy.",
  openGraph: {
    title: "Giorgio Vanini | Data Analyst",
    description: "Portfolio of Giorgio Vanini, a Data Analyst based in Italy.",
    url: "https://giorgiovanini.eu",
    siteName: "Giorgio Vanini",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giorgio Vanini | Data Analyst",
    description: "Portfolio of Giorgio Vanini, a Data Analyst based in Italy.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${garamond.variable} font-serif antialiased transition-colors duration-500`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}