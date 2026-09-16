import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankit Kumar | AR/VR Engineer & Full-Stack Developer",
  description:
    "Portfolio of Ankit Kumar — AR/VR Engineer and Software Developer building immersive AR/VR experiences, interactive applications, full-stack web systems and data solutions.",
  keywords: [
    "Ankit Kumar",
    "AR/VR Engineer",
    "Full-Stack Developer",
    "Interactive Experience",
    "Computer Vision",
    "Unity",
    "WebAR",
    "React",
    "Node.js",
    "Greater Noida",
  ],
  authors: [{ name: "Ankit Kumar", url: "https://github.com/Ankit187Kumar" }],
  openGraph: {
    title: "Ankit Kumar | AR/VR Engineer & Full-Stack Developer",
    description:
      "Building immersive AR/VR experiences, interactive applications, full-stack web systems and data solutions.",
    url: "https://ankitkumar.dev",
    siteName: "Ankit Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Kumar | AR/VR Engineer & Full-Stack Developer",
    description:
      "Building immersive AR/VR experiences, interactive applications, full-stack web systems and data solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#f8fafc" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
