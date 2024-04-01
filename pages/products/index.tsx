import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const ProductPage: React.FC = () => {
  // Sample product data for demonstration
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <Layout> {/* Wrap the content with the Layout component */}
      <div>
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
      </div>
    </Layout>
  );
};

export default ProductPage;