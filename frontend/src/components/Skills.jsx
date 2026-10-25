import React from 'react';
import { SectionHead } from './Section';
import { SKILLS } from '../data';

const Skills = () => (
  <section id="skills" className="section" aria-labelledby="skills-title">
    <div className="container">
      <SectionHead
        id="skills-title"
        eyebrow="Skills"
        title="Tools I use in production"
        intro="Grouped by what they are used for, and drawn from the systems I run day to day."
      />
      <div className="skills">
        {SKILLS.map(s => (
          <div className="skill" key={s.group}>
            <h3 className="skill__group">{s.group}</h3>
            <ul className="chips">
              {s.items.map(i => <li key={i} className="chip">{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
