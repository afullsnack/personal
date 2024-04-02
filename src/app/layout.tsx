import "~/styles/globals.css";
import "@code-hike/mdx/dist/index.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Twitter } from "lucide-react";
import { Inter } from "next/font/google";
import { MainLayout } from "~/components/main-layout";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/sonner";
import { ThemeToggle } from "~/components/ui/theme-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "afullsnack.dev",
  description: "afullsnack | portfolio page",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <MainLayout>
            {children}
            <footer className="grid place-items-center items-center justify-center gap-3 border-t-[.2px] border-gray-800/40 p-8 dark:border-gray-400/40 sm:flex sm:gap-4">
              <div className="flex gap-2 text-xs">
                Proudly built by{" "}
                <a
                  href="https://twitter.com/afullsnack"
                  className="flex items-center gap-1 text-[#FF4A01]"
                >
                  <Twitter color="#FF4A01" className="h-3 w-3" /> afullsnack
                </a>
              </div>
              <ThemeToggle />
            </footer>
          </MainLayout>
        </ThemeProvider>
        <Toaster
          expand={false}
          position="bottom-center"
          richColors
          closeButton
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
