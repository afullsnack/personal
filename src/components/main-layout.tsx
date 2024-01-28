"use client";

import {
  DraftingCompass,
  ExternalLink,
  Github,
  Instagram,
  LibrarySquare,
  Mailbox,
  Menu,
  ShipWheel,
  Sparkles,
  Twitter,
  X,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import profilePic from "../assets/profile-pic.jpeg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";

const menuItems = [
  {
    title: "Explore",
    icon: <ShipWheel className="h-4 w-4" />,
    href: "/explore",
  },
  {
    title: "Newsletter",
    icon: <Mailbox className="h-4 w-4" />,
    href: "/newsletter",
  },
  {
    title: "Ventures",
    icon: <Sparkles className="h-4 w-4" />,
    href: "/ventures",
  },
];

const resourceMenuItems = [
  {
    title: "Stack",
    icon: <DraftingCompass className="h-4 w-4" />,
    href: "/stack",
  },
  {
    title: "Blog",
    icon: <LibrarySquare className="h-4 w-4" />,
    href: "/blog",
  },
];

const socialsMenuItems = [
  {
    title: "Twitter",
    icon: <Twitter className="h-4 w-4" />,
    href: "https://x.com/afullsnack",
  },
  {
    title: "Instagram",
    icon: <Instagram className="h-4 w-4" />,
    href: "https://instagram.com/afullsnack",
  },
  {
    title: "Github",
    icon: <Github className="h-4 w-4" />,
    href: "https://github.com/afullsnack",
  },
];

/**
 * For the navigation menu pullout on mobile make ot interesting with
 * subtle animations and svg animation
 * On the main menu should be a normal boring rectangle with gradient blurred out circles
 * On the Resource menu should be a subtle clipboard outline with a minimalistic animating stars background
 * On the Socials menu should be an iPhone outline with an iPhone style gradient background, with the menu items layout as app icons
 */
/**
 * Logo font inspiration: Jomolhari, Renin, Kenia, Judson, KoPub Batang, Lily Script One, Lohit Tamil, Lobster, Milonga, Monofett, Mogra, Modern Antigua, Neonderthaw, Press Start 2p,
 * Rozha One, Vesper Libre, Viaoda Libre, VT323.
 */

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  return (
    <main className="grid h-screen w-screen sm:flex sm:items-center sm:justify-center">
      <header className="flex items-center justify-between border-b-[.3px] border-gray-200/20 px-8 py-6 sm:hidden">
        <div className="flex w-full items-center justify-start space-x-4 rounded-xl shadow-sm">
          <div className="shrink-0">
            <Image
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg border border-slate-600"
              src={profilePic}
              alt="ChitChat Logo"
            />
          </div>
          <div>
            <div className="text-sm font-normal text-white">Miracle Friday</div>
            {/* Animate this section to flip different skill sets */}
            <p className="text-xs text-slate-300">Software Engineer</p>
          </div>
        </div>
        <Drawer direction="left" dismissible={false}>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              className="rounded border-[.56px] border-gray-100 p-2"
            >
              <Menu color="gray" className="h-6 w-6 text-zinc-200" />
            </Button>
          </DrawerTrigger>
          <DrawerContent
            showIndicator={false}
            className="h-full w-full"
            draggable={false}
          >
            <div className="mx-auto w-full max-w-full">
              <DrawerHeader>
                <div className="flex items-center justify-between border-b-[.3px] border-gray-200/20 px-4 py-4">
                  <div className="flex w-full items-center justify-start space-x-4 rounded-xl shadow-sm">
                    <div className="shrink-0">
                      <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-lg border border-slate-600"
                        src={profilePic}
                        alt="ChitChat Logo"
                      />
                    </div>
                    <div className="grid place-items-start">
                      <div className="text-sm font-normal text-white">
                        Miracle Friday
                      </div>
                      {/* Animate this section to flip different skill sets */}
                      <p className="text-xs text-slate-300">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                  <DrawerClose>
                    <X color="gray" className="h-6 w-6 text-zinc-200" />
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="my-2" />
                {menuItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.title}
                    className={cn(
                      "flex w-full items-center justify-start gap-2 rounded-md px-4 py-2 text-sm font-light text-white/70 hover:bg-zinc-500/10 hover:text-[#FF4A01]",
                      {
                        "text-[#FF4A01]":
                          pathname.slice(1) === item.title.toLowerCase(),
                      },
                    )}
                  >
                    {item.icon}
                    {item.title}
                  </a>
                ))}
                <div className="my-4" />
                <span className="px-4 text-xs font-extralight text-slate-300/60">
                  Resources
                </span>
                {resourceMenuItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.title}
                    className={cn(
                      "flex w-full items-center justify-start gap-2 rounded-md px-4 py-2 text-sm font-light text-white/70 hover:bg-zinc-500/10 hover:text-[#FF4A01]",
                      {
                        "text-[#FF4A01]":
                          pathname.slice(1) === item.title.toLowerCase(),
                      },
                    )}
                  >
                    {item.icon}
                    {item.title}
                  </a>
                ))}
                <div className="my-4" />
                <span className="px-4 text-xs font-extralight text-slate-300/60">
                  Socials
                </span>
                {socialsMenuItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.title}
                    target="_blank"
                    className="group flex w-full items-center justify-between gap-2 rounded-md px-4 py-2 text-sm font-light text-white/70 hover:bg-zinc-500/10 hover:text-[#FF4A01]"
                  >
                    <span className="flex items-center justify-start gap-2">
                      {item.icon}
                      {item.title}
                    </span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </header>
      <aside className="sticky bottom-0 left-0 top-0 hidden h-full max-w-lg items-start justify-start overflow-y-scroll bg-zinc-900 pb-6 sm:grid sm:min-w-fit">
        <div className="grid min-w-[250px] items-start justify-stretch gap-1 px-2">
          <div className="flex w-full items-center justify-start space-x-4 rounded-xl px-3 py-6 shadow-sm">
            <div className="shrink-0">
              <Image
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border border-slate-600"
                src={profilePic}
                alt="ChitChat Logo"
              />
            </div>
            <div>
              <div className="text-sm font-normal text-white">
                Miracle Friday
              </div>
              {/* Animate this section to flip different skill sets */}
              <p className="text-xs text-slate-300">Software Engineer</p>
            </div>
          </div>
          <div className="my-2" />
          {menuItems.map((item) => (
            <a
              href={item.href}
              key={item.title}
              className={cn(
                "flex w-full items-center justify-start gap-2 rounded-md px-4 py-2 text-sm font-light text-white/70 hover:bg-zinc-500/10 hover:text-[#FF4A01]",
                {
                  "text-[#FF4A01]":
                    pathname.slice(1) === item.title.toLowerCase(),
                },
              )}
            >
              {item.icon}
              {item.title}
            </a>
          ))}
          <div className="my-2" />
          <span className="px-4 text-xs font-extralight text-slate-300/60">
            Resources
          </span>
          {resourceMenuItems.map((item) => (
            <a
              href={item.href}
              key={item.title}
              className={cn(
                "flex w-full items-center justify-start gap-2 rounded-md px-4 py-2 text-sm font-light text-white/70 hover:bg-zinc-500/10 hover:text-[#FF4A01]",
                {
                  "text-[#FF4A01]":
                    pathname.slice(1) === item.title.toLowerCase(),
                },
              )}
            >
              {item.icon}
              {item.title}
            </a>
          ))}
          <div className="my-2" />
          <span className="px-4 text-xs font-extralight text-slate-300/60">
            Socials
          </span>
          {socialsMenuItems.map((item) => (
            <a
              href={item.href}
              key={item.title}
              target="_blank"
              className="group flex w-full items-center justify-between gap-2 rounded-md px-4 py-2 text-sm font-light text-white/70 hover:bg-zinc-500/10 hover:text-[#FF4A01]"
            >
              <span className="flex items-center justify-start gap-2">
                {item.icon}
                {item.title}
              </span>
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </aside>
      <div className="h-full w-full overflow-y-scroll">{children}</div>
    </main>
  );
};
