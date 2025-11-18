import type { GlobalConfig } from "payload";

export const SiteGlobals: GlobalConfig = {
  slug: "site-globals",
  label: "Site Globals",
  fields: [
    {
      name: "siteTitle",
      label: "Site Title",
      type: "text",
    },
    {
      name: "siteDescription",
      label: "Site Description",
      type: "textarea",
    },
    {
      name: "navigationLinks",
      label: "Navigation Links",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "href",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "footerText",
      label: "Footer Text",
      type: "textarea",
    },
    {
      name: "contactEmail",
      label: "Contact Email",
      type: "email",
    },
  ],
};

