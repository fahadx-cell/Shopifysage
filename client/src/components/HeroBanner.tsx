import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { brandImages } from "@/data/products";

export default function HeroBanner() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={brandImages.hero}
          alt="Elegant woman wearing Lama'a jewelry"
          className="w-full h-full object-cover"
        />
        {/* Dark wash gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4" data-testid="text-hero-title">
          Lama'a
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto" data-testid="text-hero-tagline">
          Elegance, Plated in Gold.
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90" data-testid="text-hero-description">
          Discover timeless jewelry that captures your inner sparkle. Each piece is thoughtfully crafted 
          to celebrate the confident, elegant woman you are.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/collections" data-testid="link-shop-arrivals">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium"
            >
              Shop New Arrivals
            </Button>
          </Link>
          <Link href="/about" data-testid="link-our-story">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-medium"
            >
              Our Story
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}