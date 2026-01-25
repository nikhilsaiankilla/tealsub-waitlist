import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://tealsub.com"),
  title: {
    default: "Email newsletters for writers — not marketers",
    template: "%s | Tealsub"
  },
  description:
    "A minimal email newsletter tool for writers and developers. Collect subscribers and send emails without marketing automation.",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    siteName: "tealsub",
    title: "Simple email newsletters for writers",
    description:
      "Turn blog readers into email subscribers. No funnels. No CRM. Just writing.",
    url: "https://tealsub.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Email for writers, not marketers",
    description:
      "A simple newsletter tool without marketing nonsense."
  }
}

export const heroFont = localFont({
  src: "./fonts/PlayfairDisplay-Black.woff2",
  variable: "--font-playfair-display",
});

export const headingFont = localFont({
  src: "./fonts/Montserrat-Bold.woff2",
  variable: "--font-montserrat",
});

export const bodyFont = localFont({
  src: "./fonts/Inter-Regular.woff2",
  variable: "--font-inter-regular",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heroFont.variable} ${bodyFont.variable} ${headingFont.className} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
