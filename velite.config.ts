// contentlayer config

import { defineConfig, s } from "velite";
// import type { Route } from "next";
// import type { Schema } from "velite";
// import { remarkCodeHike } from "@code-hike/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const rehypeWithOptions = rehypePrettyCode({
  theme: "nord",
  keepBackground: false,
});

// Export Article schema
export default defineConfig({
  collections: {
    posts: {
      name: "Post",
      pattern: `posts/**/*.mdx`,
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug("posts"),
          date: s.isodate(),
          cover: s.image({ allowNonRelativePath: true }).optional(),
          description: s.string(),
          author: s.string(),
          img: s.image({ allowNonRelativePath: true }).optional(),
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          link: `/blog/${data.slug}`,
          // s.string() as Schema<Route<"/posts/${string}">>,
        })),
    },

    // fields: {
    //   title: { type: "string", required: true },
    //   date: { type: "date", required: true },
    //   description: { type: "string", required: true },
    //   author: { type: "string", required: true },
    //   img: { type: "string", required: true },
    //   tags: {
    //     type: "list",
    //     required: false,
    //     of: { type: "string" },
    //     default: [],
    //   },
    // },
    // computedFields: {
    //   url: {
    //     type: "string",
    //     resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    //   },
    // },
  },
  mdx: {
    remarkPlugins: [
      // [
      //   remarkCodeHike,
      //   {
      //     theme: "dark-plus",
      //     lineNumbers: true,
      //     showCopyButton: true,
      //     autoImport: true,
      //   },
      // ],
    ],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: "one-dark-pro",
        },
      ],
    ],
  },
});

// export default makeSource({
//   contentDirPath: "posts",
//   documentTypes: [Post],
//   mdx: {
//     remarkPlugins: [
//       [
//         remarkCodeHike,
//         {
//           theme: "dark-plus",
//           lineNumbers: true,
//           showCopyButton: true,
//           autoImport: true,
//         },
//       ],
//     ],
//   },
// });
