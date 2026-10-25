import React from 'react';
import { PROFILE } from '../data';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p>&copy; {new Date().getFullYear()} {PROFILE.name}</p>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
