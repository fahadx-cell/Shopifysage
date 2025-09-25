import ProductDetails from '../ProductDetails';
import { mockProducts } from '@/data/products';

export default function ProductDetailsExample() {
  return <ProductDetails product={mockProducts[0]} />;
}