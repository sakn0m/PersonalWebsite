import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giorgiovanini.eu"),
  title: "Giorgio Vanini | Data Analyst",
  description: "Portfolio of Giorgio Vanini, a Data Analyst based in Italy.",
  keywords: [
    "Giorgio Vanini",
    "Data Analyst",
    "Portfolio",
    "Python",
    "Machine Learning",
    "Statistics",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Giorgio Vanini | Data Analyst",
    description: "Portfolio of Giorgio Vanini, a Data Analyst based in Italy.",
    url: "https://giorgiovanini.eu",
    siteName: "Giorgio Vanini",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Giorgio Vanini — Data Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giorgio Vanini | Data Analyst",
    description: "Portfolio of Giorgio Vanini, a Data Analyst based in Italy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      <body className={`${garamond.variable} font-serif`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}