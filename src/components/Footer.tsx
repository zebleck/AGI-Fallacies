// Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">© {currentYear} AGI Fallacies. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
