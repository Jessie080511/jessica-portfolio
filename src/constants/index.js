export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Southwest University',
    position: 'Bachelor of Science in Accountancy',
    img: 'assets/Southwest_University.png',
    review:'During my undergraduate studies, I studied finance, financial management, tax law, statistics, and other courses. I also taught myself computer knowledge such as linear algebra, python, calculus, and HTML. Finally, I took a minor in law and learned some international law knowledge.'
  },
  {
    id: 2,
    name: 'San Francisco Bay University',
    position: 'Master of Computer Science',
    img: 'assets/SFBU.png',
    review:
      'During my postgraduate studies, I took a comprehensive range of computer courses, including Software Quality Assurance and Test Automation, Object Oriented Design in Python, Database Technologies, Cloud Security, Algorithms, Mathematics and Statistics for Data Science, Data Modeling and Implementation Techniques.',
  },
];

export const myProjects = [
  {
    title: 'Nail Code - AI-Powered E-Commerce Platform',
    desc: 'An AI-driven e-commerce website specializing in customized nail art recommendations. Features an AI chatbot that enhances user experience by providing real-time customer support and personalized product suggestions.',
    subdesc:
      'Built with React for dynamic UI, Redux Toolkit for efficient state management, and Tailwind CSS for responsive styling. Utilized MongoDB for flexible data storage and DeepSeek LLM to power the AI chatbot, enabling accurate, context-aware interactions.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/output2.mp4',
    logo: '/assets/Nail.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Mangodb',
        path: '/assets/mangodb.png',
      },
      {
        id: 4,
        name: 'Deepseek',
        path: '/assets/deepseek.png',
      },
    ],
  },
  {
    title: 'Best Buy Automation Testing Project',
    desc: 'Developed an automated testing framework for Best Buy’s product search and filtering. Implemented a data-driven approach using Cucumber to enhance efficiency, accuracy, and test repeatability.',
    subdesc:
      'Utilized Selenium WebDriver for browser automation, TestNG for test sequencing, and Cucumber for behavior-driven development (BDD). Designed structured test cases to verify search, filtering, and navigation functionalities, ensuring robust e-commerce automation testing.',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/bestbuy.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Cucumber',
        path: '/assets/cucumber.png',
      },
      {
        id: 2,
        name: 'Selenium',
        path: 'assets/Selenium.png',
      },
      {
        id: 3,
        name: 'TestNg',
        path: '/assets/TN.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Volunteer Organization (China)',
    pos: 'Comprehensive Volunteer',
    duration: 'Aug 2018 - Aug 2019',
    title: "Popularized legal knowledge on self-protection for underage girls, women rights, and vulnerable groups. Integrated big data to list volunteer services. Managed office income and payments via ERP.",
    icon: '/assets/volunteer.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ByteDance (China)',
    pos: 'Content Analyst',
    duration: 'Mar 2020 - Dec 2020',
    title: "Responsible for content risk and quality audits on Toutiao. Provided feedback to enhance user experience and optimize audit rules. Summarized and analyzed data in tables.",
    icon: '/assets/bytedance.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Dazhulin Xinghui Community (China)',
    pos: 'Data Analyst',
    duration: 'Dec 2020 - Apr 2023',
    title: "Managed detailed tables using office software applications. Conducted big data manipulation, analysis, and comparison. Operated the ERP system. Oversaw department finances and accounting.",
    icon: '/assets/community.png',
    animation: 'salute',
  },
];
