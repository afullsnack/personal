// app/posts/[slug]/page.tsx
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardTitle } from "~/components/ui/card";

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
    <div className="text-blue-500">
      {/* Some code ... */}
      <MDXContent
        components={{
          a: ({ href, children, className }) => (
            <Link className={className} href={href as string}>
              {children}
            </Link>
          ),
          Card,
          CardTitle,
        }}
      />
    </div>
  );
}
