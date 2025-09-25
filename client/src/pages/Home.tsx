import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeaturedCollections from "@/components/FeaturedCollections";
import BestSellers from "@/components/BestSellers";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <FeaturedCollections />
        <BestSellers />
        <BrandStory />
      </main>
      <Footer />
    </div>
  );
}