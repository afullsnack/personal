// import { Button } from "~/components/ui/button";
// import { ThemeToggle } from "~/components/ui/theme-toggle";

import { Button } from "~/components/ui/button";
import { Copy } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-950 to-zinc-900 text-white">
      <div className="container flex flex-col items-start justify-start gap-3 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        {/* <div className="w-full border border-red-400 p-8"></div> */}
        <div className="grid gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-[3rem]">
            About Miracle (<a href="https://afsnk.sh" className="text-[#FF4A01]">afsnk</a>)
          </h1>
          <span>Crafting software goodness, product development, bitcoin enthusiast</span>
        </div>
        <div className="grid gap-3">
          
        </div>
        <div className="flex items-center justify-start gap-4">
          <Button variant="outline">Hire me</Button>
          <Button variant="secondary" className="gap-2">
            <Copy className="h-4 w-4" /> E-mail
          </Button>
        </div>
      </div>
    </main>
  );
}
