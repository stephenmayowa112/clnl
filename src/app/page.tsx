import { Header, Footer } from '@/components/layout';
import { Hero, About, Services, WhyChooseUs, Industries, Contact, ProductGallery, Quote } from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <main id="main-content" className="overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Industries Section */}
        <Industries />

        {/* Product Gallery Section */}
        <ProductGallery />

        {/* Contact Section */}
        <Contact />

        {/* Quote Section */}
        <Quote />

        {/* Tracking Section Placeholder */}
        <section id="tracking" className="py-16 sm:py-20 bg-accent">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Track Your Shipment</h2>
            <p className="text-base sm:text-lg text-gray-800">Tracking form coming soon...</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
