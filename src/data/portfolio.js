import {
  FaPython, FaJava, FaAws, FaDocker, FaGithub, FaLinkedin, FaDatabase,
  FaMicrosoft, FaCloud, FaRust,
} from 'react-icons/fa'
import {
  SiScala, SiApachekafka, SiMongodb, SiPostgresql, SiMysql,
  SiAmazondynamodb, SiApachespark, SiGrafana, SiJira, SiGatling,
  SiBitbucket, SiDatadog, SiSnowflake, SiDotnet, SiSpringboot,
} from 'react-icons/si'

export const personalInfo = {
  name: 'Mohamed Zuhair',
  title: 'Software Engineer II',
  company: 'Trimble Inc',
  email: 'mohamedzuhairka@gmail.com',
  phone: '+91-8248633277',
  linkedin: 'https://www.linkedin.com/in/mohamed-zuhair-04200a16b/',
  github: 'https://github.com/zuhair786',
  location: 'Chennai, India',
  summary:
    'An enthusiastic software engineer with 4+ years of expertise in building data-intensive applications, tackling challenging architectural problems and addressing scalability, analyzing data processes and developing useful metrics. Proficient in Python, Java, Scala, AWS, Azure, SQL, NoSQL and Software Development Life Cycle principles.',
  subtitles: [
    'Software Engineer II',
    'Cloud Enthusiast',
    'Data Engineering',
    'DevOps Practitioner',
  ],
}

export const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects Delivered', value: '8+' },
  { label: 'Certifications', value: '9+' },
  { label: 'Cloud Platforms', value: '2' },
]

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: FaPython,
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'Scala', icon: SiScala },
      { name: 'Java', icon: FaJava },
      { name: 'Rust', icon: FaRust },
    ],
  },
  {
    title: 'Cloud - AWS',
    icon: FaAws,
    skills: [
      { name: 'Lambda' },
      { name: 'Step Function' },
      { name: 'SNS / SQS' },
      { name: 'API Gateway' },
      { name: 'Athena' },
      { name: 'EventBridge' },
      { name: 'EC2' },
      { name: 'ECS' },
      { name: 'Glue' },
      { name: 'DynamoDB', icon: SiAmazondynamodb },
      { name: 'RDS' },
      { name: 'S3' },
      { name: 'Parameter Store' },
      { name: 'FIS' },
      { name: 'SageMaker' },
    ],
  },
  {
    title: 'Cloud - Azure',
    icon: FaMicrosoft,
    skills: [
      { name: 'CosmosDB' },
      { name: 'Synapse' },
      { name: 'Function Apps' },
      { name: 'API Management' },
      { name: 'Workbook' },
      { name: 'FrontDoor' },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'DynamoDB', icon: SiAmazondynamodb },
      { name: 'CosmosDB' },
      { name: 'OpenSearch' },
    ],
  },
  {
    title: 'DevOps & IaC',
    icon: FaDocker,
    skills: [
      { name: 'CloudFormation' },
      { name: 'Docker', icon: FaDocker },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Bitbucket', icon: SiBitbucket },
    ],
  },
  {
    title: 'Data Warehouse',
    icon: SiSnowflake,
    skills: [
      { name: 'Snowflake', icon: SiSnowflake },
      { name: 'DataHub' },
    ],
  },
  {
    title: 'Monitoring & Tools',
    icon: SiDatadog,
    skills: [
      { name: 'CloudWatch' },
      { name: 'Azure Log Analytics' },
      { name: 'Datadog', icon: SiDatadog },
      { name: 'Apache Spark', icon: SiApachespark },
      { name: 'Kafka', icon: SiApachekafka },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'Gatling', icon: SiGatling },
      { name: 'Jira', icon: SiJira },
    ],
  },
]

