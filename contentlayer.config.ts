// contentlayer config

// import { defineConfig, s } from "velite";
// import type { Route } from "next";
// import type { Schema } from "velite";
import { remarkCodeHike } from "@code-hike/mdx";
// import rehypePrettyCode from "rehype-pretty-code";
import { defineDocumentType, makeSource } from "contentlayer/source-files";

// Export Article schema
const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    author: { type: "string", required: true },
    img: { type: "string", required: true },
    tags: {
      type: "list",
      required: false,
      of: { type: "string" },
      default: [],
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post: { slug: string; _raw: { flattenedPath: string } }) =>
        `${post._raw.flattenedPath.replaceAll("posts", "blog")}`,
    },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
  // },
  // mdx: {
  //   remarkPlugins: [
  //     [
  //       remarkCodeHike,
  //       {
  //         theme: "dark-plus",
  //         lineNumbers: true,
  //         showCopyButton: true,
  //         autoImport: true,
  //       },
  //     ],
  //   ],
  // rehypePlugins: [
  //   [
  //     rehypePrettyCode,
  //     {
  //       keepBackground: false,
  //       theme: "one-dark-pro",
  //     },
  //   ],
  // ],
  // },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: "dark-plus",
          lineNumbers: true,
          showCopyButton: true,
          autoImport: true,
        },
      ],
    ],
  },
});
