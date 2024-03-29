// index.tsx

import React from 'react';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page-wrapper">
    <div className="landing-page-background"></div>
    <div className="landing-page">
        {/* Hero Section */}
        <section className="hero-section">
            <img
                src="/Artisan.png"
                alt="Logo"
                className="logo-image"
            />
            <h1 className="hero-title">Welcome to Handcrafted Haven</h1>
            <p className="hero-description">Raise your brand to new heights</p>
            <Link href="/Home">
                <button className="get-started-button">Get Started</button>
            </Link>
        </section>
        
        {/* Featured Products Section */}
        <section className="featured-products-section">
            <h2>Featured Products</h2>
            {/* Add code to display featured products */}
        </section>
    </div>
</div>
  );
};

export default LandingPage;