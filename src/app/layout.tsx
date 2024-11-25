import { NavRoute } from "@/components/navRoute";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Proyectos de física",
  description: "Culerísimos proyectos de física hermano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex h-screen flex-col">
            <nav className="top-0 my-2 flex w-full items-center justify-around px-6 backdrop-blur-sm">
              <NavRoute href={"/"}>Inicio</NavRoute>
              <NavRoute href={"/chango"}>Chango</NavRoute>
              <NavRoute href={"/periscope"}>Periscopio</NavRoute>
              <ModeToggle />
            </nav>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
