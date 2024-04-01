import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import navStyles from '../styles/navLinks.module.css';
import buttonStyles from '../styles/button.module.css';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.headerLinks}>
        <div className={styles.headerLogo}>
          <Image
            src='/Artisan.png'
            alt='Logo'
            width={50}
            height={50}
          />
        </div>
        <nav className={navStyles.headerNav}>
  <ul className={navStyles.navLinks}>
    <li className={router.pathname === '/Home' ? navStyles.active : ''}>
      <button className={`${buttonStyles.button} ${router.pathname === '/Home' ? buttonStyles.active : ''}`} onClick={() => router.push('/Home')}>
        Home
      </button>
    </li>
    <li className={router.pathname === '/products' ? navStyles.active : ''}>
      <button className={`${buttonStyles.button} ${router.pathname === '/products' ? buttonStyles.active : ''}`} onClick={() => router.push('/products')}>
        Products
      </button>
    </li>
    <li className={router.pathname === '/artisans' ? navStyles.active : ''}>
      <button className={`${buttonStyles.button} ${router.pathname === '/artisans' ? buttonStyles.active : ''}`} onClick={() => router.push('/artisans')}>
        Artisans
      </button>
    </li>
    <li className={router.pathname === '/about' ? navStyles.active : ''}>
      <button className={`${buttonStyles.button} ${router.pathname === '/about' ? buttonStyles.active : ''}`} onClick={() => router.push('/about')}>
        About
      </button>
    </li>
  </ul>
</nav>
      </div>
    </header>
  );
};

export default Header;