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
            title: 'Custom Software Development',
            desc: 'Custom software development and deployment',
          },
          {
            icon: CircleQuestionMarkIcon,
            title: 'Custom Software Development',
            desc: 'Custom software development and deployment',
          },
          {
            icon: BookOpenIcon,
            title: 'Custom Software Development',
            desc: 'Custom software development and deployment',
            children: [
              {
                icon: LeafIcon,
                title: 'Custom Software Development',
                desc: 'Custom software development and deployment',
              },
            ],
          },
        ],
      },
      {
        icon: CloudIcon,
        title: 'Cloud & Infrastructure',
        desc: 'Scalable cloud solutions and infrastructure',
      },
      {
        icon: UsersRoundIcon,
        title: 'Consulting Services',
        desc: 'Expert guidance and strategic support',
      },
      {
        icon: LightbulbIcon,
        title: 'Digital Transformation',
        desc: 'Comprehensive digital transformation strategies',
      },
      {
        icon: ShieldIcon,
        title: 'Cybersecurity Consulting',
        desc: 'Comprehensive cybersecurity services and solutions',
      },
      {
        icon: ChartColumnIcon,
        title: 'Data & Analytics Consulting',
        desc: 'Data strategy, analytics, and business intelligence',
        children: [
          {
            icon: SettingsIcon,
            title: 'Data Warehouse & Lakehouse',
            desc: 'Centralized scalable data infrastructure',
          },
          {
            icon: MailIcon,
            title: 'Data Engineering Pipelines',
            desc: 'Ingestion, transformation, and orchestration',
          },
          {
            icon: TrendingUpIcon,
            title: 'Business Intelligence Dashboards',
            desc: 'Interactive insights and reporting tools',
          },
          {
            icon: MailIcon,
            title: 'Predictive Analytics & ML Models',
            desc: 'AI-based forecasting and data-driven decisions',
          },
        ],
      },
      {
        icon: SettingsIcon,
        title: 'DevOps & Platform Engineering',
        desc: 'DevOps transformaiton and platform engineering',
      },
      {
        icon: SettingsIcon,
        title: 'Support & Maintenance',
        desc: 'Ongoing maintainence and support services',
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
        title: 'Software Solutions',
        desc: 'Custom software development and deployment',
      },
      {
        icon: CloudIcon,
        title: 'Cloud & Infrastructure',
        desc: 'Scalable cloud solutions and infrastructure',
      },
      {
        icon: UsersRoundIcon,
        title: 'Consulting Services',
        desc: 'Expert guidance and strategic support',
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
        title: 'Software Solutions',
        desc: 'Custom software development and deployment',
      },
      {
        icon: CloudIcon,
        title: 'Cloud & Infrastructure',
        desc: 'Scalable cloud solutions and infrastructure',
      },
      {
        icon: UsersRoundIcon,
        title: 'Consulting Services',
        desc: 'Expert guidance and strategic support',
      },
    ],
  },
  {
    icon: BookOpenIcon,
    title: 'Resources',
    desc: 'Knowledge base, tools, and learning materials',
  },
  {
    icon: CircleQuestionMarkIcon,
    title: 'Support',
    desc: 'Get help and support when you need it',
  },
  {
    icon: LightbulbIcon,
    title: 'Research & Innovation',
    desc: 'Cutting-edge research and innovation initiatives',
    children: [
      {
        icon: CodeIcon,
        title: 'Software Solutions',
        desc: 'Custom software development and deployment',
      },
      {
        icon: CloudIcon,
        title: 'Cloud & Infrastructure',
        desc: 'Scalable cloud solutions and infrastructure',
      },
      {
        icon: UsersRoundIcon,
        title: 'Consulting Services',
        desc: 'Expert guidance and strategic support',
      },
    ],
  },
  {
    icon: LeafIcon,
    title: 'Sustainability',
    desc: 'Enviornmental responsibility and sustainable technology',
  },
  {
    icon: TrendingUpIcon,
    title: 'Investor Relations',
    desc: 'Financial information and investor resources',
  },
  {
    icon: MailIcon,
    title: 'Contact',
    desc: 'Get in touch with our team',
    children: [
      {
        icon: CodeIcon,
        title: 'Software Solutions',
        desc: 'Custom software development and deployment',
      },
      {
        icon: CloudIcon,
        title: 'Cloud & Infrastructure',
        desc: 'Scalable cloud solutions and infrastructure',
      },
      {
        icon: UsersRoundIcon,
        title: 'Consulting Services',
        desc: 'Expert guidance and strategic support',
      },
    ],
  },
];
