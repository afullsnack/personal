// app/posts/[slug]/page.tsx
import { allPosts, Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

import { notFound } from "next/navigation";
import Markdown from "~/components/ui/md-comp";

export async function generateStaticParams() {
  return allPosts.map((post: Post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug,
  );

  // 404 if the post does not exist.
  if (!post) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-50 to-zinc-200 text-black dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <div className="container mx-auto flex flex-col items-start justify-start gap-6 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        <div className="grid gap-2 lg:max-w-lg">
          <h2 className="text-3xl font-bold">{post.title}</h2>
          <time dateTime={post.date} className="block text-xs text-gray-400">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <h2 className="mt-1 text-sm">{post.author}</h2>
        </div>
        <div className="grid gap-2 lg:max-w-lg">
          <Markdown code={post.body.code} />
        </div>
      </div>
    </main>
  );
}
