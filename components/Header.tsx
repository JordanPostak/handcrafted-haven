import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className='header'>
      <div className='headerLinks'>
        <div className='headerLogo'>
          <Image
            src='/Artisan.png'
            alt='Logo'
            width={50}
            height={50}
          />
        </div>
        <nav className='headerNav'>
          <ul className='navLinks'>
            <li className={router.pathname === '/Home' ? 'active' : ''}>
              <Link href='/Home'>Home</Link>
            </li>
            <li className={router.pathname === '/products' ? 'active' : ''}>
              <Link href='/products'>Products</Link>
            </li>
            <li className={router.pathname === '/artisans' ? 'active' : ''}>
              <Link href='/artisans'>Artisans</Link>
            </li>
            <li className={router.pathname === '/about' ? 'active' : ''}>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;