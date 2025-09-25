import type { Product } from "@shared/schema";
import heroImage from "@assets/generated_images/Hero_lifestyle_model_portrait_21aafece.png";
import necklaceImage from "@assets/generated_images/Gold_necklace_product_shot_f37a6274.png";
import flatLayImage from "@assets/generated_images/Jewelry_flat_lay_styling_46114c85.png";
import earringsImage from "@assets/generated_images/Earrings_collection_display_8093c309.png";
import craftsmanshipImage from "@assets/generated_images/Craftsmanship_story_image_e8eade3c.png";

// TODO: Replace with real product data from backend
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Delicate Gold Chain Necklace",
    description: "Elegant minimalist necklace perfect for everyday elegance. Crafted with precision and plated in lustrous gold.",
    price: "89.00",
    category: "necklaces",
    images: [necklaceImage, heroImage],
    featured: 1,
    bestseller: 1,
  },
  {
    id: "2", 
    name: "Classic Gold Stud Earrings",
    description: "Timeless stud earrings that complement any outfit. Hypoallergenic and comfortable for all-day wear.",
    price: "65.00",
    category: "earrings",
    images: [earringsImage, flatLayImage],
    featured: 1,
    bestseller: 1,
  },
  {
    id: "3",
    name: "Elegant Drop Earrings",
    description: "Sophisticated drop earrings that add a touch of glamour to any ensemble. Perfect for special occasions.",
    price: "120.00", 
    category: "earrings",
    images: [earringsImage, heroImage],
    featured: 0,
    bestseller: 1,
  },
  {
    id: "4",
    name: "Layered Gold Bracelet",
    description: "Beautiful layered bracelet that creates an effortless stacked look. Adjustable for perfect fit.",
    price: "95.00",
    category: "bracelets", 
    images: [flatLayImage, necklaceImage],
    featured: 1,
    bestseller: 0,
  },
  {
    id: "5",
    name: "Statement Ring Set",
    description: "Curated set of three stunning rings designed to be worn together or separately.",
    price: "150.00",
    category: "rings",
    images: [flatLayImage, craftsmanshipImage],
    featured: 0,
    bestseller: 1,
  },
  {
    id: "6",
    name: "Enchanted Necklace & Earring Set",
    description: "Complete jewelry set featuring matching necklace and earrings. Perfect for gifting or special occasions.",
    price: "200.00",
    category: "sets",
    images: [heroImage, necklaceImage, earringsImage],
    featured: 1,
    bestseller: 1,
  }
];

export const productCategories = [
  { value: "all", label: "All Jewelry" },
  { value: "necklaces", label: "Necklaces" },
  { value: "earrings", label: "Earrings" },
  { value: "bracelets", label: "Bracelets" },
  { value: "rings", label: "Rings" },
  { value: "sets", label: "Sets" },
];

export const brandImages = {
  hero: heroImage,
  necklace: necklaceImage,
  flatLay: flatLayImage,
  earrings: earringsImage,
  craftsmanship: craftsmanshipImage,
};