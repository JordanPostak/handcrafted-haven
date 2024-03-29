// pages/products/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product data based on the ID

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
      {/* Add product details here */}
    </div>
  );
};

export default ProductPage;