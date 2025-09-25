import Header from "@/components/Header";
import CollectionsPage from "@/components/CollectionsPage";
import Footer from "@/components/Footer";

export default function Collections() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <CollectionsPage />
      </main>
      <Footer />
    </div>
  );
}