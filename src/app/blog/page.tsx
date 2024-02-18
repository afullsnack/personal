/**
 * Blog page index that lists all the written blogs title, date and description with an attached image
 */

import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { FC } from "react";

export default function BlogPage() {
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-50 to-zinc-200 text-black dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <div className="container mx-auto flex flex-col items-start justify-start gap-6 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        <div className="grid gap-2 lg:max-w-lg">
          <h1 className="text-3xl font-semibold leading-snug tracking-tight sm:text-[3rem]">
            Blog
          </h1>
        </div>
        <div className="grid gap-2 lg:max-w-lg">
          {posts.map((post: any, idx: number) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}

const PostCard: FC<Post> = (post) => {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-[#FF4A01] hover:text-[#FF4A01]/80"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h2 className="mb-1 text-sm">{post.description}</h2>
      {/* <div
        className="text-sm [&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body }}
      /> */}
    </div>
  );
};
