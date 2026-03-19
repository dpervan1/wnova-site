import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WEBNOVA",
    short_name: "WEBNOVA",
    description:
      "Izrada web stranica, webshopova i digitalni marketing za firme koje žele ozbiljniji online nastup.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f1a",
    theme_color: "#0b0f1a",
    icons: [
      {
        src: "/brand/wnova-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/brand/wnova-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}