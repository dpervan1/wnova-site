import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wnova.cc"),
  title: {
    default: "WEBNOVA | Izrada web stranica, webshopova i digitalni marketing",
    template: "%s | WEBNOVA",
  },
  description:
    "WEBNOVA izrađuje web stranice, webshopove i digitalne kampanje za firme koje žele ozbiljniji online nastup, više upita i bolju vidljivost.",
  applicationName: "WEBNOVA",
  authors: [{ name: "WEBNOVA", url: "https://wnova.cc" }],
  creator: "WEBNOVA",
  publisher: "WEBNOVA",
  category: "technology",
  referrer: "origin-when-cross-origin",
  keywords: [
    "WEBNOVA",
    "izrada web stranica",
    "izrada webshopa",
    "izrada webshopova",
    "AI integracije",
    "digitalni marketing",
    "SEO optimizacija",
    "Google Ads",
    "Meta oglasi",
    "web dizajn Hrvatska",
    "izrada web stranica Hrvatska",
    "izrada online trgovine",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "any" },
      { url: "/brand/wnova-icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "WEBNOVA | Izrada web stranica, webshopova i digitalni marketing",
    description:
      "WEBNOVA izrađuje web stranice, webshopove i digitalne kampanje za firme koje žele ozbiljniji online nastup.",
    url: "https://wnova.cc",
    siteName: "WEBNOVA",
    locale: "hr_HR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WEBNOVA social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBNOVA | Izrada web stranica i webshopova",
    description:
      "Izrada web stranica, webshopova i digitalni marketing za firme koje žele više upita i bolju vidljivost.",
    images: ["/twitter-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f1a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
