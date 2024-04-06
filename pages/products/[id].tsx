// pages/products/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product data based on the ID

  return (
    <Layout>
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
      {/* Add product details here */}
    </div>
    </Layout>
  );
};

export default ProductPage;