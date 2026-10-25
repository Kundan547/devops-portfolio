export const PROFILE = {
  name: 'Kundan Vyas',
  role: 'DevOps Engineer',
  tagline: 'Kubernetes · GitOps · Cloud Infrastructure Automation',
  email: 'kundanvyas197@gmail.com',
  phone: '+91-9351582228',
  linkedin: 'https://linkedin.com/in/kundan-vyas',
  github: 'https://github.com/Kundan547',
  resume: `${process.env.PUBLIC_URL}/KundanVyas_Resume.pdf`,
  summary:
    'I run production Kubernetes and delivery pipelines on AWS and Azure — from cluster provisioning and GitOps to incident response and SOC 2 compliance — and I build AI-assisted automation to take the toil out of operations.',
};

export const METRICS = [
  { value: '59%', label: 'Infrastructure cost cut', note: 'KEDA event-driven autoscaling on AKS' },
  { value: '< 5 min', label: 'Production release time', note: 'ArgoCD across 3 independent clusters' },
  { value: '40%', label: 'Faster deployments', note: 'Clusters and CI/CD built from scratch' },
  { value: 'SOC 2', label: 'Type II compliance led', note: 'RBAC, audit logging, evidence pipelines' },
];

export const EXPERIENCE = [
  {
    role: 'DevOps Engineer',
    company: '47Billion',
    period: 'Sep 2025 – Present',
    note: 'Promoted from Intern',
    current: true,
    bullets: [
      'Cut infrastructure costs 59% by architecting KEDA event-driven autoscaling on Azure Kubernetes (AKS), replacing static replica counts with demand-driven, metrics-based scaling policies.',
      'Migrated Jenkins to ArgoCD GitOps using ApplicationSets and parameterized Helm charts across Dev, QA, Stage and Production — eliminated manual deploys, environment drift and config divergence.',
      'Cut production release time to under 5 minutes by migrating fleet-wide Rancher deployments to ArgoCD across 3 independent production clusters, each releasing separately.',
      'Led SOC 2 Type II compliance (2026) — RBAC access controls, centralized audit logging, and evidence-collection pipelines across the Kubernetes and cloud stack.',
      'Reduced deployment time 40% by provisioning Kubernetes clusters from scratch — networking, ingress, Helm customization — and building Jenkins CI/CD pipelines.',
      'Reclaimed 1.5 CPU cores per node and improved ENI availability by moving cluster management from Rancher to the native Kubernetes Dashboard.',
      'Configured Ory (Kratos/Hydra) IAM with GitHub-enforced policy changes — every access-rule change version-controlled and auditable via PR.',
      'Building a Terraform + GitHub CI pipeline for declarative, PR-gated provisioning that doubles as disaster recovery for regional failover.',
      'Designed Claude AI agents that generate Terraform, Helm, Argo Workflows and Jenkinsfiles, and built MCP servers for monitoring and cluster sanity checks that remediate within least-privilege permissions.',
    ],
  },
  {
    role: 'DevOps Engineer Intern',
    company: '47Billion',
    period: 'Jun 2025 – Aug 2025',
    summary: 'Worked on deployment and automation of production-grade applications across AWS and Azure using Kubernetes, Terraform and CI/CD.',
    bullets: [
      'Shipped a production release end-to-end, including pre-install observability and monitoring (Grafana dashboards, Prometheus metrics) alongside the Helm chart deployment, with PagerDuty configured for alerting, so the release went live with full monitoring from day one.',
      'Deployed a Spring Boot banking app on Amazon EKS with GitOps workflows using Argo CD.',
      'Provisioned AWS infrastructure with Terraform and deployed a 3-tier Node.js, React.js and MongoDB application on EKS using Helm.',
      'Automated CI/CD for an e-commerce application with GitHub Actions and Argo CD.',
      'Built Azure setups with VNet/NSGs and private subnets, Azure Load Balancer and Application Gateway (SSL termination, WAF, URL-based routing), and AKS with Emissary Ingress.',
      'Resolved an org-wide Bitnami registry crisis affecting production: automated an image-retag script across clusters and deployed a self-hosted Nexus repo to version-control Helm chart tarballs.',
      'Engineered parameterized Helm charts for StatefulSets (PostgreSQL, MSSQL, MongoDB, RabbitMQ) and reusable Deployment/Service templates — one-file redeployment to any cluster.',
    ],
  },
  {
    role: 'DevOps Engineer & Cloud Instructor',
    company: 'Self-Employed',
    period: 'Aug 2023 – May 2025',
    summary: 'Independent DevOps consultant and cloud trainer: I designed, automated and handed over cloud infrastructure for client teams, and taught engineers to run it themselves.',
    bullets: [
      'Owned delivery end to end for multiple clients, from requirements and architecture through provisioning, deployment and handover, across AWS and Azure.',
      'Provisioned cloud infrastructure as code with Terraform and ran containerized workloads on Kubernetes, using Docker and Helm for repeatable, environment-consistent releases.',
      'Built CI/CD pipelines that took clients from manual, error-prone deployments to automated, version-controlled releases with GitOps.',
      'Designed secure, scalable cloud foundations: network isolation, access control and observability by default, not as an afterthought.',
      'Trained client engineers on AWS and Azure, from cloud fundamentals to production-grade infrastructure, so teams could operate and extend their platforms without me.',
    ],
  },
];

