// import { Button } from "~/components/ui/button";
// import { ThemeToggle } from "~/components/ui/theme-toggle";

import { Button } from "~/components/ui/button";
import { Copy } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-950 to-zinc-900 text-white">
      <div className="container flex flex-col items-start justify-start gap-3 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        {/* <div className="w-full border border-red-400 p-8"></div> */}
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-[3rem]">
            About Miracle (<span className="text-[#FF4A01]">afsnk</span>)
          </h1>
          <span>Crafting software goodness</span>
        </div>
        <div></div>
        <div className="flex items-center justify-start gap-4">
          <Button variant="outline">Hire me</Button>
          <Button variant="secondary" className="gap-2">
            <Copy className="h-4 w-4" /> E-mail
          </Button>
        </div>
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div> */}
        {/* <Button variant="secondary" className="hover:text-[#]">
          Click me for good luck
        </Button>
        <ThemeToggle /> */}
      </div>
    </main>
  );
}
