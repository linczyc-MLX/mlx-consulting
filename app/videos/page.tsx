import { Metadata } from "next";
import VideosClient from "./VideosClient";

export const metadata: Metadata = {
  title: "Videos | MLX Consulting",
  description:
    "Watch our project showcases and thought leadership videos on development management, branded residential, and luxury advisory services.",
  openGraph: {
    title: "Videos | MLX Consulting",
    description:
      "Project showcases and thought leadership from MLX Consulting.",
    type: "website",
  },
};

export default function Page() {
  return <VideosClient />;
}
