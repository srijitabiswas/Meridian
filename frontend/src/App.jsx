import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { Features } from './components/sections/Features';
import { Stats } from './components/sections/Stats';
import { HowItWorks } from './components/sections/HowItWorks';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { CTA } from './components/sections/CTA';
import { ScrollToTop } from './components/ui/ScrollToTop';

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forsythia focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-oceanic-noir"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <TrustedBy />
        <Features />
        <Stats />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}