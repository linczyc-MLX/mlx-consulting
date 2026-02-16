import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | MLX Consulting",
  description:
    "Get in touch with MLX Consulting. Visit us at 9 West 31st Street, Suite 26F, New York, NY 10001 or call +1 (212) 960-3001.",
  openGraph: {
    title: "Contact Us | MLX Consulting",
    description:
      "Have a project in mind? Reach out and let's explore the possibilities together.",
    type: "website",
  },
};

export default function Page() {
  return <ContactClient />;
}
