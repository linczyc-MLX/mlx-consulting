import { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "../portfolio-data";
import AlbumClient from "./AlbumClient";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};

  return {
    title: `${cat.label} | Portfolio | MLX Consulting`,
    description: cat.description,
    openGraph: {
      title: `${cat.label} Portfolio | MLX Consulting`,
      description: cat.description,
      type: "website",
    },
  };
}

export default async function Page({ params }: Props) {
  const { category: slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  return <AlbumClient slug={slug} />;
}
