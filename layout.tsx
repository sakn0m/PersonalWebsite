import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

// 1. Configure the beautiful serif font
const garamond = EB_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Regular, Medium, Semi-bold
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
    <html lang="en">
      <body className={`${garamond.variable} font-serif antialiased bg-[#fffff] text-neutral-900 selection:bg-neutral-200 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
