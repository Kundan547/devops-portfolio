import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { FaJenkins, FaDocker, FaAws, FaChartLine, FaGithub } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiHelm } from 'react-icons/si';
import profilePhoto from '../assets/profile-photo.jpg'; // Replace with your actual photo

const PurpleSpan = styled.span`
  color: #ac81c0;
`;

const HeroSection = styled.div`
  padding: 120px 0;
  transition: background 0.3s ease, color 0.3s ease;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 575px) {
    padding: 80px 0;
  }
`;

const ProfileImage = styled(Image)`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--accent-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px var(--accent-color);
  }
  
  @media (max-width: 575px) {
    width: 150px;
    height: 150px;
  }
`;

const SkillIconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2) rotate(5deg);
  }
`;

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      <HeroSection className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className="text-center mb-4 mb-lg-0">
              <ProfileImage src={profilePhoto} alt="Profile" fluid loading="lazy" />
            </Col>
            <Col lg={8} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4 gradient-text">
                <span className="hero-header">Hey there, I'm</span><br/>
                <PurpleSpan className="hero-name">Kundan Vyas 👋</PurpleSpan>
              </h1>
              <div className="lead mb-5 typing-animation">
                <p>
                  I'm a DevOps Engineer with expertise in AWS, Kubernetes, Terraform, and CI/CD automation.
                  I specialize in building production-grade cloud infrastructure, GitOps pipelines, and containerized application deployments.
                </p>
                <p>Let’s automate and scale something amazing together! 🚀</p>
              </div>
              <div>
                <Button href="#contact" variant="primary" size="lg" className="cta-button glow-button me-3">
                  Contact Me
                </Button>
                <Button href="#resume" variant={isDarkMode ? "outline-light" : "outline-dark"} size="lg" className="cta-button">
                  View Resume
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </HeroSection>

      <Container className="section">
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title reveal">What I Do</h2>
            <p className="lead mb-5 reveal">
              I design, automate, and manage scalable cloud infrastructure using AWS, Kubernetes, and Infrastructure as Code, with a strong focus on DevOps best practices.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaJenkins />
              </SkillIconContainer>
              <h3>CI/CD Automation</h3>
              <p>Automated build, test, and deployment workflows using Jenkins, GitHub Actions, and ArgoCD.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <SiTerraform />
              </SkillIconContainer>
              <h3>Infrastructure as Code</h3>
              <p>Modular Terraform deployments for AWS (VPC, ECS, EKS, Aurora, ALB, ACM, Route53).</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaDocker />
              </SkillIconContainer>
              <h3>Containerization</h3>
              <p>Docker and Kubernetes for microservices deployment, with Helm & ArgoCD for GitOps delivery.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <SiKubernetes />
              </SkillIconContainer>
              <h3>Kubernetes Management</h3>
              <p>Multi-cluster Kubernetes setup with Helm charts and ArgoCD for application deployments.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaAws />
              </SkillIconContainer>
              <h3>Cloud on AWS</h3>
              <p>Hands-on with AWS services: EKS, ECS Fargate, S3, RDS/Aurora, CloudFront, and IAM security.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaChartLine />
              </SkillIconContainer>
              <h3>Monitoring & Observability</h3>
              <p>Prometheus, Grafana, and AWS CloudWatch to monitor performance and troubleshoot efficiently.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;