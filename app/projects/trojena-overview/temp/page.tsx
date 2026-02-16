import { Metadata } from "next";
import TrojenaClient from "./TrojenaClient";

export const metadata: Metadata = {
  title: "Trojena Masterplan | Projects | MLX Consulting",
  description:
    "Development management advisory for branded residential at Trojena, the global mountain destination at NEOM in Saudi Arabia. Host of the 2029 Asian Winter Games.",
  openGraph: {
    title: "Trojena Masterplan | MLX Consulting",
    description:
      "Branded residential advisory for NEOM's mountain destination in Saudi Arabia.",
    type: "website",
  },
};

export default function Page() {
  return <TrojenaClient />;
}
