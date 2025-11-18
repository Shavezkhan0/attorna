import type { CollectionConfig } from "payload";

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  labels: {
    singular: "Team Member",
    plural: "Team Members",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "position",
      type: "text",
    },
    {
      name: "bio",
      type: "textarea",
    },
    {
      name: "photo",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

