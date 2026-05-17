import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "SwissCapital.news",
    template: "%s | SwissCapital.news",
  },
  description: "Intelligence on capital, technology, and global systems.",
  metadataBase: new URL("https://swisscapital.news"),
  openGraph: {
    title: "SwissCapital.news",
    description: "Intelligence on capital, technology, and global systems.",
    siteName: "SwissCapital.news",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwissCapital.news",
    description: "Intelligence on capital, technology, and global systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${ibmPlexSans.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{const t=localStorage.getItem('swisscapital-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-full bg-background text-ink">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(120,120,120,0.1),_transparent_48%)]" />
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 md:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
