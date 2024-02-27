"use client";

import Link from "next/link";
import { Card, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";
// import * as runtime from "react/jsx-runtime";
import { CH } from "@code-hike/mdx/components";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { ComponentProps } from "react";

// Define components to add to MDX
const mdxComponents = {
  Card,
  CardTitle,
  CH,
};
// Define useMDXComponent hook
// const useMDXComponent = (code: string): JSX.ElementType => {
//   // eslint-disable-next-line
//   const fn = new Function(code);
//   // eslint-disable-next-line
//   return fn({ ...runtime }).default;
// };

type Props = {
  code: string;
  components?: Record<string, React.ComponentType>;
};

const MDXContent = ({ code, components }: Props) => {
  const Component = useMDXComponent(code);
  return (
    <article className="text-wrap grid w-full min-w-full overflow-hidden">
      <Component
        components={{
          ul: (props: ComponentProps<"ul">) => (
            <ul className="ml-4 list-disc" {...props} />
          ),
          ol: (props: ComponentProps<"ol">) => (
            <ol className="ml-4 list-decimal" {...props} />
          ),
          h1: (props: ComponentProps<"h1">) => (
            <h1 className="my-2 flex-wrap text-5xl font-extrabold" {...props} />
          ),
          h2: (props: ComponentProps<"h2">) => (
            <h2 className="my-2 flex-wrap text-4xl font-bold" {...props} />
          ),
          h3: (props: ComponentProps<"h3">) => (
            <h3 className="my-1 flex-wrap text-3xl font-semibold" {...props} />
          ),
          h4: (props: ComponentProps<"h4">) => (
            <h4 className="my-1 flex-wrap text-2xl font-medium" {...props} />
          ),
          h5: (props: ComponentProps<"h5">) => (
            <h5 className="my-1 flex-wrap text-xl font-normal" {...props} />
          ),
          a: ({ href, children, className }: ComponentProps<"a">) => (
            <Link className={cn("text-orange-600", className)} href={href!}>
              {children}
            </Link>
          ),
          ...mdxComponents,
          ...components,
        }}
      />
    </article>
  );
};

export default MDXContent;
