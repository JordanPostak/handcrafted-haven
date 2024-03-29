import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ArtisanPage: React.FC = () => {
  // Sample artisan data for demonstration
  const artisans = [
    { id: 1, name: 'Artisan 1' },
    { id: 2, name: 'Artisan 2' },
    { id: 3, name: 'Artisan 3' },
  ];

  return (
    <div>
      <Header />
      <h1>Artisans</h1>
      <ul>
        {artisans.map(artisan => (
          <li key={artisan.id}>
            <Link href={`/artisans/${artisan.id}`} passHref>
              {artisan.name}
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default ArtisanPage;