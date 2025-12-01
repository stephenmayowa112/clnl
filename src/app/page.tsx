import { Header, Footer } from '@/components/layout';
import { Hero, About, Services } from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Industries Section Placeholder */}
        <section id="industries" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Industries section coming soon...</p>
          </div>
        </section>

        {/* Contact Section Placeholder */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">Contact section coming soon...</p>
          </div>
        </section>

        {/* Quote Section Placeholder */}
        <section id="quote" className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
            <p className="text-lg">Quote form coming soon...</p>
          </div>
        </section>

        {/* Tracking Section Placeholder */}
        <section id="tracking" className="py-20 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Track Your Shipment</h2>
            <p className="text-lg text-gray-800">Tracking form coming soon...</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
