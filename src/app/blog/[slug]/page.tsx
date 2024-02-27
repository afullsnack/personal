// app/posts/[slug]/page.tsx
import { posts, type Post } from "@content";
import { format, parseISO } from "date-fns";

import { notFound, useParams } from "next/navigation";
import MDXContent from "~/components/ui/md-comp";
import type { Metadata } from "next";

interface PostProps {
  params: {
    slug: string;
  };
}

// export async function generateStaticParams() {
//   return allPosts.map((post: Post) => ({
//     slug: post._raw.flattenedPath,
//   }));
// }
//

function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export default function Page({ params }: PostProps) {
  const post = getPostBySlug(params.slug);

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
          <MDXContent code={post.content} />
        </div>
      </div>
    </main>
  );
}

export function generateMetadata({ params }: PostProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export function generateStaticParams(): PostProps["params"][] {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
