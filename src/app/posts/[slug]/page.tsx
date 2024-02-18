// app/posts/[slug]/page.tsx
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";

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

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-zinc-50 to-zinc-200 text-black dark:from-zinc-950 dark:to-zinc-900 dark:text-white">
      <div className="container mx-auto flex flex-col items-start justify-start gap-6 px-8 py-8 md:px-16 md:py-16 lg:px-32 lg:py-32">
        <div className="grid gap-2 lg:max-w-lg">
          <MDXContent
            components={{
              a: ({ href, children, className }) => (
                <Link
                  className={cn("text-orange-600", className)}
                  href={href as string}
                >
                  {children}
                </Link>
              ),
              Card,
              CardTitle,
            }}
          />
        </div>
      </div>
    </main>
  );
}
