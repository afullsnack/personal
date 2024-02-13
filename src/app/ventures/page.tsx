import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { SubMailList } from "~/components/ui/sub-mail-list";

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
            href="https://tambori.co"
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
                <h3 className="text-sm font-normal">Tambori</h3>
                <p className="text-xs text-slate-900/60 dark:text-slate-300/60">
                  Bitcoin / Lightning infrastructure for institutions, startups
                  and savvy individuals
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Bitcoin</Badge>
                <Badge variant="secondary">Lightning</Badge>
                <Badge variant="secondary">Infrastructure</Badge>
              </div>
            </div>
          </Link>
          <Link
            href="https://baggit.xyz"
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
                <h3 className="text-sm font-normal">Baggit</h3>
                <p className="text-xs text-slate-900/60 dark:text-slate-300/60">
                  A personal or multi-party multi-sig bitcoin / lightning
                  savings and payments wallet
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Bitcoin</Badge>
                <Badge variant="secondary">Payment</Badge>
                <Badge variant="secondary">Wallet</Badge>
              </div>
            </div>
          </Link>
          <Link
            href="https://branded.tambori.co"
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
                <h3 className="text-sm font-normal">Branded</h3>
                <p className="text-xs text-slate-900/60 dark:text-slate-300/60">
                  Easily manage working with micro influencers to 10x your
                  customer reach and secure your niche
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Merketing</Badge>
                <Badge variant="secondary">Ad</Badge>
                <Badge variant="secondary">B2B</Badge>
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
