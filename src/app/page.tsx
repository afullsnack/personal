// import { Button } from "~/components/ui/button";
// import { ThemeToggle } from "~/components/ui/theme-toggle";

import { Button } from "~/components/ui/button";
import { Copy } from "lucide-react";
import Link from "next/link";
import { SubMailList } from "~/components/ui/sub-mail-list";
import { SiBitcoin } from "react-icons/si";

import CalcomHireButton from "~/components/ui/calcom-hire-button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-950 to-zinc-900 text-white">
      <div className="container flex flex-col items-start justify-start gap-4 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        {/* <div className="w-full border border-red-400 p-8"></div> */}
        <div className="grid gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-[3rem]">
            About Miracle (
            <a href="https://afsnk.sh" className="text-[#FF4A01]">
              afsnk
            </a>
            )
          </h1>
          <span className="flex">
            Crafting software goodness, product development,{" "}
            <SiBitcoin color="#FF4A01" className="mx-1 my-auto h-4 w-4" /> /⚡️
            enthusiast
          </span>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 lg:max-w-lg">
          <p className="text-sm dark:text-white/60">
            I’m always looking to collaborate on interesting projects with great
            people. Need a hand? I have two – Nice to meet you! 🤝🏽
          </p>
        </div>
        <div className="flex items-center justify-start gap-4">
          <CalcomHireButton />
          <Link href="mailto:miraclef60@gmail.com" passHref target="_blank">
            <Button variant="secondary" className="gap-2">
              <Copy className="h-4 w-4" /> E-mail
            </Button>
          </Link>
        </div>
        <div className="mt-20 w-full">
          <SubMailList
            title="Stay up to date"
            subTitle="Get notified when a new articles drop"
          />
        </div>
      </div>
    </main>
  );
}
