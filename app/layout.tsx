import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import QueryWrapper from "@/components/QueryWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dr. Javier del Rosario - Urólogo en Panamá",
    template: "%s | Dr. Javier del Rosario"
  },
  description: "Especialista en urología con más de 15 años de experiencia. Consultas médicas, cirugías urológicas y tratamientos especializados en Panamá.",
  keywords: ["urólogo", "urología", "Panamá", "Dr. Javier del Rosario", "especialista", "medicina"],
  authors: [{ name: "Dr. Javier del Rosario" }],
  creator: "Dr. Javier del Rosario",
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: "https://drdelrosario.com",
    title: "Dr. Javier del Rosario - Urólogo en Panamá",
    description: "Especialista en urología con más de 15 años de experiencia en Panamá.",
    siteName: "Dr. Javier del Rosario",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Javier del Rosario - Urólogo en Panamá",
    description: "Especialista en urología con más de 15 años de experiencia en Panamá.",
  },
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
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preload" href="/logo-desktop.png" as="image" type="image/png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* <QueryWrapper> */}
          <LanguageProvider>
            {/* <TooltipProvider> */}
              <div className="min-h-screen flex flex-col">
                {children}
                {/* <Footer /> */}
              </div>
              {/* <Toaster />
              <Sonner /> */}
            {/* </TooltipProvider> */}
          </LanguageProvider>
        {/* </QueryWrapper> */}
      </body>
    </html>
  );
}