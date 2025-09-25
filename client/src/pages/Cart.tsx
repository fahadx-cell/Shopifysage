import Header from "@/components/Header";
import ShoppingCart from "@/components/ShoppingCart";
import Footer from "@/components/Footer";

export default function Cart() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  );
}