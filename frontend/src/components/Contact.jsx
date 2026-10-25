import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SectionHead } from './Section';
import { PROFILE } from '../data';

const ROWS = [
  { icon: FaEnvelope, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: FaPhone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/[^+\d]/g, '')}` },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/kundan-vyas', href: PROFILE.linkedin },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/Kundan547', href: PROFILE.github },
];

const Contact = () => (
  <section id="contact" className="section" aria-labelledby="contact-title">
    <div className="container">
      <div className="contact">
        <div>
          <SectionHead
            id="contact-title"
            eyebrow="Contact"
            title="Let's talk about your platform"
            intro="I am looking for full-time DevOps and cloud engineering roles. The fastest way to reach me is email."
          />
          <a className="btn btn--primary" href={`mailto:${PROFILE.email}?subject=Opportunity%20for%20Kundan%20Vyas`}>
            <FaEnvelope aria-hidden="true" /> Email me
          </a>
        </div>
        <ul className="contact__list">
          {ROWS.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="contact__icon" aria-hidden="true"><Icon /></span>
                <span>
                  <span className="contact__label">{label}</span>
                  <span className="contact__value">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Contact;
