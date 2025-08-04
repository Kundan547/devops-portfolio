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
                I am Kundan Vyas, a DevOps Engineer with experience in AWS, Kubernetes, Terraform, Docker, and CI/CD automation. 
                I have worked on building secure, scalable, and automated infrastructure for production-ready deployments.
              </p>

              <h4 className="mt-4">Professional Journey</h4>
              <p>
                My work includes designing cloud architectures, implementing Infrastructure as Code, and deploying containerized applications on Kubernetes and ECS. 
                I have also delivered training sessions on AWS, Kubernetes, and CI/CD best practices.
              </p>

              <h4 className="mt-4">Skills and Focus</h4>
              <p>
                I specialize in creating modular Terraform setups, GitOps-based deployments using ArgoCD, and containerized applications with Docker and Kubernetes. 
                My focus is on building efficient and secure CI/CD pipelines integrated with cloud platforms.
              </p>

              <h4 className="mt-4">Let’s Connect</h4>
              <p>
                I am open to collaboration and full-time opportunities in DevOps and Cloud Engineering. 
                You can reach me at <a href="mailto:kundanvyas197@gmail.com">kundanvyas197@gmail.com</a> 
                or connect on <a href="https://linkedin.com/in/kundan-vyas" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
              </p>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
