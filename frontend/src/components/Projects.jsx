import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { SectionHead } from './Section';
import { PROJECTS, PROFILE, FEATURED } from '../data';

const Projects = () => (
  <section id="projects" className="section section--tint" aria-labelledby="proj-title">
    <div className="container">
      <SectionHead
        id="proj-title"
        eyebrow="Projects"
        title="Hands-on work"
        intro="One production automation project from work, plus personal projects where I practise the same patterns. The personal ones link to their source."
      />
      <article className="featured">
        <p className="featured__eyebrow">{FEATURED.eyebrow}</p>
        <h3 className="featured__title">{FEATURED.title}</h3>
        <p className="featured__text">{FEATURED.summary}</p>
        <ul className="featured__points">
          {FEATURED.points.map(pt => <li key={pt}>{pt}</li>)}
        </ul>
        <ul className="chips chips--sm" aria-label="Technologies">
          {FEATURED.tags.map(t => <li key={t} className="chip">{t}</li>)}
        </ul>
      </article>
      <ul className="cards">
        {PROJECTS.map(p => (
          <li key={p.title} className="card">
            <h3 className="card__title">{p.title}</h3>
            <p className="card__text">{p.summary}</p>
            <ul className="chips chips--sm" aria-label="Technologies">
              {p.tags.map(t => <li key={t} className="chip">{t}</li>)}
            </ul>
            <a className="card__link" href={p.href} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> View source
              <span className="sr-only"> for {p.title} (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="more">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
          More on GitHub <FaArrowRight aria-hidden="true" />
        </a>
      </p>
    </div>
  </section>
);

export default Projects;
