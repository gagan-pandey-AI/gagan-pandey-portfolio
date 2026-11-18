import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/MotionProvider";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Gagan Pandey — Web Developer & AI Enthusiast",
    template: "%s | Gagan Pandey",
  },
  description:
    "Gagan Pandey is a web developer and AI enthusiast building thoughtful websites, AI-powered applications, and modern digital experiences.",
  applicationName: "Gagan Pandey Portfolio",
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  openGraph: {
    title: "Gagan Pandey — Web Developer & AI Enthusiast",
    description:
      "Thoughtful web development and AI-powered digital experiences by Gagan Pandey.",
    type: "website",
    siteName: "Gagan Pandey",
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary",
    title: "Gagan Pandey — Web Developer & AI Enthusiast",
    description:
      "Thoughtful web development and AI-powered digital experiences by Gagan Pandey.",
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
};

export const viewport: Viewport = {
  themeColor: "#070910",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personId = siteUrl ? `${siteUrl}/#person` : "#person";
  const websiteId = siteUrl ? `${siteUrl}/#website` : "#website";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Gagan Pandey",
        jobTitle: "Web Developer & AI Enthusiast",
        email: "mastimotionanime@gmail.com",
        sameAs: [
          "https://linkedin.com/in/gagan-pandey-420b213b1",
          "https://github.com/gagan-pandey-AI",
        ],
        ...(siteUrl ? { url: siteUrl } : {}),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "Gagan Pandey",
        description:
          "Portfolio of Gagan Pandey, a web developer and AI enthusiast.",
        inLanguage: "en",
        ...(siteUrl ? { url: siteUrl } : {}),
        publisher: { "@id": personId },
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
