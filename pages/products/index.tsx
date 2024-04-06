// pages/products/index.tsx

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getAllProducts } from '../../utils/database'; // Import the getAllProducts function

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]); // State to store products

  useEffect(() => {
    // Fetch products from the database
    const fetchProducts = async () => {
      try {
        // Fetch all products from the database
        const fetchedProducts = await getAllProducts();
        
        console.log("Fetched Products:", fetchedProducts); // Log fetched products

        // Update state with fetched products
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the fetchProducts function
  }, []); // Empty dependency array to run once on component mount

  return (
    <Layout> {/* Wrap the content with the Layout component */}
      <div>
        <h1>Products</h1>
        <ul>
          {products.map(product => (
            <li key={product.product_id}>
              <Link href={`/products/${product.product_id}`} passHref>
                <a>{product.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProductPage;