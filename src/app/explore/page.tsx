import { Copy } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaRust } from "react-icons/fa";
import { SiDocker, SiTypescript } from "react-icons/si";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { CardList } from "~/components/ui/card-list";
import { SubMailList } from "~/components/ui/sub-mail-list";

export const metadata = {
  title: "afullsnack.dev | Explore",
  description:
    "afullsnack - explore the latest from my personal experiences and knowledge",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function ExplorePage() {
  const stackPreviewList = React.useMemo(() => {
    return [
      {
        title: "Docker",
        description: "Containerize your application to run anywhere",
        icon: <SiDocker className="h-8 w-8" color="white" />,
        url: "https://www.docker.com/",
      },
      {
        title: "Typescript",
        description:
          "Strongly typed programming language that builds on JavaScript",
        icon: <SiTypescript className="h-8 w-8" color="white" />,
        url: "https://www.typescriptlang.org/",
      },
      {
        title: "Rust",
        description: "Build reliable and efficient software",
        icon: <FaRust className="h-8 w-8" color="white" />,
        url: "https://www.rust-lang.org/",
      },
    ];
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-50 to-zinc-200 text-black dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <div className="container mx-auto flex flex-col items-start justify-start gap-6 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        <div className="grid gap-2 lg:max-w-lg">
          <h1 className="text-3xl font-semibold leading-snug tracking-tight sm:text-[3rem]">
            Bringing products
            <br /> to life
          </h1>
          <span>
            Full-stack software engineer and product developer obsessed with
            building authentic and useful products that solve real world pain.
          </span>
        </div>
        <div className="flex items-center justify-start gap-4">
          <Link passHref href="/">
            <Button variant="outline">About</Button>
          </Link>
          <Link href="mailto:miraclef60@gmail.com" passHref target="_blank">
            <Button variant="secondary" className="gap-2">
              <Copy className="h-4 w-4" /> E-mail
            </Button>
          </Link>
        </div>
        <div className="mt-20 grid w-full items-start justify-start gap-6 lg:max-w-lg">
          <h3>New</h3>
          <Link
            href="#"
            className="flex w-full items-center justify-start gap-4 shadow-sm"
          >
            <div className="aspect-video shrink-0">
              {/* <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-lg border border-slate-600"
                        src={profilePic}
                        alt="ChitChat Logo"
                      /> */}
              <div className="h-20 w-28 rounded-lg border border-slate-600 bg-zinc-900 md:h-36 md:w-48"></div>
            </div>
            <div className="grid place-items-start justify-between gap-4 md:gap-8">
              <div>
                <h3 className="text-sm font-normal">New portfolio item</h3>
                <p className="text-xs text-slate-900/60 dark:text-slate-300/60">
                  Long ass explanation of the portfolio item and all, portfolio,
                  portfolio item and all item and all
                </p>
              </div>
              <Badge variant="secondary">Company</Badge>
            </div>
          </Link>
          <Link
            href="#"
            className="flex w-full items-center justify-start gap-4 shadow-sm"
          >
            <div className="aspect-video shrink-0">
              {/* <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-lg border border-slate-600"
                        src={profilePic}
                        alt="ChitChat Logo"
                      /> */}
              <div className="h-20 w-28 rounded-lg border border-slate-600 bg-zinc-900 md:h-36 md:w-48"></div>
            </div>
            <div className="grid place-items-start justify-between gap-4 md:gap-8">
              <div>
                <h3 className="text-sm font-normal">New portfolio item 2</h3>
                <p className="text-xs text-slate-900/60 dark:text-slate-300/60">
                  Long ass explanation of the portfolio item and all, portfolio,
                  portfolio item and all item and all
                </p>
              </div>
              <Badge variant="secondary">Product</Badge>
            </div>
          </Link>
        </div>
        <div className="mt-20 w-full">
          <CardList
            items={[]}
            ctaText="All articles"
            ctaUrl="/blog"
            listHeader="Blog"
            listDescription="Sharing experiences, knowledge and videos on bitcoin & tech"
            className="w-full max-w-full border-zinc-400 bg-transparent dark:border-zinc-800 dark:bg-transparent"
          />
        </div>
        <div className="mt-20 w-full">
          <SubMailList />
        </div>
        <div className="mt-20 w-full">
          <CardList
            items={stackPreviewList}
            ctaText="All tools"
            ctaUrl="/stack"
            listHeader="Stack"
            listDescription="Software and tools I use regularly"
            className="w-full max-w-full border-zinc-400 bg-transparent dark:border-zinc-800 dark:bg-transparent"
          />
        </div>
      </div>
    </main>
  );
}
