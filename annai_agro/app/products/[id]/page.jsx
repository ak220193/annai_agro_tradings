import { products } from '@/constants/index';
import { TechSpecs } from '@/components/products/TechSpecs';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Script from 'next/script';

/**
 * 1. DYNAMIC METADATA GENERATION
 * Crucial for SEO 100% score. It injects keywords into the HTML <head>.
 */
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return { title: "Product Not Found" };

  const keywords = product.seoKeywords ? product.seoKeywords.join(", ") : "";

  return {
    title: `${product.name} Exporter & Bulk Supplier India | Annai Agro`,
    description: `${product.overview} Reliable B2B ${product.name} supplier from India. HSN Code: ${product.hsn}. Contact for wholesale inquiries.`,
    keywords: keywords,
    alternates: {
      canonical: `https://yourdomain.com/products/${id}`,
    },
    openGraph: {
      title: `${product.name} Wholesale Export India`,
      description: product.overview,
      images: [{ url: product.img }],
    },
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  /**
   * 2. JSON-LD STRUCTURED DATA
   * Helps Google display "Rich Snippets" (price, stock, brand) in search results.
   */
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://yourdomain.com${product.img}`,
    "description": product.overview,
    "sku": product.hsn,
    "brand": { "@type": "Brand", "name": "Annai Agro" },
    "offers": {
      "@type": "Offer",
      "url": `https://yourdomain.com/products/${id}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  return (
    <>
      {/* Injecting Structured Data */}
      <Script id="product-schema" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Image with SEO-optimized alt tags */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                <Image 
                  src={product.img} 
                  alt={`${product.name} wholesale bulk supplier india`} 
                  fill 
                  className="object-cover" 
                  priority // Priority ensures faster LCP for Lighthouse
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Right: Content with Semantic HTML */}
          <div className="lg:col-span-7 space-y-10">
            <article>
              <header className="mb-8">
                <span className="text-[#67944e] font-black uppercase tracking-widest text-xs mb-3 block">
                  Export Grade {product.cat}
                </span>
                <h1 className="text-5xl font-black text-slate-900 mb-2 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl italic text-slate-400 font-medium">
                  ({product.scientificName})
                </p>
              </header>

              <section className="prose prose-slate">
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
                  {product.overview}
                </p>
                
                <TechSpecs specs={product.specs} hsn={product.hsn} />
              </section>

              {/* Variations Section */}
              {product.varieties && product.varieties.length > 0 && (
                <section className="mt-12 space-y-6">
                  <h2 className="text-sm font-black uppercase tracking-widest text-[#67944e]">
                    Available Varieties & Grading
                  </h2>
                  <div className="grid gap-4">
                    {product.varieties.map((v) => (
                      <div key={v.name} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#67944e] transition-colors group">
                        <div className="flex justify-between items-center font-bold text-slate-900 mb-2">
                          <span className="text-lg group-hover:text-[#67944e] transition-colors">{v.name}</span>
                          {v.heat && (
                            <span className="bg-[#67944e]/10 text-[#67944e] px-3 py-1 rounded-full text-[10px] uppercase">
                              {v.heat} Heat
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">{v.note}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </article>
          </div>
        </div>
      </main>
    </>
  );
}