import { Metadata } from "next";
import PalaceClient from "./PalaceClient";

export const metadata: Metadata = {
  title: "Presidential Palace Abu Dhabi | Projects | MLX Consulting",
  description:
    "Interior architecture, design and FF&E for the Presidential Palace complex in Abu Dhabi, encompassing 50,000+ sqm across three palatial wings.",
  openGraph: {
    title: "Presidential Palace Abu Dhabi | MLX Consulting",
    description:
      "50,000+ sqm Presidential Palace complex with three palatial wings in Abu Dhabi.",
    type: "website",
  },
};

export default function Page() {
  return <PalaceClient />;
}
