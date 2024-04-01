import Image from 'next/image';
import Link from 'next/link';
import footerStyles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.footerLinks}>
        <div className={footerStyles.footerLogo}>
          <Image
            src='/Artisan.png'
            alt='Logo'
            width={50}
            height={50}
          />
        </div>
        <div className={footerStyles.footerGroup}>
          <p>Group 6  - WDD430 </p>
        </div>
        <div className={footerStyles.footerSocials}>
          <a href='https://www.facebook.com/'>
            <Image
              src="/facebook.png"
              alt='Facebook'
              width={50}
              height={50}
            />
          </a>
          <a href='https://www.instagram.com/'>
            <Image
              src='/instagram.png'
              alt='Instagram'
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </div>
  );
}