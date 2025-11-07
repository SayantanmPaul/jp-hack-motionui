import {
  BookOpenIcon,
  Building2Icon,
  ChartColumnIcon,
  CircleQuestionMarkIcon,
  CloudIcon,
  CodeIcon,
  HouseIcon,
  LeafIcon,
  LightbulbIcon,
  MailIcon,
  PackageIcon,
  SettingsIcon,
  ShieldIcon,
  TrendingUpIcon,
  UsersRoundIcon,
} from 'lucide-react';

export interface NavigationProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  children?: NavigationProps[];
}

export const NAVIGATION_DATA: NavigationProps[] = [
  {
    icon: HouseIcon,
    title: 'Home',
    desc: 'Welcome to our comprehensive platform',
  },
  {
    icon: PackageIcon,
    title: 'Product & Services',
    desc: 'Explore our comprehensive offerings',
    children: [
      {
        icon: CodeIcon,
        title: 'Software Solutions',
        desc: 'Custom software development and deployment',
        children: [
          {
            icon: TrendingUpIcon,
            title: 'Enterprise Application Development',
            desc: 'Robust systems designed for scalable enterprise workloads',
            children: [
              {
                icon: LeafIcon,
                title: 'Monolithic to Microservices Migration',
                desc: 'Decouple legacy systems for modular scalability',
              },
            ],
          },
          {
            icon: CircleQuestionMarkIcon,
            title: 'Mobile Application Engineering',
            desc: 'Cross-platform and native mobile solutions',
            children: [
              {
                icon: BookOpenIcon,
                title: 'UI/UX Mobile Design Systems',
                desc: 'Consistent visual language across app interfaces',
              },
            ],
          },
          {
            icon: BookOpenIcon,
            title: 'API Architecture & Integration',
            desc: 'Secure and scalable system communication patterns',
            children: [
              {
                icon: LightbulbIcon,
                title: 'Event-Driven Architecture',
                desc: 'Real-time responsiveness using event streaming',
              },
            ],
          },
        ],
      },
      {
        icon: CloudIcon,
        title: 'Cloud & Infrastructure',
        desc: 'Scalable cloud solutions and infrastructure',
        children: [
          {
            icon: SettingsIcon,
            title: 'Cloud Migration Strategy',
            desc: 'End-to-end modernization and cloud transition planning',
            children: [
              {
                icon: ShieldIcon,
                title: 'Compliance Audit & Security Review',
                desc: 'Security posture evaluation and policy enforcement',
              },
            ],
          },
          {
            icon: MailIcon,
            title: 'Infrastructure as Code Automation',
            desc: 'Templated scalable cloud orchestration',
          },
        ],
      },
      {
        icon: Building2Icon,
        title: 'Digital Transformation',
        desc: 'Comprehensive digital transformation strategies',
        children: [
          {
            icon: ChartColumnIcon,
            title: 'Workflow Automation & AI Enablement',
            desc: 'Modernizing manual workflows using AI and automation',
          },
        ],
      },
      {
        icon: UsersRoundIcon,
        title: 'Consulting Services',
        desc: 'Expert guidance and strategic support',
        children: [
          {
            icon: TrendingUpIcon,
            title: 'Technology Roadmap Advisory',
            desc: 'Strategic planning for long-term product success',
          },
        ],
      },
      {
        icon: LightbulbIcon,
        title: 'Digital Transformation',
        desc: 'Comprehensive digital transformation strategies',
        children: [
          {
            icon: ChartColumnIcon,
            title: 'Workflow Automation & AI Enablement',
            desc: 'Modernizing manual workflows using AI and automation',
          },
        ],
      },
      {
        icon: ShieldIcon,
        title: 'Cybersecurity Consulting',
        desc: 'Comprehensive cybersecurity services and solutions',
        children: [
          {
            icon: CodeIcon,
            title: 'Security Risk Assessment Frameworks',
            desc: 'Evaluate and reinforce organizational security posture',
          },
        ],
      },
      {
        icon: ChartColumnIcon,
        title: 'Data & Analytics Consulting',
        desc: 'Data strategy, analytics, and business intelligence',
        children: [
          {
            icon: SettingsIcon,
            title: 'Data Warehouse & Lakehouse Design',
            desc: 'Centralized scalable data infrastructure',
            children: [
              {
                icon: LeafIcon,
                title: 'Metadata Governance & Cataloging',
                desc: 'Structured data documentation for enterprise visibility',
              },
            ],
          },
          {
            icon: MailIcon,
            title: 'Data Engineering Pipelines',
            desc: 'Ingestion, transformation, and orchestration',
          },
          {
            icon: TrendingUpIcon,
            title: 'Business Intelligence Visualization',
            desc: 'Actionable insights via analytics dashboards',
          },
          {
            icon: MailIcon,
            title: 'Predictive Analytics & ML Modeling',
            desc: 'AI-powered forecasting and insights generation',
          },
        ],
      },
      {
        icon: SettingsIcon,
        title: 'DevOps & Platform Engineering',
        desc: 'DevOps transformation and platform engineering',
        children: [
          {
            icon: CodeIcon,
            title: 'CI/CD Pipeline Optimization',
            desc: 'Automated and reliable deployment workflows',
          },
        ],
      },
      {
        icon: SettingsIcon,
        title: 'Support & Maintenance',
        desc: 'Ongoing maintenance and support services',
        children: [
          {
            icon: LightbulbIcon,
            title: 'Performance Monitoring & SLA Management',
            desc: 'High-availability service tracking and response operations',
          },
        ],
      },
    ],
  },
  {
    icon: Building2Icon,
    title: 'Industry Solutions',
    desc: 'Specialized solutions for different industries',
    children: [
      {
        icon: CodeIcon,
        title: 'Healthcare Digital Systems',
        desc: 'Secure, compliant healthcare platforms and applications',
      },
      {
        icon: CloudIcon,
        title: 'FinTech Infrastructure Enablement',
        desc: 'Secure transaction and digital banking ecosystems',
      },
      {
        icon: UsersRoundIcon,
        title: 'Retail & E-Commerce Acceleration',
        desc: 'Optimized digital experiences and inventory automation',
      },
    ],
  },
  {
    icon: UsersRoundIcon,
    title: 'Company',
    desc: 'Learn about our organization and culture',
    children: [
      {
        icon: CodeIcon,
        title: 'Leadership & Vision',
        desc: 'Guiding mission and strategic direction',
      },
      {
        icon: CloudIcon,
        title: 'Global Delivery Centers',
        desc: 'Distributed collaboration for efficient scaling',
      },
      {
        icon: UsersRoundIcon,
        title: 'Diversity & Inclusion Programs',
        desc: 'Culture of belonging and equal opportunity',
      },
    ],
  },
  {
    icon: BookOpenIcon,
    title: 'Resources',
    desc: 'Knowledge base, tools, and learning materials',
    children: [
      {
        icon: CodeIcon,
        title: 'Documentation',
        desc: 'Detailed guides and user manuals',
        children: [
          {
            icon: CodeIcon,
            title: 'API Reference',
            desc: 'Programmatic access to our APIs',
          },
          {
            icon: MailIcon,
            title: 'User Guides',
            desc: 'Step-by-step instructions for using our products',
          },
          {
            icon: CloudIcon,
            title: 'Integration Guides',
            desc: 'Guides for integrating our products with external systems',
          },
        ],
      },
      {
        icon: CloudIcon,
        title: 'Case Studies',
        desc: 'Real-world examples of successful implementations',
      },
      {
        icon: UsersRoundIcon,
        title: 'Blogs & News',
        desc: 'Latest industry insights and trends',
      },
      {
        icon: MailIcon,
        title: 'Community',
        desc: 'Connect with like-minded professionals',
      },
    ],
  },
  {
    icon: CircleQuestionMarkIcon,
    title: 'Support',
    desc: 'Get help and support when you need it',
    children: [
      {
        icon: MailIcon,
        title: 'Contact',
        desc: 'Get in touch with our team',
      },
      {
        icon: CodeIcon,
        title: 'FAQ',
        desc: 'Frequently asked questions',
      },
    ],
  },
  {
    icon: LightbulbIcon,
    title: 'Research & Innovation',
    desc: 'Cutting-edge research and innovation initiatives',
    children: [
      {
        icon: CodeIcon,
        title: 'AI Experimentation Labs',
        desc: 'Rapid prototyping with emerging AI techniques',
      },
      {
        icon: CloudIcon,
        title: 'Quantum & High-Performance Computing',
        desc: 'Breakthrough computational capabilities',
      },
      {
        icon: UsersRoundIcon,
        title: 'Innovation Partnerships',
        desc: 'Collaborative R&D ecosystems',
      },
    ],
  },
  {
    icon: LeafIcon,
    title: 'Sustainability',
    desc: 'Environmental responsibility and sustainable technology',
    children: [
      {
        icon: CodeIcon,
        title: 'Sustainable Development Goals',
        desc: 'Aligning our actions with the UN Sustainable Development Goals',
      },
      {
        icon: CloudIcon,
        title: 'Energy Efficiency',
        desc: 'Reducing energy consumption and carbon footprint',
      },
    ],
  },
  {
    icon: TrendingUpIcon,
    title: 'Investor Relations',
    desc: 'Financial information and investor resources',
    children: [
      {
        icon: CodeIcon,
        title: 'Financial Statements',
        desc: 'Detailed financial information and reports',
      },
      {
        icon: CloudIcon,
        title: 'Shareholder Information',
        desc: 'Information for current and former shareholders',
      },
      {
        icon: UsersRoundIcon,
        title: 'Press Releases',
        desc: 'Latest news and updates from our company',
      },
      {
        icon: MailIcon,
        title: 'Investor Contact',
        desc: 'Get in touch with our investors',
      },
    ],
  },
  {
    icon: MailIcon,
    title: 'Contact',
    desc: 'Get in touch with our team',
    children: [
      {
        icon: CodeIcon,
        title: 'General Inquiries',
        desc: 'Send us your questions and feedback',
      },
      {
        icon: CloudIcon,
        title: 'Partnership Opportunities',
        desc: 'Explore collaboration and alliances',
      },
      {
        icon: UsersRoundIcon,
        title: 'Career Applications',
        desc: 'Join our growing global team',
      },
    ],
  },
];
