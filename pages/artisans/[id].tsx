// pages/artisans/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';

const ArtisanPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch artisan data based on the ID

  return (
    <div>
      <h1>Artisan Page</h1>
      <p>Artisan ID: {id}</p>
      {/* Add artisan details here */}
    </div>
  );
};

export default ArtisanPage;