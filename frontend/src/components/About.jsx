import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
              
              <p className="lead">
                I am <strong>Kundan Vyas</strong>, a <strong>DevOps Engineer</strong> currently working at 
                <strong> 47Billion, Indore</strong>, and an <strong>AWS Trainer</strong> with over 
                <strong> 1.5 years of AWS experience</strong> and <strong>2 years in DevOps</strong>.  
                My expertise spans <strong>cloud architecture, container orchestration, Infrastructure as Code, and CI/CD automation</strong>.
              </p>

              <h4 className="mt-4">Professional Journey</h4>
              <p>
                At <strong>47Billion</strong>, I work on designing and delivering 
                <strong> secure, scalable, production-grade infrastructure</strong> using 
                <strong> AWS</strong>, <strong>Kubernetes</strong>, and <strong>Terraform</strong>.  
                My professional experience includes:
              </p>
              <ul>
                <li>Building <strong>modular Terraform architectures</strong> for multi-environment setups (Dev, Staging, Prod)</li>
                <li>Deploying workloads on <strong>EKS</strong> and <strong>ECS (Fargate)</strong> with secure networking (VPC, NAT, ALB, SGs)</li>
                <li>Integrating <strong>ArgoCD GitOps pipelines</strong> for application delivery</li>
                <li>Managing <strong>secure IAM roles & OIDC-based GitHub Actions</strong> for CI/CD</li>
                <li>Implementing <strong>Backstage Developer Portals</strong> for self-service infrastructure</li>
                <li>Configuring <strong>Aurora PostgreSQL</strong>, <strong>ACM</strong>, and <strong>Route 53</strong> for production applications</li>
              </ul>

              <h4 className="mt-4">Skills & Focus</h4>
              <ul>
                <li><strong>Infrastructure as Code:</strong> Terraform (modules, workspaces, variables/outputs), AWS CloudFormation</li>
                <li><strong>Containers & Orchestration:</strong> Docker, Kubernetes (EKS, K3s), Helm, ArgoCD</li>
                <li><strong>CI/CD Automation:</strong> Jenkins, GitHub Actions, Argo Workflows</li>
                <li><strong>Cloud Platforms:</strong> AWS (EC2, S3, IAM, ECS, EKS, Aurora, ALB, ACM, Route 53)</li>
                <li><strong>Monitoring & Logging:</strong> Prometheus, Grafana</li>
                <li><strong>Security & Governance:</strong> IAM, Secret Management, ABAC policies for S3 Access Points</li>
              </ul>

              <h4 className="mt-4">Teaching & Knowledge Sharing</h4>
              <p>
                As an <strong>AWS Trainer</strong>, I have conducted live sessions on 
                <strong> AWS fundamentals, Kubernetes, and EKS deployments</strong>, helping learners 
                and teams adopt <strong>best practices in DevOps and Cloud Engineering</strong>.
              </p>

              <h4 className="mt-4">Let’s Connect</h4>
              <p>
                I am open to <strong>full-time DevOps & Cloud Engineering roles</strong> where I can 
                contribute to building secure, scalable, and automated cloud platforms.  
                Reach me at <a href="mailto:kundanvyas197@gmail.com">kundanvyas197@gmail.com</a> or 
                connect with me on <a href="https://linkedin.com/in/kundan-vyas" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
              </p>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
