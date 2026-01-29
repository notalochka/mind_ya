import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header style={{ 
      backgroundColor: 'var(--color-bg)', 
      padding: '10px 200px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Image 
        src="/logo.jpg" 
        alt="Logo" 
        width={222} 
        height={78}
        style={{ objectFit: 'contain' }}
      />
    </header>
  );
};

export default Header;
