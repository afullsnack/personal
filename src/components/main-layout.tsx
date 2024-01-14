import Image from "next/image";
import React from "react";
import profilePic from "../assets/profile-pic.jpeg";

const menuItems = [
  {
    title: "Explore",
    icon: null,
    href: "/explore",
  },
  {
    title: "Newsletter",
    icon: null,
    href: "/newsletter",
  },
  {
    title: "Ventures",
    icon: null,
    href: "/ventures",
  },
];

const resourceMenuItems = [
  {
    title: "Stack",
    icon: null,
    href: "/stack",
  },
  {
    title: "Blog",
    icon: null,
    href: "/blog",
  },
];

const socialsMenuItems = [
  {
    title: "Twitter",
    icon: null,
    href: "https://x.com/afullsnack",
  },
  {
    title: "Instagram",
    icon: null,
    href: "https://instagram.com/afullsnack",
  },
  {
    title: "Github",
    icon: null,
    href: "https://github.com/afullsnack",
  },
];

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <aside className="sticky bottom-0 left-0 top-0 hidden h-full max-w-lg items-start justify-start overflow-y-scroll bg-slate-800 pb-6 sm:grid sm:min-w-fit">
        <div className="grid min-w-[250px] items-start justify-stretch gap-1 px-2">
          <div className="flex w-full items-center justify-start space-x-4 rounded-xl px-3 py-6 shadow-lg">
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
              className="flex w-full items-start justify-start rounded-md px-4 py-2 text-sm font-light text-white/70 hover:bg-slate-300/20 hover:text-white/100"
            >
              {item.icon}
              {item.title}
            </a>
          ))}
          <div className="my-2" />
          <span className="px-4 text-xs text-slate-300/60">Resources</span>
          {resourceMenuItems.map((item) => (
            <a
              href={item.href}
              key={item.title}
              className="flex w-full items-start justify-start rounded-md px-4 py-2 text-sm font-light text-white/70 hover:bg-slate-300/20 hover:text-white/100"
            >
              {item.icon}
              {item.title}
            </a>
          ))}
          <div className="my-2" />
          <span className="px-4 text-xs text-slate-300/60">Socials</span>
          {socialsMenuItems.map((item) => (
            <a
              href={item.href}
              key={item.title}
              target="_blank"
              className="flex w-full items-start justify-start rounded-md px-4 py-2 text-sm font-light text-white/70 hover:bg-slate-300/20 hover:text-white/100"
            >
              {item.icon}
              {item.title}
            </a>
          ))}
        </div>
      </aside>
      <div className="h-full w-full overflow-y-scroll">{children}</div>
    </main>
  );
};
