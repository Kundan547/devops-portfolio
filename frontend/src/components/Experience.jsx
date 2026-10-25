import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { SectionHead } from './Section';
import { EXPERIENCE, EDUCATION } from '../data';

const VISIBLE = 5;

const Role = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  const hidden = job.bullets.length - VISIBLE;
  const shown = expanded || hidden <= 0 ? job.bullets : job.bullets.slice(0, VISIBLE);
  const listId = `bullets-${job.period.replace(/\W+/g, '-')}`;

  return (
    <article className={`role${job.current ? ' role--current' : ''}`}>
      <div className="role__meta">
        <p className="role__period">{job.period}</p>
        {job.note && <p className="role__note">{job.note}</p>}
      </div>
      <div className="role__body">
        <h3 className="role__title">{job.role}</h3>
        <p className="role__company">{job.company}</p>
        {job.summary && <p className="role__summary">{job.summary}</p>}
        <ul id={listId} className="role__list">
          {shown.map(b => <li key={b}>{b}</li>)}
        </ul>
        {hidden > 0 && (
          <button
            type="button"
            className="link-btn"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded(v => !v)}
          >
            {expanded ? 'Show fewer' : `Show ${hidden} more`}
            <FaChevronDown aria-hidden="true" className={expanded ? 'flip' : ''} />
          </button>
        )}
      </div>
    </article>
  );
};

const Experience = () => (
  <section id="experience" className="section section--tint" aria-labelledby="exp-title">
    <div className="container">
      <SectionHead id="exp-title" eyebrow="Experience" title="Where I have worked" />
      <div className="roles">
        {EXPERIENCE.map(job => <Role key={job.period} job={job} />)}
      </div>

      <h3 className="subhead">Education</h3>
      <ul className="edu">
        {EDUCATION.map(e => (
          <li key={e.title} className="edu__item">
            <div>
              <p className="edu__title">{e.title}</p>
              <p className="edu__place">{e.place}</p>
            </div>
            <p className="edu__meta">{e.period} · {e.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
