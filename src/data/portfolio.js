import {
  FaPython, FaJava, FaAws, FaDocker, FaGithub, FaDatabase,
  FaMicrosoft,
  FaCode,
  FaTools,
  FaFigma,
  FaHackerNews,
  FaLaptop,
  FaLaptopCode,
  FaObjectGroup,
} from 'react-icons/fa'

import {
  SiApachekafka, SiMongodb, SiMysql, SiSnowflake
} from 'react-icons/si'

export const personalInfo = {
  name: 'Chetan Soni',
  // title: 'Software Engineer II',
  // company: 'Trimble Inc',
  email: 'sonichetan0108@gmail.com',
  phone: '+91-8770932665',
  linkedin: 'https://www.linkedin.com/in/chetan-soni-933473318/',
  github: 'https://github.com/Sonichetan27',
  location: 'MP, India',
  summary:
    'An aspiring software engineer with a strong interest in building modern web applications and solving real-world problems. Skilled in the MERN stack and experienced in developing responsive and scalable applications. Familiar with React Native for mobile development and proficient in core programming languages such as Java, Python, C++, and SQL, along with a solid understanding of computer science fundamentals.',
  subtitles: [
    'MERN Stack Developer',
    'Problem Solver',
    'App Developer',
  ],
}

export const stats = [
  { label: 'Projects', value: '4' },
  { label: 'Certifications', value: '9+' }
]

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'C++', icon: FaCode },
      { name: 'Java', icon: FaJava },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb }
    ],
  },
  {
    title: 'Tools',
    icon: FaTools,
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Figma', icon: FaFigma },
      { name: 'Postman' },
    ],
  },
]

export const project = [
  {
    title: 'Personal Portfolio Website',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    description:
      'Designed and developed a personal portfolio website to showcase my projects, skills, and certifications. Implemented responsive design, smooth animations, and an intuitive user interface to create an engaging experience for visitors.',
  },
  {
    title: 'Loomiva: Showcase Website',
    tech: ['MongoDB', 'React', 'Node', 'Express', 'Motion', 'Cloudinary'],
    description:
      'Developed back-end REST APIs to perform CRUD operations and frontend to interact with these APIs. A showcase web application to showcase handcrafted woolen products.',
  },
  {
    title: 'Event Management System (EMS)',
    tech: ['Blockchain', 'MERN', 'React-native','MongoDB', 'React', 'Node', 'Express', 'Cloudinary'],
    description:
      'Developed a migration pipeline from AWS DynamoDB to Azure CosmosDB. Built ETL processing with AWS Glue and PySpark, live data sync using EventBus and EventRule, a scalable high-performance read layer for the Licenses Search API, and reprocessing for failed/non-synced data via EventBridge.',
  },
  {
    title: 'File Compression and Decompression Utility',
    tech: ['Java', 'Sql'],
    description:
      'Implemented a file compression and decompression utility using Java, utilizing algorithms like Huffman coding and LZW. Developed a user-friendly interface for selecting files and managing compression settings, resulting in efficient storage and faster file transfers.',
  },
]

export const certifications = [
  {
    title: 'Intrduction to Cyber Security',
    issuer: 'Cisco Networking Academy',
    url: 'https://learn.microsoft.com/en-us/users/mohamedzuhair-1495/credentials/545db1537b4233c',
    icon: FaLaptop,
  },
  {
    title: 'Intrduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    url: 'https://www.credly.com/badges/316dfc47-0760-4bc4-96dc-be62c0a61960/public_url',
    icon: FaLaptopCode,
  },
  {
    title: 'Python Essentials-I',
    issuer: 'Cisco Networking Academy',
    url: 'https://learn.microsoft.com/en-us/users/mohamedzuhair-1495/credentials/e192269e735fac0c',
    icon: FaPython,
  },
  {
    title: 'Python Essentials-II',
    issuer: 'Cisco Networking Academy',
    url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/8e01a7a45c764896a53a95408e59675d',
    icon: FaPython,
  },
  {
    title: 'Apply AI: Analyse Customer Reviews',
    issuer: 'Cisco Networking Academy',
    url: 'https://www.credential.net/e3256612-1b69-4dde-b40a-fa6166a45e02#gs.hw97ee#acc.5T1hwJjE',
    icon: SiSnowflake,
  },
  {
    title: 'Fundamentals of Object-Oriented Programming',
    issuer: 'IIT Roorkee',
    url: 'https://www.credly.com/badges/e8f53347-aa4d-4c20-a72a-2c49da25a08f/public_url',
    icon: FaObjectGroup,
  },
  {
    title: 'Programming in Modern C++',
    issuer: 'IIT Kharagpur',
    url: 'https://www.credly.com/badges/2ef47da1-0d7f-445a-b5e1-bc7d52d866ce/public_url',
    icon: SiApachekafka,
  },
]

export const education = {
  degree: 'B.Tech in CSE',
  institution: 'Sagar Institute of Science Technology and Research',
  university: 'RGPV University',
  cgpa: '7.58',
  year: '2027',
}

export const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
]
