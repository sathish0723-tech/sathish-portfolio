import type { Metadata } from "next";
import { Space_Grotesk, Lora } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sathish Designs & Builds",
  description: "Portfolio of Sathish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
