// app/posts/[slug]/page.tsx
import { allPosts, type Post } from "~/content";
import { format, parseISO } from "date-fns";

import { notFound } from "next/navigation";
import Image from "next/image";
import MDXContent from "~/components/ui/md-comp";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import type { Metadata } from "next";
import { Badge } from "~/components/ui/badge";

interface PostProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: PostProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export function generateStaticParams(): PostProps["params"][] {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post: Post) => post.slug === slug);
}

export default function Page({ params }: PostProps) {
  const post = getPostBySlug(params.slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-50 to-zinc-200 text-black dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <div className="container mx-auto flex flex-col items-start justify-start gap-6 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        <div className="grid gap-3 md:pl-4 lg:max-w-lg">
          <h2 className="text-3xl font-bold text-slate-200">{post.title}</h2>
          <div className="flex items-center justify-start gap-2">
            {post.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="rounded-lg">
                {tag}
              </Badge>
            ))}
          </div>
          <time dateTime={post.date} className="block text-xs text-gray-400">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          {/* Author Avatar and info */}
          <div className="flex w-full items-center justify-start space-x-4 rounded-xl shadow-sm">
            <div className="shrink-0">
              <Avatar>
                <AvatarImage
                  src={post.authorAvatar ?? `/profiles/default.png`}
                  alt={post.author}
                />
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((name) => name.slice(0, 1))
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <div className="text-sm font-normal text-white">
                {post.author}
              </div>
              {/* Animate this section to flip different skill sets */}
              <p className="text-xs text-slate-300">{post.authorPosition}</p>
            </div>
          </div>
        </div>
        <div className={`aspect-video w-full min-w-full overflow-hidden`}>
          <img
            src={post.coverImg}
            alt="cover_img"
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="grid flex-wrap gap-2 text-slate-300 md:pl-4 lg:max-w-2xl">
          <MDXContent code={post.body.code} />
        </div>
      </div>
    </main>
  );
}
