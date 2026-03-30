import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["600", "700", "800"] });

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
      <body className={`${inter.variable} ${poppins.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
