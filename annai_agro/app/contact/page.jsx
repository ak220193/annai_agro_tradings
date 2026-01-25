import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";


export const metadata = {
  title: "Contact Our Export Desk | Annai Agro Tradings",
  description: "Get in touch for bulk export inquiries, product specifications, and global supply chain partnerships.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      
    </main>
  );
}