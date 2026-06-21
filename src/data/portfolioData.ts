export const personalInfo = {
  name: 'Amol Kanago',
  title: 'Software Developer |  Full Stack Developer',
  tagline: 'Building scalable, user-focused web applications with React.js and modern web technologies.',
  email: 'amolkanago0@gmail.com',
  phone: '+91 7795070927',
  linkedin: 'https://linkedin.com/in/amol-kanago-a95a99189',
  github: 'https://github.com/amolkanago',
  location: 'Belgaum, Karnataka, India',
  resumeUrl: '#',
};

export const aboutData = {
  description: [
    "I'm a Software Developer with more than a year of experience crafting scalable, responsive web applications using React.js and modern JavaScript technologies. My journey in enterprise software development has equipped me with expertise in healthcare applications, workflow-driven systems, and reusable component architecture.",
    "I believe in writing clean, maintainable code that stands the test of time. My approach combines technical excellence with user-centric design, ensuring every application I build delivers exceptional experiences.",
    "Currently, I'm expanding my horizons into full-stack development, diving deep into Next.js, Node.js, Express.js, and MongoDB to build production-grade applications."
  ],
  stats: [
    { label: 'Years Experience', value: '1+' },
    { label: 'Enterprise Apps Delivered', value: '5+' },
    { label: 'Technologies Mastered', value: '15+' },
    { label: 'Components Built', value: '100+' },
  ],
};

export const skillsData = {
  frontend: [
    { name: 'React.js', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Bootstrap', level: 88 },
    { name: 'Next.js', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 68 },
  ],
  databases: [
    { name: 'MongoDB', level: 65 },
    { name: 'MySQL', level: 72 },
  ],
  tools: [
    { name: 'Git', level: 88 },
    { name: 'GitHub', level: 90 },
    { name: 'Postman', level: 85 },
    { name: 'VS Code', level: 95 },
  ],
  concepts: [
    'REST APIs',
    'Authentication & Authorization',
    'Role-Based Access Control',
    'Responsive Design',
    'Component Architecture',
    'State Management',
    'Agile Methodology',
  ],
};

export const experienceData = [
  {
    title: 'Software Developer',
    company: 'iNetFrame Technologies Pvt. Ltd.',
    location: 'Bengaluru, India',
    duration: '2024 - 2025',
    responsibilities: [
      'Developed enterprise web applications using React.js, delivering high-performance solutions for complex business requirements.',
      'Built reusable UI components and scalable frontend architecture, reducing development time by 40%.',
      'Integrated REST APIs and backend services, ensuring seamless data flow across applications.',
      'Developed workflow-driven business applications with complex state management requirements.',
      'Implemented responsive user interfaces serving thousands of daily active users.',
      'Collaborated with cross-functional teams including designers, backend developers, and QA engineers.',
      'Improved maintainability through component reusability and documentation practices.',
      'Implemented authentication and authorization systems with role-based access control.',
    ],
    achievements: [
      'React Development',
      'Enterprise Applications',
      'RBAC Implementation',
    ],
  },
  {
    title: 'MERN Stack Trainer',
    company: 'Softmusk Info Pvt. Ltd.',
    location: 'Belagavi, India',
    duration: '2022 - 2024',
    responsibilities: [
      'Delivered comprehensive MERN Stack training programs covering MongoDB, Express.js, React.js, and Node.js technologies.',
      'Designed and conducted hands-on coding sessions, enabling students to build full-stack web applications from scratch.',
      'Mentored aspiring developers on frontend architecture, backend development, and database design best practices.',
      'Created structured learning materials, assignments, and real-world project-based training modules.',
      'Guided students in developing responsive user interfaces using React.js, HTML5, CSS3, and JavaScript.',
      'Provided technical support and code reviews, helping learners improve coding standards and problem-solving skills.',
      'Conducted workshops on REST API development, authentication, authorization, and deployment workflows.',
      'Assisted students in completing industry-oriented projects and preparing for technical interviews and job opportunities.',
    ],
    achievements: [
      'MERN Stack Training',
      'Technical Mentorship',
      'Project-Based Learning',
    ],
  },
];

export const projectsData = [
  {
    title: 'Enterprise Healthcare Data Platform',
    description:
      'Developed enterprise-grade healthcare data management and integration modules supporting data ingestion, cloud connectivity, synchronization workflows, and operational administration for healthcare organizations.',

    features: [
      'Connector Management',
      'Data Mart Administration',
      'User Management',
      'Cloud Destination Onboarding',
      'Data Synchronization',
      'SQL Operations',
      'Healthcare Data Workflows',
    ],

    responsibilities: [
      'Developed React.js modules for Connector Management, Data Mart Administration, User Management, and SQL Operations.',
      'Built onboarding and configuration workflows for Snowflake, Databricks, and Azure Blob Storage destinations.',
      'Designed stream selection, synchronization, and connection management interfaces supporting enterprise data replication.',
      'Implemented Common Data Model (CDM) integration and standardized healthcare data mapping workflows.',
      'Enhanced metadata visibility and connector administration dashboards to improve operational efficiency.',
      'Collaborated with backend teams to integrate REST APIs and streamline healthcare data management processes.',
    ],

    technologies: [
      'React.js',
      'TypeScript',
      'Redux',
      'REST APIs',
      'Snowflake',
      'Databricks',
      'Azure Blob Storage',
      'FHIR',
    ],

    impact:
      'Reduced cloud destination setup time by 30%, decreased configuration errors by 40%, and improved operational efficiency through workflow automation and dashboard enhancements.',
  },

  {
    title: 'Healthcare Data Exchange Platform',
    description:
      'Built frontend solutions enabling secure healthcare data exchange between organizations while supporting interoperability standards and complex data-sharing workflows.',

    features: [
      'Payer-to-Payer Workflows',
      'Data Exchange Dashboard',
      'FHIR Data Integration',
      'Workflow Monitoring',
      'API Integration',
      'Status Tracking',
    ],

    responsibilities: [
      'Developed frontend modules supporting payer-to-payer healthcare data exchange workflows.',
      'Integrated APIs for data retrieval, processing, and presentation of healthcare information.',
      'Built dashboards to monitor exchange activities, workflow status, and operational metrics.',
      'Implemented reusable React components to improve maintainability and consistency across modules.',
      'Collaborated with cross-functional teams to support healthcare interoperability requirements.',
    ],

    technologies: [
      'React.js',
      'TypeScript',
      'Redux',
      'REST APIs',
      'FHIR',
      'JavaScript',
    ],

    impact:
      'Enabled streamlined healthcare data exchange workflows and improved visibility into interoperability operations through scalable frontend solutions.',
  },

  {
    title: 'Prior Authorization Management System',
    description:
      'Developed healthcare authorization workflows and user interfaces supporting interoperability standards, authorization tracking, and operational efficiency.',

    features: [
      'Authorization Workflows',
      'FHIR Integration',
      'Status Tracking',
      'Form Management',
      'Data Validation',
      'Workflow Automation',
    ],

    responsibilities: [
      'Built user interfaces supporting prior authorization processes and healthcare interoperability workflows.',
      'Integrated APIs for authorization requests, status updates, and data validation.',
      'Developed reusable form components and workflow management interfaces.',
      'Implemented validation and error-handling mechanisms to improve data accuracy.',
      'Collaborated with stakeholders to deliver user-friendly healthcare workflow experiences.',
    ],

    technologies: [
      'React.js',
      'TypeScript',
      'REST APIs',
      'FHIR',
      'Redux',
      'JavaScript',
    ],

    impact:
      'Improved authorization workflow efficiency through streamlined interfaces, standardized processes, and enhanced user experience.',
  },

  {
    title: 'TasteHub',
    description:
      'A full-stack food ordering and restaurant management platform built using the MERN stack.',

    features: [
      'JWT Authentication',
      'Restaurant Discovery',
      'Advanced Search',
      'Menu Management',
      'Shopping Cart',
      'Order Management',
    ],

    responsibilities: [
      'Built a full-stack food ordering platform using React.js, Node.js, Express.js, and MongoDB.',
      'Implemented JWT-based authentication and authorization.',
      'Developed REST APIs for users, menus, carts, and orders.',
      'Designed responsive UI components using React and Tailwind CSS.',
    ],

    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
    ],

    impact:
      'Demonstrated full-stack development expertise by building a scalable restaurant management platform.',
  },
];


