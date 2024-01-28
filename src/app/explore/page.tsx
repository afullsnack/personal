import { Copy } from "lucide-react";
import { Button } from "~/components/ui/button";


export default function ExplorePage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-950 to-zinc-900 text-white">
      <div className="container flex flex-col items-start justify-start gap-3 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">

        <div className="grid gap-2 lg:max-w-lg">
          <h1 className="text-3xl font-semibold leading-snug tracking-tight text-white sm:text-[3rem]">
            Bringing products<br/> to life
          </h1>
          <span>Full-stack software engineer and product developer obsessed with bringing authentic and usefull products that solve real world pain to life.</span>
        </div>
        <div className="grid gap-3">
          
        </div>
        <div className="flex items-center justify-start gap-4">
          <Button variant="outline">About</Button>
          <Button variant="secondary" className="gap-2">
            <Copy className="h-4 w-4" /> E-mail
          </Button>
        </div>


      </div>
    </main>
  );
}