export const SKILLS = [
  { group: 'Container Orchestration', items: ['Kubernetes (RBAC, Networking, StatefulSets, Ingress)', 'Docker', 'Helm', 'KEDA', 'Emissary Ingress'] },
  { group: 'CI/CD & GitOps', items: ['ArgoCD (ApplicationSets)', 'Argo Workflows', 'Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Webhooks'] },
  { group: 'Infrastructure as Code', items: ['Terraform (modules, remote state)', 'Ansible', 'Helm values templating'] },
  { group: 'Cloud Platforms', items: ['Azure (AKS, VMs, Azure DevOps, VNet/NSG, Application Gateway)', 'AWS (EKS, ECS Fargate, EC2, ALB, ECR, CodeBuild, CodeDeploy, CodePipeline)', 'On-prem Kubernetes', 'K3s'] },
  { group: 'Monitoring & Observability', items: ['Prometheus', 'Grafana', 'Loki', 'PagerDuty'] },
  { group: 'Security & Identity', items: ['Ory (Kratos, Hydra)', 'SOC 2 Type II', 'TLS', 'HashiCorp Vault', 'Azure Key Vault'] },
  { group: 'Languages & Databases', items: ['Python', 'Bash', 'Linux', 'PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB'] },
];

export const FEATURED = {
  eyebrow: 'Featured · built at 47Billion',
  title: 'AI-assisted DevOps: Claude agents and MCP servers',
  summary:
    'Claude agents that generate Terraform, Helm charts, Argo Workflows and Jenkinsfiles, standardizing DevOps tooling across the organization. Alongside them, MCP servers for routine operations run monitoring and cluster sanity checks, then detect and remediate issues within scoped, least-privilege permissions.',
  points: ['Standard IaC and pipeline output from one agent', 'Remediation limited to least-privilege scopes', 'Monitoring and cluster sanity checks automated'],
  tags: ['Claude', 'MCP', 'Terraform', 'Helm', 'Argo Workflows', 'Jenkins'],
};

export const PROJECTS = [
  {
    title: 'Spring Boot BankApp on EKS',
    summary: 'Containerized Spring Boot banking app deployed to AWS EKS with Helm and ArgoCD — a full GitOps workflow with automated rollouts.',
    tags: ['EKS', 'ArgoCD', 'Helm', 'MySQL'],
    href: 'https://github.com/Kundan547/Springboot-BankApp.git',
  },
  {
    title: 'Three-Tier App with Terraform & Helm',
    summary: 'Node.js, React and MongoDB app on EKS with all infrastructure provisioned through reusable Terraform modules.',
    tags: ['Terraform', 'EKS', 'Helm', 'MongoDB'],
    href: 'https://github.com/Kundan547/3-tier-app-Deployment.git',
  },
  {
    title: 'Kubernetes Observability Stack',
    summary: 'Prometheus scraping cluster and app metrics, Grafana dashboards, and Alertmanager routing alerts to PagerDuty.',
    tags: ['Prometheus', 'Grafana', 'Alertmanager', 'PagerDuty'],
    href: 'https://github.com/Kundan547/k8s-monitoring-stack.git',
  },
  {
    title: 'Argo Rollouts: Blue-Green & Canary',
    summary: 'Progressive delivery on Kubernetes with Argo Rollouts — blue-green and canary releases with automated analysis and rollback.',
    tags: ['Argo Rollouts', 'Kubernetes', 'ArgoCD'],
    href: 'https://github.com/Kundan547/argo-rollouts.git',
  },
  {
    title: 'Reusable Helm Chart Library',
    summary: 'Parameterized charts for StatefulSets and Deployments driven entirely by values.yaml, for one-file redeployment to any cluster.',
    tags: ['Helm', 'StatefulSets', 'Kubernetes'],
    href: 'https://github.com/Kundan547/helm-chart-library.git',
  },
  {
    title: 'ECS Fargate Deployment',
    summary: 'Node.js and MySQL app on AWS ECS Fargate behind an ALB with ECR, auto-scaling, and everything defined in Terraform.',
    tags: ['ECS Fargate', 'ALB', 'ECR', 'Terraform'],
    href: 'https://github.com/Kundan547/ecs-terraform-fargate.git',
  },
];

export const EDUCATION = [
  { title: 'B.Tech, Information Technology', place: 'Medicaps University, Indore', period: '2021 – 2025', detail: 'CGPA 7.14' },
  { title: 'Senior Secondary (Science–Mathematics)', place: 'Rajasthan', period: '2021', detail: '91%' },
];

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