export const servicesData = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, performant web applications using modern JavaScript frameworks and best practices.',
    icon: 'Monitor',
  },
  {
    title: 'Full Stack Development',
    description: 'Building scalable, production-grade web applications using modern frontend and backend technologies, REST APIs, databases, authentication, and performance-focused architecture.',
    icon: 'Code',
  },
  {
    title: 'Responsive Web Design',
    description: 'Creating mobile-first, accessible designs that work flawlessly across all devices and screen sizes.',
    icon: 'Layout',
  },
  {
    title: 'REST API Integration',
    description: 'Seamless integration with backend services, REST APIs, and third-party services.',
    icon: 'Database',
  },
  {
    title: 'UI Component Development',
    description: 'Building reusable, maintainable component libraries for scalable applications.',
    icon: 'Layers',
  },
  {
    title: 'Enterprise Applications',
    description: 'Developing complex, enterprise-grade applications with robust architecture and security.',
    icon: 'Building',
  },
];

export const learningData = {
  currently: [
    { name: 'Next.js', progress: 75 },
    { name: 'Advanced React Patterns', progress: 80 },
    { name: 'Node.js', progress: 70 },
    { name: 'Express.js', progress: 65 },
    { name: 'MongoDB', progress: 60 },
    { name: 'System Design', progress: 55 },
    { name: 'Production Backend', progress: 50 },
  ],
  certifications: [
    'React.js Professional Certification',
    'JavaScript Algorithms & Data Structures',
    'Responsive Web Design',
    'Frontend Development Mastery',
  ],
};
