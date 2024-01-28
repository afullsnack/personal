import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { MainLayout } from "~/components/main-layout";
import { ThemeProvider } from "~/components/theme-provider";
import { Twitter } from "lucide-react";

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
          disableTransitionOnChange
        >
          <MainLayout>
            {children}
            <footer className="grid gap-2 sm:flex items-center justify-center sm:gap-4 p-8 border-t-[.2px] border-gray-400/40">
              <div className="flex gap-2 text-xs">
                Proudly built by <a href="https://twitter.com/afullsnack" className="text-[#FF4A01] flex items-center gap-1"><Twitter color="#FF4A01" className="h-3 w-3" /> afullsnack</a>
              </div>
            </footer>
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
