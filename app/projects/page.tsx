import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | MLX Consulting",
  description:
    "Explore a collection of projects we've brought to life — Pier Sixty-Six, Presidential Palace Abu Dhabi, and Trojena Masterplan — each crafted with passion and precision.",
  openGraph: {
    title: "Projects | MLX Consulting",
    description:
      "Landmark projects including Pier Sixty-Six, Presidential Palace Abu Dhabi, and Trojena.",
    type: "website",
  },
};

export default function Page() {
  return <ProjectsClient />;
}
