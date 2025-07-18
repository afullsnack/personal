import Link from "next/link";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { SubMailList } from "~/components/ui/sub-mail-list";

export const metadata = {
  title: "afullsnack.dev | Ventures",
  description:
    "afullsnack - Various ventures, startups and projects I'm involved in",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function VenturePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-50 to-zinc-200 text-black dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <div className="container mx-auto flex flex-col items-start justify-start gap-6 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        <div className="grid gap-2 lg:max-w-lg">
          <h1 className="text-3xl font-semibold leading-snug tracking-tight sm:text-[3rem]">
            Ventures
          </h1>
        </div>
        <div className="mt-5 grid w-full items-start justify-start gap-10 lg:max-w-lg lg:gap-12">
          <Link
            href="https://cngn.co"
            target="_blank"
            className="flex w-full items-center justify-start gap-4 shadow-sm"
          >
            <div className="aspect-video shrink-0">
              <div className="h-20 w-28 rounded-lg border border-slate-600 bg-zinc-900 md:h-36 md:w-48">
                <Image
                  width={40}
                  height={40}
                  className="size-full rounded-lg border border-slate-600 object-contain"
                  src={`/assets/cNGN-icon.png`}
                  alt="ChitChat Logo"
                />
              </div>
            </div>
            <div className="grid place-items-start justify-between gap-4 md:gap-8">
              <div>
                <h3 className="text-md font-normal">cNGN (Compliant Naira</h3>
                <p className="text-sm text-slate-900/60 dark:text-slate-300/60">
                  The first of its kind, compliant naira stablecoin, designed to
                  provide a secure and stable digital representation of the
                  Nigerian Naira.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Blockchain</Badge>
                <Badge variant="secondary">Digital Assets</Badge>
                {/* <Badge variant="secondary">Infrastructure</Badge> */}
              </div>
            </div>
          </Link>
          <Link
            href="https://useflintapi.vercel.app/"
            target="_blank"
            className="flex w-full items-center justify-start gap-4 shadow-sm"
          >
            <div className="aspect-video shrink-0">
              <div className="h-20 w-28 rounded-lg border border-slate-600 bg-zinc-900 md:h-36 md:w-48">
                <Image
                  width={40}
                  height={40}
                  className="size-full rounded-lg border border-slate-600 object-contain"
                  src={`/assets/flintapi-icon.png`}
                  alt="ChitChat Logo"
                />
              </div>
            </div>
            <div className="grid place-items-start justify-between gap-4 md:gap-8">
              <div>
                <h3 className="text-md font-normal">FlintAPI</h3>
                <p className="text-sm text-slate-900/60 dark:text-slate-300/60">
                  API first stablecoin infrastructure for the modern economy,
                  enabling seamless transactions and financial inclusion.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Infrastructure</Badge>
                <Badge variant="secondary">Payment</Badge>
                <Badge variant="secondary">Wallet</Badge>
              </div>
            </div>
          </Link>
          <Link
            href="https://passry.com"
            target="_blank"
            className="flex w-full items-center justify-start gap-4 shadow-sm"
          >
            <div className="aspect-video shrink-0">
              <div className="h-20 w-28 rounded-lg border border-slate-600 bg-zinc-900 md:h-36 md:w-48">
                <Image
                  width={40}
                  height={40}
                  className="size-full rounded-lg border border-slate-600 object-contain"
                  src={`/assets/passry-logo.svg`}
                  alt="Passry Logo"
                />
              </div>
            </div>
            <div className="grid place-items-start justify-between gap-4 md:gap-8">
              <div>
                <h3 className="text-sm font-normal">Passry</h3>
                <p className="text-xs text-slate-900/60 dark:text-slate-300/60">
                  Passry is a digital platform for creating events, selling
                  tickets, and managing access.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Events</Badge>
                <Badge variant="secondary">Ad</Badge>
                <Badge variant="secondary">Ticketing</Badge>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-20 w-full">
          <SubMailList
            title="Never miss a new venture or tool"
            subTitle="Get notified when a new venture drops"
          />
        </div>
      </div>
    </main>
  );
}
