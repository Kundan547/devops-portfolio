import React from 'react';
import { FaMotorcycle, FaRoute, FaMountain, FaCompass } from 'react-icons/fa';
import { SectionHead } from './Section';

const POINTS = [
  { title: 'Owns production end-to-end', text: 'Cluster provisioning, CI/CD design, incident response and compliance — handled independently, including under pressure.' },
  { title: 'GitOps by default', text: 'Every deploy, access rule and infrastructure change goes through a pull request, so it is reviewable and auditable.' },
  { title: 'Automation that scales the team', text: 'Claude-powered agents and MCP servers generate IaC and run scoped, least-privilege operational checks.' },
];

const INTERESTS = [
  { icon: FaMotorcycle, label: 'Bike riding' },
  { icon: FaRoute, label: 'Long trips' },
  { icon: FaMountain, label: 'Mountain lover' },
  { icon: FaCompass, label: 'Adventure sports' },
];

const About = () => (
  <section id="about" className="section" aria-labelledby="about-title">
    <div className="container">
      <SectionHead id="about-title" eyebrow="About" title="DevOps engineer focused on reliable, auditable delivery" />
      <div className="about">
        <p className="about__lead">
          I specialize in Kubernetes architecture, GitOps delivery pipelines and Infrastructure-as-Code across AWS and Azure.
          At 47Billion I started as an intern and was promoted to DevOps Engineer, where I now own the platform that
          ships production releases for multiple environments.
        </p>
        <ul className="about__points">
          {POINTS.map(p => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="beyond">
        <div>
          <p className="beyond__label">Beyond the terminal</p>
          <p className="beyond__text">
            Away from the keyboard I am on a bike: long rides, mountain roads and adventure trips.
            The same habits show up at work: plan the route, check the gear, stay calm when conditions change.
          </p>
        </div>
        <ul className="beyond__tags" aria-label="Interests">
          {INTERESTS.map(({ icon: Icon, label }) => (
            <li key={label}><Icon aria-hidden="true" /> {label}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
