import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
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
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/product'>Products</Link></li>
            <li><Link href='/artisans'>Artisans</Link></li>
            <li><Link href='/about'>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;