import type { CollectionConfig } from "payload";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  labels: {
    singular: "Case Study",
    plural: "Case Studies",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "practiceArea", "publishedAt"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "practiceArea",
      type: "text",
    },
    {
      name: "summary",
      type: "textarea",
    },
    {
      name: "heroImage",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "body",
      type: "richText",
      required: true,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: {
          displayFormat: "d MMM yyyy",
        },
      },
    },
  ],
};

