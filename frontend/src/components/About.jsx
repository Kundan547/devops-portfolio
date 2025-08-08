import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section py-5" style={{ background: 'linear-gradient(to bottom right, #f8f9fa, #ffffff)' }}>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 
            className="section-title mb-4" 
            style={{ fontSize: '2.8rem', fontWeight: '700', color: '#1a1a1a' }}
          >
            About Me
          </h2>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="mx-auto">
          <Card 
            className="border-0 shadow-lg" 
            style={{ borderRadius: '18px', transition: 'transform 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Card.Body className="p-5" style={{ textAlign: 'justify', fontSize: '1.15rem', lineHeight: '1.8' }}>
              
              <p className="lead" style={{ fontSize: '1.3rem' }}>
                I am <strong>Kundan Vyas</strong>, a <strong>DevOps Engineer</strong> at 
                <strong> 47Billion, Indore</strong>, and an <strong>AWS Trainer</strong> with 
                <strong> 1.5+ years in AWS</strong> and <strong>2 years in DevOps</strong>.  
                My expertise spans <strong>cloud architecture, container orchestration, Infrastructure as Code, and CI/CD automation</strong>.
              </p>

              <h4 className="mt-4" style={{ fontWeight: '700', fontSize: '1.5rem', color: '#0d6efd' }}>Professional Journey</h4>
              <p>
                At <strong>47Billion</strong>, I design and deliver 
                <strong> secure, scalable, production-grade infrastructure</strong> using 
                <strong> AWS</strong>, <strong>Kubernetes</strong>, and <strong>Terraform</strong>.  
                My professional experience includes:
              </p>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Building <strong>modular Terraform architectures</strong> for multi-environment setups</li>
                <li>Deploying workloads on <strong>EKS</strong> and <strong>ECS (Fargate)</strong></li>
                <li>Integrating <strong>ArgoCD GitOps pipelines</strong> for app delivery</li>
                <li>Managing <strong>secure IAM roles & GitHub Actions OIDC</strong></li>
                <li>Implementing <strong>Backstage Developer Portals</strong></li>
                <li>Configuring <strong>Aurora PostgreSQL</strong>, <strong>ACM</strong>, and <strong>Route 53</strong></li>
              </ul>

              <h4 className="mt-4" style={{ fontWeight: '700', fontSize: '1.5rem', color: '#0d6efd' }}>Skills & Focus</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li><strong>Infrastructure as Code:</strong> Terraform, AWS CloudFormation</li>
                <li><strong>Containers & Orchestration:</strong> Docker, Kubernetes (EKS, K3s), Helm, ArgoCD</li>
                <li><strong>CI/CD Automation:</strong> Jenkins, GitHub Actions, Argo Workflows</li>
                <li><strong>Cloud Platforms:</strong> AWS (EC2, S3, IAM, ECS, EKS, Aurora, ALB, ACM, Route 53)</li>
                <li><strong>Monitoring & Logging:</strong> Prometheus, Grafana</li>
                <li><strong>Security & Governance:</strong> IAM, Secret Management, ABAC policies</li>
              </ul>

              <h4 className="mt-4" style={{ fontWeight: '700', fontSize: '1.5rem', color: '#0d6efd' }}>Teaching & Knowledge Sharing</h4>
              <p>
                As an <strong>AWS Trainer</strong>, I conduct live sessions on 
                <strong> AWS fundamentals, Kubernetes, and EKS deployments</strong>, guiding teams 
                towards <strong>best practices in DevOps and Cloud Engineering</strong>.
              </p>

              <h4 className="mt-4" style={{ fontWeight: '700', fontSize: '1.5rem', color: '#050e1bff' }}>Let’s Connect</h4>
              <p>
                I am open to <strong>full-time DevOps & Cloud Engineering roles</strong> where I can 
                build secure, scalable, and automated cloud platforms.  
                📧 <a href="mailto:kundanvyas197@gmail.com">kundanvyas197@gmail.com</a> | 
                🔗 <a href="https://linkedin.com/in/kundan-vyas" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
