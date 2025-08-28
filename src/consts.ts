// Site configuration
export const SITE_TITLE = 'Tu Nombre - Ingeniero de Software';
export const SITE_DESCRIPTION = 'Portafolio personal de un ingeniero de software especializado en desarrollo web y tecnologías modernas.';

// Personal information
export const PERSONAL_INFO = {
  name: 'Tu Nombre',
  title: 'Ingeniero de Software',
  email: 'tu.email@ejemplo.com',
  phone: '+1 (555) 123-4567',
  location: 'Ciudad, País',
  linkedin: 'https://linkedin.com/in/tu-perfil',
  github: 'https://github.com/tu-usuario',
  website: 'https://tu-sitio.com'
};

// Skills and technologies
export const SKILLS = {
  frontend: ['React', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'Java', 'C#', 'Express.js', 'Django', 'Spring Boot'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'],
  methodologies: ['Agile', 'Scrum', 'TDD', 'CI/CD', 'DevOps']
};

// Work experience
export const EXPERIENCE = [
  {
    company: 'Tech Company Inc.',
    position: 'Senior Software Engineer',
    period: '2022 - Presente',
    location: 'Ciudad, País',
    description: 'Lidero el desarrollo de aplicaciones web escalables utilizando React y Node.js. Implementé arquitecturas de microservicios que mejoraron el rendimiento en un 40%.',
    achievements: [
      'Desarrollé una plataforma de e-commerce que maneja 10,000+ usuarios diarios',
      'Reduje el tiempo de carga de la aplicación en un 60% mediante optimizaciones',
      'Mentoré a 3 desarrolladores junior en mejores prácticas de código'
    ]
  },
  {
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    period: '2020 - 2022',
    location: 'Ciudad, País',
    description: 'Desarrollé aplicaciones web completas desde el concepto hasta la producción, trabajando directamente con stakeholders para definir requisitos.',
    achievements: [
      'Construí el MVP de la empresa desde cero usando React y Express.js',
      'Implementé sistema de autenticación y autorización seguro',
      'Integré APIs de terceros para pagos y notificaciones'
    ]
  }
];

// Education
export const EDUCATION = [
  {
    institution: 'Universidad Tecnológica',
    degree: 'Ingeniería en Sistemas Computacionales',
    period: '2016 - 2020',
    location: 'Ciudad, País',
    gpa: '3.8/4.0',
    honors: 'Magna Cum Laude'
  }
];

// Certifications
export const CERTIFICATIONS = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-SAA-123456'
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialId: 'GCP-PD-789012'
  },
  {
    name: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
    credentialId: 'CKA-345678'
  }
];

// Projects
export const PROJECTS = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma completa de comercio electrónico con carrito de compras, pagos integrados y panel de administración.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/tu-usuario/ecommerce-platform',
    demo: 'https://tu-ecommerce.vercel.app',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.',
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/tu-usuario/task-manager',
    demo: 'https://tu-task-manager.netlify.app',
    featured: true
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con mapas, pronósticos y alertas meteorológicas.',
    technologies: ['Angular', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/tu-usuario/weather-dashboard',
    demo: 'https://tu-weather-app.vercel.app',
    featured: false
  }
];