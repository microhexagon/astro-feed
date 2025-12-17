// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

// ✅ Complete Metadata with Favicon
export const metadata: Metadata = {
  // Title Configuration
  title: {
    default: "AstroFeed - Explore the Cosmos",
    template: "%s | AstroFeed", // Other pages will show as "Contact | AstroFeed"
  },
  
  // Description for SEO
  description: "Your gateway to the wonders of space exploration. Discover the latest astronomy news, breathtaking images, and upcoming launch schedules.",
  
  // Keywords for SEO
  keywords: [
    "astronomy",
    "space exploration",
    "NASA",
    "SpaceX",
    "rocket launches",
    "APOD",
    "space news",
    "cosmos",
    "universe",
    "astronomy pictures"
  ],
  
  // Authors
  authors: [{ name: "AstroFeed Team" }],
  creator: "AstroFeed",
  publisher: "AstroFeed",
  
  // ✅ Favicon Configuration
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon.png",
    },
  },

  // Open Graph for Social Media (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://astrofeed.com",
    siteName: "AstroFeed",
    title: "AstroFeed - Explore the Cosmos",
    description: "Your gateway to the wonders of space exploration. Discover astronomy news, images, and launches.",
    images: [
      {
        url: "/assets/herosection-bg.png",
        width: 1200,
        height: 630,
        alt: "AstroFeed - Space Exploration",
      },
    ],
  },

  // Twitter Card Configuration
  twitter: {
    card: "summary_large_image",
    title: "AstroFeed - Explore the Cosmos",
    description: "Your gateway to the wonders of space exploration",
    images: ["/assets/herosection-bg.png"],
    creator: "@astrofeed",
  },

  // Robots Configuration for SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification codes (optional - jab deploy karo tab use)
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="text-[#a0aec0] min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
