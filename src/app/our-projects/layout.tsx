import type { Metadata } from "next";
import "../globals.css";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Projects",
    template: "%s | WebFlexrr Digital Services",
  },
  description: "This is projects Page of Webflexrr Digital Services",
};

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
};
export default RootLayout;
