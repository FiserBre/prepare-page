import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://fiserbretislav.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pssst, něco se chystá — fiserbretislav",
  description: "Webová agentura fiserbretislav. Nový web se právě staví.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    title: "Pssst, něco se chystá — fiserbretislav",
    description: "Webová agentura fiserbretislav. Nový web se právě staví.",
    images: ["/og.svg"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#F4F1E9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
