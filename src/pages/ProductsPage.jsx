// src/pages/ProductsPage.jsx
// import { allProducts } from '../data/allProducts';
// import ProductCard from '../components/ProductCard';
import ProductCard from './../Components/ProductCard';
import { allProducts } from './../data/Product';

export default function ProductsPage() {
  return (
    <main>
      {allProducts.map((product) => (
        <div key={product.slug} className="snap-slide">
          <ProductCard product={product} />
        </div>
      ))}
    </main>
  );
}