export const experience = [
  {
    company: 'Trimble Inc',
    location: 'Chennai',
    roles: [
      { title: 'Software Engineer II', period: 'Feb 2025 - Present' },
      { title: 'Software Engineer', period: 'Jan 2022 - Jan 2025' },
    ],
    description:
      'Working on entitlement management systems, cloud migration pipelines, product services, and data engineering solutions across AWS and Azure.',
    projects: [
      {
        title: 'EMS V4',
        tech: ['Python', 'API Gateway', 'Lambda', 'DynamoDB', 'Step Function', 'SNS', 'OpenSearch', 'EventBridge'],
        description:
          'Developed back-end REST APIs to perform CRUD operations on Entitlements and Licenses. A wide-scope application covering license management of various products and acting as a backbone for several upstream applications.',
      },
      {
        title: 'AWS DynamoDB to Azure CosmosDB Migration',
        tech: ['Python', 'Apache Spark', 'S3', 'Lambda', 'Glue', 'DynamoDB', 'APIM', 'Function App', 'CosmosDB'],
        description:
          'Developed a migration pipeline from AWS DynamoDB to Azure CosmosDB. Built ETL processing with AWS Glue and PySpark, live data sync using EventBus and EventRule, a scalable high-performance read layer for the Licenses Search API, and reprocessing for failed/non-synced data via EventBridge.',
      },
      {
        title: 'Transition Layer',
        tech: ['DynamoDB', 'EventBridge', 'Python', 'Lambda'],
        description:
          'Developed a transition layer pipeline serving as a common data store with both EMS v3 and v4 data. Enabled live sync from both applications so customers can access data from both versions through a single API.',
      },
      {
        title: 'Entitlement Notification System',
        tech: ['Python', 'Lambda', 'DynamoDB', 'EventBridge', 'Kafka'],
        description:
          'Developed a live notification system for order placement, modification, and lifecycle changes using EventBridge, Lambda, DynamoDB, Kafka and Python. Sends notifications to customers regarding all order fulfillment activities.',
      },
      {
        title: 'Eventual Consistency Validation',
        tech: ['Scala', 'Gatling', 'Grafana', 'Azure Synapse', 'AWS Glue', 'Apache Spark', 'Python'],
        description:
          'Designed and developed an eventual consistency PT application to validate data consistency from EMS v3 and v4 to Transition Layer. Built SQL scripts in Azure Synapse, CETAS scripts for Azure Blob export, and Grafana dashboards for performance testing metrics.',
      },
      {
        title: 'Entitlement Read Layer',
        tech: ['Aurora RDS', 'Lambda'],
        description:
          'Developed a scalable read layer for high-traffic Entitlements Search with support for complex query parameters, enabling account representatives and holders to efficiently manage and maintain entitlements.',
      },
      {
        title: 'Provisioning Service',
        tech: ['Aurora RDS', 'ECS', 'Java', 'Spring Boot', 'Docker'],
        description:
          'Designed and developed a Product Service application providing a unified view of company products, serving as a bridge across all business units.',
      },
      {
        title: 'Enforcement SDK',
        tech: ['Rust', '.NET'],
        description:
          'Designed and developed an Enforcement SDK enabling offline-first search and license management. Enhanced reliability by ensuring seamless offline device license management with synchronization support.',
      },
    ],
  },
]

export const certifications = [
  {
    title: 'AZ-900: Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    url: 'https://learn.microsoft.com/en-us/users/mohamedzuhair-1495/credentials/545db1537b4233c',
    icon: FaMicrosoft,
  },
  {
    title: 'AZ-104: Microsoft Azure Administrator',
    issuer: 'Microsoft',
    url: 'https://www.credly.com/badges/316dfc47-0760-4bc4-96dc-be62c0a61960/public_url',
    icon: FaMicrosoft,
  },
  {
    title: 'AI-900: Microsoft AI Fundamentals',
    issuer: 'Microsoft',
    url: 'https://learn.microsoft.com/en-us/users/mohamedzuhair-1495/credentials/e192269e735fac0c',
    icon: FaMicrosoft,
  },
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'AWS',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/8e01a7a45c764896a53a95408e59675d',
    icon: FaAws,
  },
  {
    title: 'SnowPro Core Certification',
    issuer: 'Snowflake',
    url: 'https://www.credential.net/e3256612-1b69-4dde-b40a-fa6166a45e02#gs.hw97ee#acc.5T1hwJjE',
    icon: SiSnowflake,
  },
  {
    title: 'Data Engineering Foundation',
    issuer: 'Credly',
    url: 'https://www.credly.com/badges/e8f53347-aa4d-4c20-a72a-2c49da25a08f/public_url',
    icon: FaDatabase,
  },
  {
    title: 'Data Pipelines with Kafka',
    issuer: 'Credly',
    url: 'https://www.credly.com/badges/2ef47da1-0d7f-445a-b5e1-bc7d52d866ce/public_url',
    icon: SiApachekafka,
  },
  {
    title: 'Data Structures and Performance',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/WQULU8XTFRMS',
    icon: FaJava,
  },
  {
    title: 'Java Programming: Arrays, Lists, and Structured Data',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/KL3QYP8DDUCV',
    icon: FaJava,
  },
]

export const education = {
  degree: 'B.E. in Computer Science',
  institution: 'Thiagarajar College of Engineering',
  university: 'Anna University',
  cgpa: '9.23',
  year: '2022',
}

export const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
]
