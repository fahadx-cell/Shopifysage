import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

export default function ShoppingCart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
    console.log('Updated quantity:', { productId, newQuantity }); // TODO: remove mock functionality
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast({
      title: "Item removed",
      description: `${productName} has been removed from your cart.`,
    });
    console.log('Removed from cart:', productName); // TODO: remove mock functionality
  };

  const handleCheckout = () => {
    // TODO: Implement checkout functionality
    toast({
      title: "Checkout",
      description: "Checkout functionality will be implemented soon.",
    });
    console.log('Checkout initiated with items:', cartItems); // TODO: remove mock functionality
  };

  const cartTotal = getCartTotal();
  const shipping = cartTotal > 75 ? 0 : 10;
  const finalTotal = cartTotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-8" data-testid="text-cart-title">
          Shopping Cart
        </h1>
        
        <Card className="text-center py-12">
          <CardContent>
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2" data-testid="text-empty-cart-title">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-6" data-testid="text-empty-cart-description">
              Discover our beautiful collection of gold-plated jewelry.
            </p>
            <Link href="/collections" data-testid="link-continue-shopping">
              <Button size="lg">
                Continue Shopping
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="font-serif text-3xl font-bold text-foreground mb-8" data-testid="text-cart-title">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.product.id} data-testid={`card-cart-item-${item.product.id}`}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 rounded-md overflow-hidden bg-card flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      data-testid={`img-cart-item-${item.product.id}`}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-foreground" data-testid={`text-cart-item-name-${item.product.id}`}>
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-cart-item-description-${item.product.id}`}>
                          {item.product.description}
                        </p>
                        <div className="flex gap-2 mt-2">
                          {item.product.featured === 1 && (
                            <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs">
                              Featured
                            </Badge>
                          )}
                          {item.product.bestseller === 1 && (
                            <Badge variant="secondary" className="bg-chart-1 text-white text-xs">
                              Best Seller
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.product.id, item.product.name)}
                        className="text-muted-foreground hover:text-destructive"
                        data-testid={`button-remove-${item.product.id}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border rounded-md">
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-accent transition-colors disabled:opacity-50"
                          disabled={item.quantity <= 1}
                          data-testid={`button-decrease-${item.product.id}`}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 py-1 border-x border-border text-sm" data-testid={`text-quantity-${item.product.id}`}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-accent transition-colors"
                          data-testid={`button-increase-${item.product.id}`}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground" data-testid={`text-item-total-${item.product.id}`}>
                          ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ${item.product.price} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Clear Cart Button */}
          <div className="flex justify-between items-center pt-4">
            <Link href="/collections" data-testid="link-continue-shopping-cart">
              <Button variant="outline">
                Continue Shopping
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={clearCart}
              className="text-destructive hover:text-destructive"
              data-testid="button-clear-cart"
            >
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle data-testid="text-order-summary-title">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span data-testid="text-subtotal">${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className={shipping === 0 ? "text-green-600" : ""} data-testid="text-shipping">
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              
              {cartTotal < 75 && (
                <p className="text-xs text-muted-foreground" data-testid="text-free-shipping-notice">
                  Add ${(75 - cartTotal).toFixed(2)} more for free shipping
                </p>
              )}
              
              <Separator />
              
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span data-testid="text-total">${finalTotal.toFixed(2)}</span>
              </div>
              
              <Button 
                className="w-full" 
                size="lg" 
                onClick={handleCheckout}
                data-testid="button-checkout"
              >
                Proceed to Checkout
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Secure checkout with SSL encryption
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}