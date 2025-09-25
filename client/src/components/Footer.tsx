import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and exclusive offers.",
      });
      setEmail("");
      console.log('Newsletter subscription:', email); // TODO: remove mock functionality
    }
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const customerCare = [
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Care Instructions", href: "/care" },
    { name: "FAQ", href: "/faq" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/lamaa_jewelry" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/lamaa.jewelry" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/lamaa_jewelry" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid="text-newsletter-title">
            Stay in the Loop
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto" data-testid="text-newsletter-description">
            Be the first to know about new collections, exclusive offers, and styling tips.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
              data-testid="input-newsletter-email"
            />
            <Button type="submit" data-testid="button-newsletter-subscribe">
              Subscribe
            </Button>
          </form>
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-foreground" data-testid="text-footer-brand">
              Lama'a
            </h3>
            <p className="text-muted-foreground text-sm">
              Elegance, Plated in Gold. Discover jewelry that celebrates your unique sparkle and confident style.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-social-${social.name.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground" data-testid="text-quick-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground" data-testid="text-customer-care-title">
              Customer Care
            </h4>
            <ul className="space-y-2">
              {customerCare.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} data-testid={`link-footer-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground" data-testid="text-contact-info-title">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span data-testid="text-contact-email">hello@lamaa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span data-testid="text-contact-phone">+92 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span data-testid="text-contact-address">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2024 Lama'a Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/privacy" data-testid="link-footer-privacy">
              <span className="hover:text-primary transition-colors">Privacy Policy</span>
            </Link>
            <Link href="/terms" data-testid="link-footer-terms">
              <span className="hover:text-primary transition-colors">Terms of Service</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}