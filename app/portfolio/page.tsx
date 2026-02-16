import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | MLX Consulting",
  description:
    "Explore our portfolio of hotels, restaurants, residential, mixed-use, and destination projects across the US, Europe, Asia and the Middle East.",
  openGraph: {
    title: "Portfolio | MLX Consulting",
    description:
      "Hotels, restaurants, residential, mixed-use, and destination projects delivered with passion and precision.",
    type: "website",
  },
};

export default function Page() {
  return <PortfolioClient />;
}
