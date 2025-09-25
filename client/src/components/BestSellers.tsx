import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ProductCard from "./ProductCard";
import { mockProducts } from "@/data/products";

export default function BestSellers() {
  // TODO: Replace with actual bestseller data from backend
  const bestSellers = mockProducts.filter(product => product.bestseller === 1);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-bestsellers-title">
            Best Sellers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-bestsellers-description">
            Our customers' favorite pieces, loved for their timeless beauty and exceptional quality.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {bestSellers.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showQuickView={true}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/collections" data-testid="link-shop-all">
            <Button size="lg" className="px-8">
              Shop All Jewelry
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}