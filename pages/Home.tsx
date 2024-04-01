// Home.tsx

import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="home-page-wrapper">

        {/* Hero Section */}
        <section className="hero">
          <h1>Home Page</h1>
          <p>Discover beautiful handcrafted items from talented artisans.</p>
        </section>

        {/* Featured Products Section */}
        <section className="featured-products">
          <h2>Featured Products</h2>
          {/* Add code to display featured products */}
        </section>

        {/* Browse Products Section */}
        <section className="browse-products">
          <h2>Browse Products</h2>
          {/* Add code to display browse products */}
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>Testimonials</h2>
          {/* Add code to display testimonials */}
        </section>

      </div>
    </Layout>
  );
};

export default Home;