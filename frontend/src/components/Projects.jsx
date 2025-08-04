import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const categories = [
    {
      title: "AWS & Kubernetes Deployments",
      projects: [
        {
          title: "SpringBoot BankApp on EKS (GitOps)",
          description: "Containerized Spring Boot banking app deployed on AWS EKS using Helm & ArgoCD.",
          tags: ["Spring Boot", "MySQL", "Docker", "EKS", "ArgoCD"],
          github: "https://github.com/Kundan547/springboot-bankapp",
          outcomes: "Implemented GitOps-driven deployments ensuring automated rollouts and version control."
        },
        {
          title: "Three-Tier App with Terraform & Helm",
          description: "Full-stack app deployed on EKS with infrastructure provisioned via Terraform.",
          tags: ["Node.js", "React.js", "MongoDB", "Terraform", "EKS", "Helm"],
          github: "https://github.com/Kundan547/three-tier-app",
          outcomes: "Created modular Terraform infrastructure; enabled reusable Helm charts for deployments."
        },
        {
          title: "SportsDev with Kustomize Overlays",
          description: "Managed env-specific deployments to multiple EKS clusters using Kustomize overlays.",
          tags: ["Kustomize", "EKS", "Overlays"],
          github: "https://github.com/Kundan547/sportsdev",
          outcomes: "Simplified multi-environment deployments and improved cluster management efficiency."
        },
        {
          title: "E-Commerce App with ArgoCD",
          description: "CI/CD pipeline deploying Node.js & React.js app to EKS via ArgoCD.",
          tags: ["Node.js", "React.js", "EKS", "ArgoCD", "GitHub Actions"],
          github: "https://github.com/Kundan547/ecommerce-argo",
          outcomes: "Implemented GitOps pipeline for consistent, automated production deployments."
        }
      ]
    },
    {
      title: "CI/CD Pipelines & Security",
      projects: [
        {
          title: "Zomato Clone (Jenkins CI/CD + Security)",
          description: "Jenkins pipeline with SonarQube, Trivy & OWASP scanning for Node.js app.",
          tags: ["Jenkins", "Docker", "SonarQube", "Trivy", "OWASP", "MySQL"],
          github: "https://github.com/Kundan547/zomato-clone",
          outcomes: "Automated security scans; enabled zero-downtime releases."
        },
        {
          title: "Argo Rollouts (Blue-Green & Canary)",
          description: "Advanced Kubernetes deployment strategies with zero downtime updates.",
          tags: ["Kubernetes", "Argo Rollouts", "Blue-Green", "Canary"],
          github: "https://github.com/Kundan547/argo-rollouts",
          outcomes: "Reduced downtime during application updates to near zero."
        },
        {
          title: "Node.js App (Argo + Kustomize + Helm)",
          description: "GitOps-driven deployments for Node.js app using Helm charts and Kustomize overlays.",
          tags: ["Node.js", "ArgoCD", "Kustomize", "Helm"],
          github: "https://github.com/Kundan547/node-argo-helm",
          outcomes: "Improved deployment automation and environment consistency."
        }
      ]
    },
    {
      title: "Serverless & Infrastructure as Code",
      projects: [
        {
          title: "AWS Lambda Function Deployment",
          description: "Provisioned AWS Lambda functions & APIs with Terraform.",
          tags: ["AWS Lambda", "API Gateway", "Terraform"],
          github: "https://github.com/Kundan547/lambda-terraform",
          outcomes: "Automated deployment of serverless functions and API endpoints."
        }
      ]
    },
    {
      title: "Full-Stack Applications",
      projects: [
        {
          title: "Sports-Commerce App (Amplify + EKS)",
          description: "Three-tier Sports-Commerce app with Amplify frontend and EKS backend.",
          tags: ["React.js", "Node.js", "MongoDB", "Amplify", "EKS", "Terraform"],
          github: "https://github.com/Kundan547/sports-commerce",
          outcomes: "Integrated GitHub CI/CD, custom domain mapping, and environment-specific configs."
        },
        {
          title: "Django Blog Application",
          description: "Secure Django blog deployed with Docker and AWS (EC2/S3/RDS).",
          tags: ["Django", "Python", "Docker", "AWS", "CI/CD"],
          github: "https://github.com/Kundan547/django-blog",
          outcomes: "Implemented role-based access, automated builds, and AWS hosting."
        },
        {
          title: "MERN App on Kubernetes",
          description: "Deployed containerized MERN app with separate frontend & backend builds.",
          tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Kubernetes"],
          github: "https://github.com/Kundan547/mern-k8s",
          outcomes: "Enabled modular builds and independent scaling."
        },
        {
          title: "ECS Application Deployment (Fargate)",
          description: "Deployed Node.js app with MySQL on AWS ECS (Fargate) using ECR & ALB.",
          tags: ["ECS", "Fargate", "Node.js", "MySQL", "Docker", "ALB"],
          github: "https://github.com/Kundan547/ecs-app",
          outcomes: "Implemented auto-scaling and load balancing for production workloads."
        }
      ]
    }
  ];

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">DevOps & Cloud-Native Projects</h2>
          <p className="lead mb-5">
            A showcase of my categorized DevOps projects demonstrating cloud-native deployments, CI/CD pipelines, serverless infrastructure, and full-stack solutions.
          </p>
        </Col>
      </Row>
      
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-5">
          <h3 className="mb-4">{category.title}</h3>
          <Row>
            {category.projects.map((project, projIndex) => (
              <Col key={projIndex} lg={6} className="mb-4">
                <Card className="h-100 project-card border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h4>{project.title}</h4>
                    <div className="mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} bg="primary" className="me-2 mb-2">{tag}</Badge>
                      ))}
                    </div>
                    <Card.Text>{project.description}</Card.Text>
                    <h6 className="mt-3">Outcomes:</h6>
                    <Card.Text>{project.outcomes}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0 p-4">
                    <div className="d-flex justify-content-center">
                      <Button variant="outline-dark" href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="me-2" /> GitHub
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Projects;
