import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | MLX Consulting",
  description:
    "Comprehensive real estate development services including D-VELOP360, consulting, master planning, development management, project management, and creative branding.",
  openGraph: {
    title: "Services | MLX Consulting",
    description:
      "D-VELOP360, consulting, master planning, development management, and more.",
    type: "website",
  },
};

export default function Page() {
  return <ServicesClient />;
}
