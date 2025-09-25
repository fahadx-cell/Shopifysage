import ProductCard from '../ProductCard';
import { mockProducts } from '@/data/products';

export default function ProductCardExample() {
  return (
    <div className="p-6 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {mockProducts.slice(0, 3).map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            showQuickView={true}
          />
        ))}
      </div>
    </div>
  );
}