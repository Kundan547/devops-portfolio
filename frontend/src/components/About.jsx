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
                I am <strong>Kundan Vyas</strong>, a <strong>DevOps Engineer</strong> at 
                <strong> 47Billion, Indore</strong>, and an <strong>AWS Trainer</strong> with over 
                <strong> 1.5 years of AWS experience</strong> and <strong>2 years in DevOps</strong>.  
                My expertise includes cloud architecture, container orchestration, Infrastructure as Code, and CI/CD automation.
              </p>

              <h4 className="mt-4">Professional Experience</h4>
              <p>
                At <strong>47Billion</strong>, I design and deliver secure, scalable, production-grade infrastructure 
                using AWS, Kubernetes, and Terraform. My experience includes:
              </p>
              <ul>
                <li>Developing modular Terraform architectures for multi-environment setups (Dev, Staging, Production)</li>
                <li>Deploying workloads on EKS and ECS (Fargate) with secure networking configurations (VPC, NAT, ALB, security groups)</li>
                <li>Implementing ArgoCD GitOps pipelines for application delivery</li>
                <li>Managing secure IAM roles and OIDC-based GitHub Actions integrations for CI/CD</li>
                <li>Implementing Backstage Developer Portals for self-service infrastructure</li>
                <li>Configuring Aurora PostgreSQL, ACM, and Route 53 for production applications</li>
              </ul>

              <h4 className="mt-4">Skills</h4>
              <ul>
                <li><strong>Infrastructure as Code:</strong> Terraform, AWS CloudFormation</li>
                <li><strong>Containers & Orchestration:</strong> Docker, Kubernetes (EKS, K3s), Helm, ArgoCD</li>
                <li><strong>CI/CD Automation:</strong> Jenkins, GitHub Actions, Argo Workflows</li>
                <li><strong>Cloud Platforms:</strong> AWS (EC2, S3, IAM, ECS, EKS, Aurora, ALB, ACM, Route 53)</li>
                <li><strong>Monitoring & Logging:</strong> Prometheus, Grafana</li>
                <li><strong>Security:</strong> IAM, Secret Management, ABAC policies for S3 Access Points</li>
              </ul>

              <h4 className="mt-4">Training & Mentorship</h4>
              <p>
                As an AWS Trainer, I have conducted sessions on AWS fundamentals, Kubernetes, and EKS deployments, 
                guiding individuals and teams in adopting best practices in DevOps and Cloud Engineering.
              </p>

              <h4 className="mt-4">Contact</h4>
              <p>
                I am seeking full-time DevOps and Cloud Engineering opportunities.  
                Email: <a href="mailto:kundanvyas197@gmail.com">kundanvyas197@gmail.com</a>  
                LinkedIn: <a href="https://linkedin.com/in/kundan-vyas" target="_blank" rel="noopener noreferrer">linkedin.com/in/kundan-vyas</a>
              </p>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
