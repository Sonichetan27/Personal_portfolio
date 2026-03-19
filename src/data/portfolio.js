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
  SiApachekafka, SiChatbot, SiMongodb, SiMysql, SiOpenai, SiPostman, SiSnowflake
} from 'react-icons/si'

import { HiOutlineAcademicCap } from "react-icons/hi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

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
    'An aspiring software engineer with a keen interest in building modern web applications and solving real-world problems. I have worked with the MERN stack to develop responsive and scalable applications, and I am also familiar with React Native for mobile development. Comfortable with programming languages like Java, Python, C++, and SQL, along with a good understanding of core computer science concepts.',
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
      { name: 'C++', icon: FaCode },
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: FaPython },
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
      { name: 'GitHub', icon: FaGithub },
      { name: 'Figma', icon: FaFigma },
      { name: 'Postman', icon: SiPostman},
      { name: 'ChatGPT', icon: SiOpenai },
    ],
  },
]

export const project = [
  {
    title: 'Personal Portfolio Website',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    description:
      'Designed and developed a personal portfolio website to showcase my projects, skills, and certifications. Implemented responsive design, smooth animations, and an intuitive user interface to create an engaging experience for visitors.',
    url: 'https://github.com/Sonichetan27/Personal_portfolio',
  },
  {
    title: 'Loomiva: Showcase Website',
    tech: ['MongoDB', 'React', 'Node', 'Express', 'Motion', 'Cloudinary'],
    description:
      'A showcase web application to showcase handcrafted woolen products. Developed back-end REST APIs to perform CRUD operations and frontend to interact with these APIs.',
    url: 'https://github.com/Sonichetan27/Loomive-frontend',
  },
  {
    title: 'Event Management System',
    tech: ['Blockchain', 'MERN', 'React-native','MongoDB', 'React', 'Node', 'Express', 'Cloudinary'],
    description:
      'A platform that connects event organizers with gig workers for short-term hiring. It enables organizers to easily find required workers and allows gig workers to explore flexible opportunities. Designed to simplify event workforce management and coordination.',
    url: 'https://github.com/Sonichetan27/EventFlex',
  },
  {
    title: 'File Compression and Decompression Utility',
    tech: ['Java', 'Sql'],
    description:
      'Implemented a file compression and decompression utility using Java, utilizing algorithms like Huffman coding and LZW. Developed a user-friendly interface for selecting files and managing compression settings, resulting in efficient storage and faster file transfers.',
    url: 'https://github.com/Sonichetan27/FileCompressor',
  },
]

export const certifications = [
  {
    title: 'Intrduction to Cyber Security',
    issuer: 'Cisco Networking Academy',
    url: 'https://drive.google.com/file/d/1CExP_BP0Js4xaeJGV4TQMfA-UPyxmDFo/view?usp=drive_link',
    icon: FaLaptop,
  },
  {
    title: 'Intrduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    url: 'https://drive.google.com/file/d/1YzPAYGQnIG2iyYEyBwqZrWp1vSlsJz8t/view?usp=drive_link',
    icon: FaLaptopCode,
  },
  {
    title: 'Python Essentials-I',
    issuer: 'Cisco Networking Academy',
    url: 'https://drive.google.com/file/d/1UfZvOsDjaEPpnapBpa1ErzZkfORwjD0h/view?usp=drive_link',
    icon: FaPython,
  },
  {
    title: 'Python Essentials-II',
    issuer: 'Cisco Networking Academy',
    url: 'https://drive.google.com/file/d/1lQzK2IhRR7S1KZvepaTNP7ve7ZNwnI0K/view?usp=drive_link',
    icon: FaPython,
  },
  {
    title: 'Apply AI: Analyse Customer Reviews',
    issuer: 'Cisco Networking Academy',
    url: 'https://drive.google.com/file/d/1OZRQFz6XHtNbkFdxE4EShdg0lOukdFFn/view?usp=drive_link',
    icon: SiSnowflake,
  },
  {
    title: 'Fundamentals of Object-Oriented Programming',
    issuer: 'IIT Roorkee',
    url: 'https://drive.google.com/file/d/1grNPBPlLYhqKSKOJNc0iSIPq-uoI5gXw/view?usp=drive_link',
    icon: FaObjectGroup,
  },
  {
    title: 'Programming in Modern C++',
    issuer: 'IIT Kharagpur',
    url: 'https://drive.google.com/file/d/1FuNculztKWJKABCMAcyiIYRWOIEo7Aai/view?usp=drive_link',
    icon: HiOutlineBadgeCheck,
  },
  {
    title: 'Class Representative',
    issuer: 'SISTec',
    url: 'https://drive.google.com/file/d/1UWtEfWXcChjV2s3WWmGWR8eo5-blLQiF/view?usp=drive_link',
    icon: HiOutlineAcademicCap ,
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
