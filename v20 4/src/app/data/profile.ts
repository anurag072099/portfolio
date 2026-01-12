export const PROFILE = {
  name: 'Anurag Patwardhan',
  firstName: 'Anurag',
  heroRole: 'Software Engineer',
  location: 'Boston, MA',
  email: 'patwardhan.an@northeastern.edu',
  phone: '+1-857-426-4288',
  linkedinHref: 'https://www.linkedin.com/',
  githubHref: 'https://github.com/',
  summary: 'I build reliable systems and elegant interfaces — fast, accessible, and user‑centric.',
  aboutHeadline: ' I am a Software Engineer based in Boston.',
  aboutBody: 'I love building end‑to‑end products — from data and AI‑powered features to polished UX. I focus on performance, maintainability, and thoughtful design.',
  skills: {
    Languages: ['Python','Java','C/C++','JavaScript/TypeScript','SQL','R','C#','Swift','HTML/CSS','MATLAB'],
    'AI/ML': ['PyTorch','TensorFlow','Scikit-learn','NumPy','Pandas','Matplotlib','NLP','Deep Learning','LLMs/OpenAI APIs'],
    DevTools: ['React','.NET','Angular','Node.js','Docker','Git','Firebase','MongoDB','PostgreSQL','REST APIs','Linux','Xcode Cloud'],
    DevOps: ['AWS','Azure','Google Cloud','CI/CD','Agile']
  },
  projects: [
    { name:'OpsCanvas', category:'SYSTEMS', tagline:'Manager dashboard combining Jira/GitHub/Slack into one surface.', stack:['Angular','Node.js','PostgreSQL','REST','Docker'] },
    { name:'HuskyAI', category:'AI', tagline:'Student assistant with RAG + role-based flows and fast search.', stack:['Angular','Node.js','MongoDB','RAG','LLMs'] },
    { name:'Insightflow', category:'DATA', tagline:'Insight pipeline turning raw data into decisions.', stack:['Python','SQL','Dashboards'] },
    { name:'PulseIQ', category:'ANALYTICS', tagline:'Predictive insights + trend detection for product metrics.', stack:['Python','NLP','ML'] },
    { name:'SyncSpace', category:'PRODUCTIVITY', tagline:'Collaborative workspace for teams with smart organization.', stack:['TypeScript','Web','APIs'] }
  ],
  experience: [
    {
      role: 'Associate Engineer – IT',
      company: 'Flex',
      location: 'Pune, India',
      period: 'Feb 2023 – Aug 2025',
      logo: 'assets/logos/flex.png',
      bullets: [
        'Designed and developed scalable enterprise web applications using C#, .NET Core, Angular, and SQL in production environments.',
        'Implemented RESTful backend services with a focus on performance, reliability, and long‑term maintainability.',
        'Optimized database queries and stored procedures, reducing application response times by 30%.',
        'Collaborated within Agile Scrum teams across design, development, testing, and production deployments.'
      ],
      stack: ['C#','.NET Core','Angular','SQL','REST','Agile']
    },
    {
      role: 'QA Test Engineer',
      company: 'GlobalStep LLC',
      location: 'Pune, India',
      period: 'May 2019 – Feb 2021',
      // logo: 'src/Globalstepp.png',
      logo: 'assets/logos/Globalstep.png',
      bullets: [
        'Created and executed comprehensive test plans covering functional, regression, and system testing scenarios.',
        'Partnered with developers to identify root causes and resolve defects throughout the software development lifecycle.',
        'Validated application stability and performance prior to production releases.',
        'Used JIRA and Azure DevOps to track defects and support release cycles.'
      ],
      stack: ['QA Testing','JIRA','Azure DevOps']
    }
  ],
  education: [
    {
      school: 'Ajeenkya DY Patil University',
      logo: 'assets/logos/dypatil.png',
      degree: 'B.Tech in Computer Engineering (Specialization: AI)',
      period: '2021 – 2023',
      location: 'India',
      coursework: ['Deep Learning','Neural Networks','Soft Computing','Computer Vision','Natural Language Processing','Genetic Algorithms']
    },
    {
      school: 'Northeastern University',
      logo: 'assets/logos/neu.png',
      degree: 'M.S. in Information Systems',
      period: '2025 – 2027',
      location: 'Boston, MA',
      coursework: ['Application Engineering & Development','Web Design & User Experience']
    }
  ]
};
