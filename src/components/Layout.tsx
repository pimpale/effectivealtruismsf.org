import React from 'react';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="container mx-auto px-4 py-6 text-sm text-base-content/60">
        &copy; Effective Altruism San Francisco - MIT Licensed
      </footer>
    </div>
  );
};

export default Layout;


