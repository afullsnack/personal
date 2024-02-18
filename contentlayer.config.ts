// contentlayer config

import { defineDocumentType, makeSource } from "contentlayer/source-files";

// Export Article schema
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    author: { type: "string", required: true },
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
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
