import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ShoppingBag, Heart, Share2, Star } from "lucide-react";
import type { Product } from "@shared/schema";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import ProductCard from "./ProductCard";
import { mockProducts } from "@/data/products";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  // TODO: Replace with actual related products from backend
  const relatedProducts = mockProducts.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
    console.log('Added to cart:', { product: product.name, quantity }); // TODO: remove mock functionality
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted 
        ? `${product.name} removed from your wishlist.`
        : `${product.name} added to your wishlist.`,
    });
    console.log('Wishlist action:', { product: product.name, wishlisted: !isWishlisted }); // TODO: remove mock functionality
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Product link copied to clipboard.",
    });
    console.log('Shared product:', product.name); // TODO: remove mock functionality
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-card">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
              data-testid="img-product-main"
            />
          </div>
          
          {/* Image Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                  data-testid={`button-thumbnail-${index}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Badges */}
          <div className="flex gap-2">
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

          {/* Title and Price */}
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-2" data-testid="text-product-title">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-primary" data-testid="text-product-price">
                ${product.price}
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(24 reviews)</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-product-description">
              {product.description}
            </p>
          </div>

          {/* Quantity and Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Quantity:</label>
              <div className="flex items-center border border-border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-accent transition-colors"
                  data-testid="button-quantity-decrease"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-border" data-testid="text-quantity">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-accent transition-colors"
                  data-testid="button-quantity-increase"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleAddToCart}
                className="flex-1"
                size="lg"
                data-testid="button-add-to-cart"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWishlist}
                className={isWishlisted ? "text-red-500 border-red-500" : ""}
                data-testid="button-wishlist"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleShare}
                data-testid="button-share"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Separator />

          {/* Product Details Collapsibles */}
          <div className="space-y-4">
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium hover:text-primary transition-colors" data-testid="button-materials-care">
                Materials & Care
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2 text-muted-foreground">
                <ul className="space-y-1 text-sm">
                  <li>• Gold-plated brass with hypoallergenic coating</li>
                  <li>• Nickel-free and lead-free materials</li>
                  <li>• Store in provided jewelry pouch when not wearing</li>
                  <li>• Clean gently with soft cloth, avoid harsh chemicals</li>
                  <li>• Remove before swimming, showering, or exercising</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium hover:text-primary transition-colors" data-testid="button-shipping-returns">
                Shipping & Returns
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2 text-muted-foreground">
                <ul className="space-y-1 text-sm">
                  <li>• Free shipping on orders over $75</li>
                  <li>• Standard delivery: 3-5 business days</li>
                  <li>• Express delivery: 1-2 business days (additional cost)</li>
                  <li>• 30-day return policy for unworn items</li>
                  <li>• Free returns with prepaid return label</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8" data-testid="text-related-products-title">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}