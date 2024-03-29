import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductPage: React.FC = () => {
  // Sample product data for demonstration
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <div>
      <Header />
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`} passHref>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default ProductPage;