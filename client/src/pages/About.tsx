import Header from "@/components/Header";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}