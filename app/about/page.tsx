import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About | MLX Consulting",
  description:
    "Our journey began 25 years ago with a simple idea: to assemble the most creative, innovative and visionary team to deliver authentic, dynamic and profitable environments.",
  openGraph: {
    title: "About | MLX Consulting",
    description:
      "25+ years of creating remarkable environments across the US, Europe, Asia and the Middle East.",
    type: "website",
  },
};

export default function Page() {
  return <AboutClient />;
}
