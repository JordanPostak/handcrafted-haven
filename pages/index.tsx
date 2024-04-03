/* pages/index.tsx */

import React from 'react';
import Link from 'next/link';
import styles from '../styles/landingPage.module.css';
import buttonStyles from '../styles/button.module.css';

const LandingPage: React.FC = () => {
  return (
    <div className={styles['landing-page-wrapper']}>
      <div className={styles['landing-page-background']}></div>
      <div className={styles['landing-page']}>
        {/* Hero Section */}
        <section className={styles['hero-section']}>
          <img
            src="/Artisan.png"
            alt="Logo"
            className={styles['logo-image']}
          />
          <h1 className={styles['hero-title']}>Welcome to Handcrafted Haven</h1>
          <p className={styles['hero-description']}>Raise your brand to new heights</p>
          <Link href="/Home">
            <button className={buttonStyles['button']}>Get Started</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;