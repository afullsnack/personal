import type { AppType } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";
import { Toaster } from "~/components/ui/sonner";
import { MainLayout } from "~/components/main-layout";
import { Twitter } from "lucide-react";
import { ThemeToggle } from "~/components/ui/theme-toggle";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>

      <ThemeProvider attribute="class" defaultTheme="system" forcedTheme="dark">
        <MainLayout>
          <Component {...pageProps} />
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
      <Toaster expand={false} position="bottom-center" richColors closeButton />
    </>
  );
};

export default MyApp;
