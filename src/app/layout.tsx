import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Transports Even | Transport routier depuis 1966", template: "%s | Transports Even" },
  description: "Transports Even : entreprise familiale de transport routier basée à Ell, Luxembourg, depuis 1966.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
