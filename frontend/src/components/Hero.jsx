import React from 'react';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PROFILE, METRICS } from '../data';
import photo from '../assets/profile-photo.jpg';

const Hero = () => (
  <section id="top" className="hero" aria-labelledby="hero-title">
    <div className="container hero__grid">
      <div className="hero__copy">
        <p className="status"><span className="status__dot" aria-hidden="true" />Open to new roles</p>
        <h1 id="hero-title" className="hero__title">
          {PROFILE.name}
          <span className="hero__role">{PROFILE.role}</span>
        </h1>
        <p className="hero__tagline">{PROFILE.tagline}</p>
        <p className="hero__summary">{PROFILE.summary}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={PROFILE.resume} download="KundanVyas_Resume.pdf">
            <FaDownload aria-hidden="true" /> Download resume
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch <FaArrowRight aria-hidden="true" />
          </a>
        </div>

        <ul className="socials" aria-label="Profiles">
          <li><a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><FaGithub aria-hidden="true" /></a></li>
          <li><a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><FaLinkedin aria-hidden="true" /></a></li>
          <li><a href={`mailto:${PROFILE.email}`} aria-label="Send an email"><FaEnvelope aria-hidden="true" /></a></li>
        </ul>
      </div>

      <figure className="hero__photo">
        <img src={photo} alt="Portrait of Kundan Vyas" width="480" height="480" />
        <figcaption>
          <strong>47Billion</strong>
          <span>DevOps Engineer · Sep 2025 – Present</span>
        </figcaption>
      </figure>
    </div>

    <div className="container">
      <dl className="metrics">
        {METRICS.map(m => (
          <div className="metric" key={m.label}>
            <dt className="metric__label">{m.label}</dt>
            <dd className="metric__value">{m.value}</dd>
            <dd className="metric__note">{m.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
