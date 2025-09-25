import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import type { Product } from "@shared/schema";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  showQuickView?: boolean;
}

export default function ProductCard({ product, showQuickView = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    console.log('Added to cart:', product.name); // TODO: remove mock functionality
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Quick view for:', product.name); // TODO: remove mock functionality
  };

  return (
    <Card 
      className="group cursor-pointer hover-elevate transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-product-${product.id}`}
    >
      <Link href={`/product/${product.id}`}>
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-t-md">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-testid={`img-product-${product.id}`}
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.featured === 1 && (
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  Featured
                </Badge>
              )}
              {product.bestseller === 1 && (
                <Badge variant="secondary" className="bg-chart-1 text-white">
                  Best Seller
                </Badge>
              )}
            </div>

            {/* Quick Actions Overlay */}
            <div className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <Button
                size="sm"
                onClick={handleAddToCart}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid={`button-add-cart-${product.id}`}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              {showQuickView && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={handleQuickView}
                  data-testid={`button-quick-view-${product.id}`}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Quick View
                </Button>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4 space-y-2">
            <h3 className="font-medium text-foreground line-clamp-2" data-testid={`text-product-name-${product.id}`}>
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-product-description-${product.id}`}>
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-primary" data-testid={`text-product-price-${product.id}`}>
                ${product.price}
              </span>
              <span className="text-xs text-muted-foreground capitalize">
                {product.category}
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}