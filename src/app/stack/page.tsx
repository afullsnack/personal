export default function StackPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-50 to-zinc-200 text-black dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <div className="container mx-auto flex flex-col items-start justify-start gap-6 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        <div className="grid gap-2 lg:max-w-lg">
          <h1 className="text-3xl font-semibold leading-snug tracking-tight sm:text-[3rem]">
            Stack
          </h1>
          <span>Software and tools I use professionally in my day to day</span>
        </div>
        <div className="mt-5 grid w-full items-start justify-start gap-10 lg:max-w-lg lg:gap-12"></div>
      </div>
    </main>
  );
}
