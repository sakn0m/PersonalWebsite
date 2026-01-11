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
  title: "Your Name",
  description: "Personal business card.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${garamond.variable} font-serif antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 transition-colors duration-300`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}