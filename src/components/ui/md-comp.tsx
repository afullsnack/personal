"use client";

import Link from "next/link";

import { Card, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";

import { useMDXComponent } from "next-contentlayer/hooks";
import { CH } from "@code-hike/mdx/components";

type Props = {
  code: string;
};

const Markdown = ({ code }: Props) => {
  const MDXComponent = useMDXComponent(code);
  return (
    <div>
      <MDXComponent
        components={{
          ul: (props) => <ul className="ml-4 list-disc" {...props} />,
          ol: (props) => <ol className="ml-4 list-decimal" {...props} />,
          h1: (props) => <h1 className="text-5xl" {...props} />,
          h2: (props) => <h1 className="text-4xl" {...props} />,
          h3: (props) => <h1 className="text-3xl" {...props} />,
          h4: (props) => <h1 className="text-2xl" {...props} />,
          h5: (props) => <h1 className="text-xl" {...props} />,
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
          CH,
        }}
      />
    </div>
  );
};

export default Markdown;
