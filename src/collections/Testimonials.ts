import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: {
    singular: "Testimonial",
    plural: "Testimonials",
  },
  admin: {
    useAsTitle: "clientName",
  },
  fields: [
    {
      name: "clientName",
      type: "text",
      required: true,
    },
    {
      name: "clientTitle",
      type: "text",
    },
    {
      name: "testimonial",
      type: "textarea",
      required: true,
    },
    {
      name: "avatar",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "order",
      type: "number",
      admin: {
        description: "Lower numbers appear first.",
      },
    },
  ],
};

