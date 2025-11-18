import type { CollectionConfig } from "payload";

export const HeroSections: CollectionConfig = {
  slug: "hero-sections",
  labels: {
    singular: "Hero Section",
    plural: "Hero Sections",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "textarea",
    },
    {
      name: "backgroundImage",
      type: "relationship",
      relationTo: "media",
      required: false,
    },
    {
      name: "primaryCta",
      label: "Primary CTA",
      type: "group",
      fields: [
        {
          name: "label",
          type: "text",
        },
        {
          name: "href",
          type: "text",
        },
      ],
    },
    {
      name: "secondaryCta",
      label: "Secondary CTA",
      type: "group",
      fields: [
        {
          name: "label",
          type: "text",
        },
        {
          name: "href",
          type: "text",
        },
      ],
    },
  ],
};

