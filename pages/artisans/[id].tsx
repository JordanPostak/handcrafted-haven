// pages/artisans/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const ArtisanPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch artisan data based on the ID

  return (
    <Layout>
    <div>
      <h1>Artisan Page</h1>
      <p>Artisan ID: {id}</p>
      {/* Add artisan details here */}
    </div>
    </Layout>
  );
};

export default ArtisanPage;