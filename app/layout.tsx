import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

// Improved font loading for better UX (swap for faster text rendering)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Colour Green",
  description: "Discover a new era of sustainable style. Uniqueness, vibrance, and eco-conscious design.",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e6f9e0" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1a0a" },
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

function AccessibilityAnnouncer() {
  // For screen reader route change announcements (improved accessibility)
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      id="route-announcer"
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon and theme color for better PWA/UX */}
        <meta name="theme-color" content="#e6f9e0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
          antialiased
          bg-gradient-to-br from-white via-green-50 to-green-100
          dark:from-black dark:via-gray-900 dark:to-green-950
          min-h-screen
          text-gray-900 dark:text-gray-100
          transition-colors duration-300
          selection:bg-green-200 selection:text-green-900
        `}
        tabIndex={0}
      >
        {/* Accessibility live region */}
        <AccessibilityAnnouncer />
        {/* Skip to content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-green-600 text-white px-4 py-2 rounded transition"
        >
          Skip to main content
        </a>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        {/* Subtle page fade-in animation */}
        <style jsx global>{`
          body {
            animation: fadeInBody 0.7s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fadeInBody {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </body>
    </html>
  );
}
