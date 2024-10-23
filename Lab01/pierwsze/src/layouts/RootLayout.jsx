import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

function RootLayout({ children, items }) {
  return (
    <div>
      <NavBarMenu items={items} />
      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
