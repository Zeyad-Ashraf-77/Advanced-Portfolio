import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Zeyad Ashraf — Full Stack Developer",
  description: "Full Stack Developer based in Cairo, Egypt. Specializing in React, Next.js, Node.js,Nest.js, and MongoDB.",
  authors: [{ name: "Zeyad Ashraf" }],
  icons: {
    icon: "/Meta Image.jpeg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="noise-texture" />
          <div className="grid-bg fixed inset-0 pointer-events-none z-0" />
          <CustomCursor />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
