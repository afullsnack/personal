import { SubMailList } from "~/components/ui/sub-mail-list";
import { FC, ReactNode, useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";
import {
  SiAlacritty,
  SiBitcoin,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFlutter,
  SiJest,
  SiLinear,
  SiNextdotjs,
  SiReact,
  SiRetool,
  SiSolidity,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandVscode, TbCurrencySolana } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";

export default function StackPage() {
  const stackList = useMemo<Record<string, any>[]>(
    () => [
      {
        domain: "web dev",
        stack: [
          {
            name: "typescript",
            icon: <SiTypescript className="h-8 w-8" color="white" />,
          },
          {
            name: "next",
            icon: <SiNextdotjs className="h-8 w-8" color="white" />,
          },
          {
            name: "tailwindcss",
            icon: <SiTailwindcss className="h-8 w-8" color="white" />,
          },
          {
            name: "vite",
            icon: <SiVite className="h-8 w-8" color="white" />,
          },
          {
            name: "zod",
            icon: <SiZod className="h-8 w-8" color="white" />,
          },
        ],
      },
      {
        domain: "app dev",
        stack: [
          {
            name: "typescript",
            icon: <SiTypescript className="h-8 w-8" color="white" />,
          },
          {
            name: "expo",
            icon: <SiExpo className="h-8 w-8" color="white" />,
          },
          {
            name: "react-native",
            icon: <SiReact className="h-8 w-8" color="white" />,
          },
          {
            name: "jest",
            icon: <SiJest className="h-8 w-8" color="white" />,
          },
          {
            name: "flutter",
            icon: <SiFlutter className="h-8 w-8" color="white" />,
          },
        ],
      },
      {
        domain: "backend",
        stack: [
          {
            name: "typescript",
            icon: <SiTypescript className="h-8 w-8" color="white" />,
          },
          {
            name: "express",
            icon: <SiExpress className="h-8 w-8" color="white" />,
          },
          {
            name: "rust",
            icon: <FaRust className="h-8 w-8" color="white" />,
          },
          {
            name: "retool",
            icon: <SiRetool className="h-8 w-8" color="white" />,
          },
          {
            name: "postgres",
            icon: <BiLogoPostgresql className="h-8 w-8" color="white" />,
          },
        ],
      },
      {
        domain: "blockchain",
        stack: [
          {
            name: "bitcoin",
            icon: <SiBitcoin className="h-8 w-8" color="white" />,
          },
          {
            name: "solana",
            icon: <TbCurrencySolana className="h-8 w-8" color="white" />,
          },
          {
            name: "solidity",
            icon: <SiSolidity className="h-8 w-8" color="white" />,
          },
          {
            name: "rust",
            icon: <FaRust className="h-8 w-8" color="white" />,
          },
          {
            name: "typescript",
            icon: <SiTypescript className="h-8 w-8" color="white" />,
          },
        ],
      },
      {
        domain: "tools",
        stack: [
          {
            name: "docker",
            icon: <SiDocker className="h-8 w-8" color="white" />,
          },
          {
            name: "vscode",
            icon: <TbBrandVscode className="h-8 w-8" color="white" />,
          },
          {
            name: "alacritty",
            icon: <SiAlacritty className="h-8 w-8" color="white" />,
          },
          {
            name: "github",
            icon: <VscGithub className="h-8 w-8" color="white" />,
          },
          {
            name: "linear",
            icon: <SiLinear className="h-8 w-8" color="white" />,
          },
        ],
      },
    ],
    [],
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-50 to-zinc-200 text-black dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <div className="container mx-auto flex flex-col items-start justify-start gap-6 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        <div className="grid gap-2 lg:max-w-lg">
          <h1 className="text-3xl font-semibold leading-snug tracking-tight sm:text-[3rem]">
            Stack
          </h1>
          <span>Software and tools I use professionally in my day to day</span>
        </div>
        <div className="mt-5 grid w-full grid-cols-1 items-start justify-start gap-14 lg:max-w-full lg:grid-cols-2 lg:gap-12">
          {stackList.map((item, index) => (
            <div className="w-full" key={index}>
              <StackView title={item?.domain} stack={item?.stack} />
            </div>
          ))}
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

interface StackViewProps {
  children?: ReactNode;
  title: string;
  stack: Record<string, any>[];
}
const StackView: FC<StackViewProps> = ({ title, stack }) => {
  return (
    <div className="grid w-full min-w-full items-start justify-start gap-3">
      <span className="pl-2 font-medium capitalize">{title}</span>
      <Carousel className="w-full" orientation="horizontal">
        <CarouselContent className="-ml-1 w-full max-w-full">
          {stack.map((s, index) => (
            <CarouselItem key={index} className="basis-1/4 pl-1">
              <div className="p-1">
                <Card className="rounded-md">
                  <CardContent className="flex aspect-square items-center justify-center p-3 md:p-2">
                    {s?.icon}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="top-4/5 translate-y-4/5 left-2 h-6 w-6"
          variant="link"
        />
        <CarouselNext
          className="top-4/5 translate-y-4/5 right-2 h-6 w-6"
          variant="link"
        />
      </Carousel>
    </div>
  );
};
