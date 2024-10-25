import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import "./globals.css";
import "katex/dist/katex.min.css";
import { cn } from "@/lib/utils";
import { NavRoute } from "@/components/navRoute";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mono vs. Dardo",
  description: "Demostración interactiva del problema de tiro parabólico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`
        )}
      >
        <main className="flex flex-col h-screen [&:not(:first-child)]:m-4">
          <nav className="flex items-center w-full min-h- top-0 px-6 my-2 backdrop-blur-sm justify-around">
            <NavRoute href={"/"}>Inicio</NavRoute>
            <NavRoute href={"simulation"}>Simulación</NavRoute>
            <NavRoute href={"explanation"}>Explicación</NavRoute>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
