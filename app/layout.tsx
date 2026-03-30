import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["700", "800"] });

export const metadata: Metadata = {
  title: "Gauge's All Season Services | Northern Michigan Lawn & Snow",
  description:
    "Serving Lakes of the North and Lake Arrowhead associations. Lawn care, spring & fall cleanups, snow blowing and shoveling. Call or text for a free estimate!",
  metadataBase: new URL("https://gaugesallseason.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
