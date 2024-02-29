// contentlayer config
import { remarkCodeHike } from "@code-hike/mdx";
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
    authorPosition: { type: "string", required: true },
    authorAvatar: { type: "string", required: false },
    coverImg: { type: "string", required: true },
    thumbImg: { type: "string", required: true },
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
