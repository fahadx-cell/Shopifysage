import { useParams } from "wouter";
import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";
import Footer from "@/components/Footer";
import { mockProducts } from "@/data/products";

export default function Product() {
  const { id } = useParams();
  
  // TODO: Replace with actual product fetch from backend
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  );
}