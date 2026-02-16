import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "MLX Consulting | Real Estate Development, Design & Construction",
  description:
    "A passion to deliver authentic, remarkable, sustainable and profitable environments. 25+ years of leadership in real estate development, design and construction.",
  openGraph: {
    title: "MLX Consulting | Real Estate Development, Design & Construction",
    description:
      "A passion to deliver authentic, remarkable, sustainable and profitable environments.",
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}
