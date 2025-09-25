import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { brandImages } from "@/data/products";

export default function BrandStory() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground" data-testid="text-brand-story-title">
              The Art of <span className="text-primary">Glimmer</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p data-testid="text-brand-story-paragraph-1">
                "Lama'a" means glimmer in Arabic – that special sparkle that catches the light and captures hearts. 
                We believe every woman deserves to shine with confidence and grace.
              </p>
              <p data-testid="text-brand-story-paragraph-2">
                Our jewelry is more than adornment; it's a celebration of your unique radiance. Each piece is 
                thoughtfully crafted with attention to detail that honors both traditional craftsmanship and 
                contemporary elegance.
              </p>
              <p data-testid="text-brand-story-paragraph-3">
                From our atelier to your jewelry box, we ensure every Lama'a piece meets the highest standards 
                of quality and beauty. Because when you wear Lama'a, you're not just wearing jewelry – 
                you're wearing confidence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" data-testid="link-learn-more">
                <Button size="lg" className="px-8">
                  Learn Our Story
                </Button>
              </Link>
              <Link href="/collections" data-testid="link-explore-craftsmanship">
                <Button size="lg" variant="outline" className="px-8">
                  Explore Our Craft
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={brandImages.craftsmanship}
                alt="Artisan crafting Lama'a jewelry"
                className="w-full h-full object-cover"
                data-testid="img-brand-story"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}