import type { TinaField } from "tinacms";
export function postFields() {
  return [
    {
      type: "string",
      name: "author",
      label: "Posted By",
      options: ["Jonathan", "Heidi"],
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "title",
      isTitle: true,
      required: true
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true
    },
    {
      type: "datetime",
      name: "publishdate",
      label: "publishdate",
    },
    {
      type: "string",
      name: "beer_name",
      label: "beer_name",
    },
    {
      type: "string",
      name: "abv",
      label: "abv",
    },
    {
      type: "string",
      name: "brewer",
      label: "brewer",
    },
    {
      type: "image",
      name: "beer_photo",
      label: "beer_photo",
    },
    {
      type: "image",
      name: "antic_photo",
      label: "antic_photo",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "thumbnail",
    },
    {
      type: "image",
      name: "video",
      label: "Video",
    },
  ] as TinaField[];
}
