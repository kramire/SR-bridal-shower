
import type { Metadata } from "next";
import { Martel, Nothing_You_Could_Do } from "next/font/google";
import "./globals.css";

const martel = Martel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-martel",
  display: "swap",
});

const handwritten = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-handwritten",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bridal Shower Invitation",
  description: "A special celebration in Westfield, New Jersey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${martel.className} ${martel.variable} ${handwritten.variable}`}>
        {children}
      </body>
    </html>
  );
}
