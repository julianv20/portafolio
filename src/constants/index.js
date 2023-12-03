import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  codeConnect,
  analitica,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'lenguajes',
    title: 'Lenguajes',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    icon: starbucks,
    iconBg: '#383E56',
    points: [
      'As a React.js Developer, I specialize in developing and maintaining web applications using React.js and related technologies. My expertise includes utilizing React Query, React Router DOM, React Hook Form, creating custom hooks, and working with state management tools such as Redux and Redux Toolkit, among others.',
    ],
  },

  {
    title: 'Node JS Developer',
    icon: shopify,
    iconBg: '#383E56',
    points: [
      '      As a Node.js Developer, I possess strong expertise in crafting backend applications using Node.js and the Express framework. My experience extends to implementing token-based authentication and applying comprehensive validations to ensure the security and robustness of systems.',
    ],
  },
  {
    title: 'MongoDB and SQl',
    icon: meta,
    iconBg: '#E6DEDD',
    points: [
      'As a Database Developer, I bring expertise in working with both SQL and MongoDB databases. In the realm of SQL, I am adept at designing and managing relational databases, leveraging my skills in crafting efficient queries, stored procedures, and ensuring data integrity.',
      'I also excel in MongoDB, specializing in the development of NoSQL database solutions. My proficiency includes designing flexible schemas, optimizing queries, and utilizing the strengths of MongoDB to deliver high-performance and scalable database solutions.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Code Connect',
    description:
      'Code Connect is a social network tailored for developers, crafted as a part of my thesis project. This endeavor was developed using React with Redux and Redux Toolkit for the frontend, while the backend was implemented with Node.js, incorporating sockets for real-time communication. The objective behind Code Connect was to foster the creation of a community where developers could share knowledge and collaborate effectively on projects.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux',
        color: 'text-neutral-100',
      },
      {
        name: 'Node - Express',
        color: 'text-purple-600',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: codeConnect,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Analitica',
    description:
      'Analitica was developed with the purpose of providing businesses with data organization capabilities. This platform allows businesses to input service data for each client, enabling them to visualize and analyze this data through various graphs. The goal is to derive intelligent insights and conclusions from the presented analytics, empowering businesses to make informed decisions based on the data collected.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'React Query',
        color: 'text-green-600',
      },
      {
        name: 'Node - Express',
        color: 'text-purple-600',
      },
      {
        name: 'SQL',
        color: 'text-yellow-600',
      },
    ],
    image: analitica,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Diverse Project Portfolio',

    description:
      'Throughout my career, I ve crafted a range of projects, from movie search engines to expense management apps and web platforms dedicated to organizing favorite book collections. These endeavors span from straightforward and practical solutions to more comprehensive applications, showcasing my ability to adapt to diverse needs and deliver effective solutions.',

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: '',
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
