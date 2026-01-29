import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image 
        src="/logo.jpg" 
        alt="Logo" 
        width={222} 
        height={78}
        className={styles.logo}
      />
    </header>
  );
};

export default Header;
