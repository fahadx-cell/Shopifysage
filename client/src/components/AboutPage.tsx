import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Heart, Sparkles, Users, Award } from "lucide-react";
import { brandImages } from "@/data/products";

const values = [
  {
    icon: Sparkles,
    title: "Timeless Elegance",
    description: "Every piece is designed to transcend trends, offering timeless beauty that enhances your natural radiance."
  },
  {
    icon: Heart,
    title: "Crafted with Love",
    description: "Our artisans pour passion and precision into each piece, ensuring exceptional quality and attention to detail."
  },
  {
    icon: Users,
    title: "Celebrating Women",
    description: "We create jewelry for the confident, sophisticated woman who values quality and appreciates fine craftsmanship."
  },
  {
    icon: Award,
    title: "Quality Promise",
    description: "We use only the finest materials and gold-plating techniques to ensure lasting beauty and durability."
  }
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-hero-title">
          The Story Behind <span className="text-primary">Lama'a</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-hero-description">
          Born from a passion for beautiful, accessible luxury, Lama'a celebrates the glimmer within every woman. 
          Our name means "sparkle" in Arabic, reflecting our mission to help you shine with confidence and grace.
        </p>
      </section>

      {/* Main Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground" data-testid="text-about-story-title">
            Where Beauty Meets Purpose
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p data-testid="text-about-story-paragraph-1">
              Lama'a was founded with a simple yet powerful vision: to create jewelry that empowers women to express 
              their unique style and confidence. We believe that true beauty comes from within, and our pieces are 
              designed to enhance and celebrate that inner radiance.
            </p>
            <p data-testid="text-about-story-paragraph-2">
              Our journey began with a deep appreciation for traditional craftsmanship combined with contemporary 
              design sensibilities. Each piece in our collection tells a story of elegance, quality, and the 
              timeless appeal of gold that has captivated women for generations.
            </p>
            <p data-testid="text-about-story-paragraph-3">
              From our carefully selected materials to our meticulous attention to detail, every aspect of the 
              Lama'a experience is crafted to make you feel extraordinary. Because when you wear Lama'a, you're 
              not just wearing jewelry – you're wearing confidence, elegance, and your own unique sparkle.
            </p>
          </div>
          <Link href="/collections" data-testid="link-about-explore-collections">
            <Button size="lg" className="mt-6">
              Explore Our Collections
            </Button>
          </Link>
        </div>
        
        <div className="relative">
          <img
            src={brandImages.craftsmanship}
            alt="Artisan crafting Lama'a jewelry"
            className="w-full rounded-lg shadow-lg"
            data-testid="img-about-craftsmanship"
          />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4" data-testid="text-about-values-title">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-values-description">
            The principles that guide everything we do, from design to delivery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={value.title} className="text-center hover-elevate" data-testid={`card-value-${index}`}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-value-description-${index}`}>
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="bg-card rounded-lg p-8 md:p-12 mb-20">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6" data-testid="text-about-quality-title">
            Our Quality Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground" data-testid="text-quality-materials-title">
                Premium Materials
              </h3>
              <p className="text-sm text-muted-foreground" data-testid="text-quality-materials-description">
                We use only the finest brass base with high-quality gold plating that maintains its luster and beauty over time.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground" data-testid="text-quality-craftsmanship-title">
                Expert Craftsmanship
              </h3>
              <p className="text-sm text-muted-foreground" data-testid="text-quality-craftsmanship-description">
                Each piece is carefully crafted by skilled artisans who bring years of experience and passion to their work.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground" data-testid="text-quality-care-title">
                Lasting Beauty
              </h3>
              <p className="text-sm text-muted-foreground" data-testid="text-quality-care-description">
                With proper care, your Lama'a jewelry will maintain its elegance and sparkle for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-primary/5 rounded-lg p-8 md:p-12">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-4" data-testid="text-about-cta-title">
          Ready to Discover Your Sparkle?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-about-cta-description">
          Join thousands of confident women who have made Lama'a jewelry part of their signature style.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/collections" data-testid="link-about-cta-shop">
            <Button size="lg" className="px-8">
              Shop Our Collection
            </Button>
          </Link>
          <Link href="/contact" data-testid="link-about-cta-contact">
            <Button size="lg" variant="outline" className="px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}