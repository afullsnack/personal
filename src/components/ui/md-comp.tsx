"use client";

import Link from "next/link";
import { Card, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import * as runtime from "react/jsx-runtime";
// import { Code } from "@code-hike/mdx/components";
import type { ComponentProps } from "react";

// Define components to add to MDX
const mdxComponents = {
  Card,
  CardTitle,
  // Code,
};
// Define useMDXComponent hook
const useMDXComponent = (code: string): JSX.ElementType => {
  // eslint-disable-next-line
  const fn = new Function(code);
  // eslint-disable-next-line
  return fn({ ...runtime }).default;
};

type Props = {
  code: string;
  components?: Record<string, React.ComponentType>;
};

const MDXContent = ({ code, components }: Props) => {
  const Component = useMDXComponent(code);
  return (
    <div>
      <Component
        components={{
          ul: (props: ComponentProps<"ul">) => (
            <ul className="ml-4 list-disc" {...props} />
          ),
          ol: (props: ComponentProps<"ol">) => (
            <ol className="ml-4 list-decimal" {...props} />
          ),
          h1: (props: ComponentProps<"h1">) => (
            <h1 className="text-5xl" {...props} />
          ),
          h2: (props: ComponentProps<"h2">) => (
            <h2 className="text-4xl" {...props} />
          ),
          h3: (props: ComponentProps<"h3">) => (
            <h3 className="text-3xl" {...props} />
          ),
          h4: (props: ComponentProps<"h4">) => (
            <h4 className="text-2xl" {...props} />
          ),
          h5: (props: ComponentProps<"h5">) => (
            <h5 className="text-xl" {...props} />
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
    </div>
  );
};

export default MDXContent;
