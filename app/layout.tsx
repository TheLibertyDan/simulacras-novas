import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://simulacras-novas.com";
const TITLE = "Simulacras Novas — The world's deepest political compass";
const DESCRIPTION =
  "Not left vs right. Simulacras Novas plots you on eight philosophical axes about what politics actually IS — truth, human nature, the nature of politics, scope, unit, order, authority, and the arc of history. 55 historical thinkers to compare against. Take the test.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Simulacras Novas",
    locale: "en_US",
    type: "website",
    // `app/opengraph-image.tsx` is auto-detected and served at /opengraph-image
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
