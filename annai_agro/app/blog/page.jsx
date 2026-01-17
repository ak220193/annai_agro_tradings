import BlogHero from "@/components/blog/BlogHero";
import BlogFilters from "@/components/blog/BlogFilters";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Agro Insights & Export Guides | Annai Agro Tradings Blog",
  description:
    "Expert insights on traditional Indian produce, B2B export standards, and authentic recipes for a better life.",
};

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogHero />
      <BlogFilters />
      <BlogGrid />
    </main>
  );
}
