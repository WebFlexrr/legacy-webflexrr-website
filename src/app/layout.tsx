import type { Metadata } from "next";
import "./globals.css";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default:
      "WebFlexrr Digital Services | Empowering Businesses with Web Development, Digital Marketing, SEO, and Creative Graphic Designing Solutions",
    template: "%s | WebFlexrr Digital Services",
  },
  description:
    "WebFlexrr Digital Services: Elevate your online presence with WebFlexrr's Web Development and Digital Marketing strategies. Specializing in E-commerce Solutions, Responsive Design, SEO, and more for impactful, custom web solutions. Learn more....",
  metadataBase: new URL("https://www.webflexrr.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  verification: {
    google: process.env.GOOGLE_CONSOLE_VID,
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "WebFlexrr Web Development",
    "WebFlexrr Digital Services",
    "WebFlexrr SEO Solutions",
    "E-commerce Solutions by WebFlexrr",
    "Graphic Design by WebFlexrr",
    "WebFlexrr SEO Experts",
    "Responsive WebFlexrr Design",
    "Web Development",
    "Digital Marketing",
    "Website Design",
    "SEO Services",
    "Social Media Marketing",
    "Online Presence",
    "E-commerce Solutions",
    "Responsive Design",
    "Content Marketing",
    "Branding Services",
    "Mobile App Development",
    "Search Engine Optimization",
    "Graphic Design",
    "Web Analytics",
    "User Experience (UX) Design",
    "Conversion Optimization",
    "Digital Strategy",
    "Custom Web Solutions",
    "Internet Marketing",
  ],
  authors: { name: "WebFlexrr" },
  creator: "Tech Team of WebFlexrr",
  publisher: "WebFlexrr Digital Services",
  openGraph: {
    title: "WebFlexrr Digital Services",
    description:
      "WebFlexrr Digital Services | Empowering Your Online Presence with Expert Web Development and Strategic Digital Marketing Solutions",
    url: "https://www.webflexrr.com",
    siteName: "WebFlexrr Digital Services",
    images: [
      {
        url: "/assets/logo2.png",
        width: 1800,
        height: 1600,
        alt: "WebFlexrr",
      },
    ],
    type: "website",
  },
};

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
