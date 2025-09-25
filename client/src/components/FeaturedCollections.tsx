import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { brandImages } from "@/data/products";

const collections = [
  {
    title: "Necklaces",
    description: "Delicate chains and statement pieces",
    image: brandImages.necklace,
    href: "/collections?category=necklaces",
    count: "12 pieces"
  },
  {
    title: "Earrings", 
    description: "From studs to dramatic drops",
    image: brandImages.earrings,
    href: "/collections?category=earrings",
    count: "18 pieces"
  },
  {
    title: "Sets",
    description: "Perfectly matched jewelry sets",
    image: brandImages.flatLay,
    href: "/collections?category=sets", 
    count: "8 pieces"
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-collections-title">
            Featured Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-collections-description">
            Discover our carefully curated collections, each designed to capture different facets of your unique style.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card key={collection.title} className="group hover-elevate transition-all duration-300" data-testid={`card-collection-${index}`}>
              <Link href={collection.href}>
                <CardContent className="p-0">
                  {/* Collection Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-md">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-testid={`img-collection-${index}`}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    
                    {/* Collection Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-sm opacity-80" data-testid={`text-collection-count-${index}`}>
                        {collection.count}
                      </span>
                    </div>
                  </div>

                  {/* Collection Details */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2" data-testid={`text-collection-title-${index}`}>
                      {collection.title}
                    </h3>
                    <p className="text-muted-foreground mb-4" data-testid={`text-collection-description-${index}`}>
                      {collection.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      data-testid={`button-explore-${index}`}
                    >
                      Explore Collection
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="text-center mt-12">
          <Link href="/collections" data-testid="link-view-all-collections">
            <Button size="lg" variant="outline" className="px-8">
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}