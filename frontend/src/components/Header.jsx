import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV, PROFILE } from '../data';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // The last section is shorter than the viewport, so pin it active at page bottom.
      if (window.scrollY < 120) setActive('');
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive(NAV[NAV.length - 1].id);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = NAV.map(n => document.getElementById(n.id)).filter(Boolean);
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">KV</span>
          <span className="brand__name">{PROFILE.name}</span>
        </a>

        <nav id="site-nav" className={`nav${open ? ' nav--open' : ''}`} aria-label="Primary">
          <ul>
            {NAV.map(n => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={active === n.id ? 'is-active' : ''}
                  aria-current={active === n.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary btn--sm nav__cta" href={PROFILE.resume} download="KundanVyas_Resume.pdf">
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(o => !o)}
        >
          {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
