import { Metadata } from "next";
import Pier66Client from "./Pier66Client";

export const metadata: Metadata = {
  title: "Pier Sixty-Six | Projects | MLX Consulting",
  description:
    "A landmark 35-acre mixed-use development in Fort Lauderdale Beach featuring marina, hotel, residential, dining, and event spaces. Development Management by MLX Consulting.",
  openGraph: {
    title: "Pier Sixty-Six | MLX Consulting",
    description:
      "35-acre mixed-use waterfront development in Fort Lauderdale Beach, Florida.",
    type: "website",
  },
};

export default function Page() {
  return <Pier66Client />;
}
