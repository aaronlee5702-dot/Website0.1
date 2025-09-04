export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'design' | 'analysis' | 'manufacturing' | 'research';
  image: string;
  duration: string;
  highlights: string[];
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  gpa?: string;
  achievements: string[];
}

export interface SkillItem {
  name: string;
  logo?: string; // Path to logo image or icon identifier
  level?: number; // Skill level percentage
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: '6-axis Robotic Arm',
    description: 'Designed and developed a 6-DOF robotic arm with precision control for manufacturing applications.',
    technologies: ['SolidWorks', 'MATLAB', 'Arduino', 'C++', 'PID Control'],
    category: 'design',
    image: '/projects/robotic-arm.jpg',
    duration: '6 months',
    highlights: [
      'Achieved ±0.1mm positioning accuracy',
      'Reduced manufacturing time by 30%',
      'Implemented advanced control algorithms',
      'Cost-effective solution under $5000'
    ],
    link: 'https://github.com/example/robotic-arm'
  },
  {
    id: '2',
    title: 'Automated Lab System Incubator',
    description: 'Performed thermal analysis and optimization of shell-and-tube heat exchangers for industrial applications.',
    technologies: ['ANSYS Fluent', 'Python', 'CFD', 'Heat Transfer Analysis'],
    category: 'research',
    image: '/projects/heat-exchanger.jpg',
    duration: '4 months',
    highlights: [
      'Improved heat transfer efficiency by 25%',
      'Reduced pressure drop by 15%',
      'Validated results with experimental data',
      'Published findings in peer-reviewed journal'
    ]
  },
  {
    id: '3',
    title: 'Additive Manufacturing: Prusa MK3s Construction',
    description: 'Developed optimized 3D printing parameters for aerospace-grade titanium components.',
    technologies: ['3D Printing', 'Material Science', 'Quality Control', 'Metallurgy'],
    category: 'manufacturing',
    image: '/projects/3d-printing.jpg',
    duration: '8 months',
    highlights: [
      'Achieved 99.5% density in printed parts',
      'Reduced material waste by 40%',
      'Established quality control protocols',
      'Certified for aerospace applications'
    ]
  },
  {
    id: '4',
    title: 'Wind Turbine Blade Aerodynamics Generator',
    description: 'Research project on optimizing wind turbine blade design for maximum energy efficiency.',
    technologies: ['CFD', 'ANSYS', 'Wind Tunnel Testing', 'Data Analysis'],
    category: 'analysis',
    image: '/projects/wind-turbine.jpg',
    duration: '12 months',
    highlights: [
      'Increased energy output by 18%',
      'Reduced noise levels by 12dB',
      'Validated with wind tunnel experiments',
      'Patent application filed'
    ]
  }
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Advanced Manufacturing Solutions',
    position: 'TSMC: Epitaxy Equipement Engineer Intern',
    duration: '2022 - Present',
    location: 'San Francisco, CA',
    description: [
      'Lead design and development of automated manufacturing systems',
      'Manage cross-functional teams of 8+ engineers and technicians',
      'Implement lean manufacturing principles to optimize production efficiency',
      'Collaborate with clients to develop custom engineering solutions'
    ],
    technologies: ['SolidWorks', 'AutoCAD', 'ANSYS', 'Python', 'PLC Programming']
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Massachusetts Institute of Technology',
    degree: 'Master of Science',
    field: 'Mechanical Engineering',
    duration: '2016 - 2018',
    gpa: '3.9/4.0',
    achievements: [
      'Thesis: "Advanced Control Systems for Robotic Applications"',
      'Graduate Research Assistant',
      'Dean\'s List (4 semesters)',
      'Outstanding Graduate Student Award'
    ]
  },
  {
    id: '2',
    institution: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    field: 'Mechanical Engineering',
    duration: '2012 - 2016',
    gpa: '3.8/4.0',
    achievements: [
      'Magna Cum Laude',
      'Tau Beta Pi Honor Society',
      'ASME Student Chapter President',
      'Senior Design Project: First Place'
    ]
  }
];

export const skills: Skill[] = [
  {
    category: 'CAD/Design Software',
    items: [
      { name: 'SolidWorks', logo: '/logos/solidworks.svg', level: 95 },
      { name: 'AutoCAD', logo: '/logos/autocad.svg', level: 90 },
      { name: 'Fusion 360', logo: '/logos/fusion360.svg', level: 88 },
      { name: 'Onshape', logo: '/logos/onshape.svg', level: 85 }
    ]
  },
  {
    category: 'Analysis & Simulation',
    items: [
      { name: 'ANSYS (Mechanical, Fluent, CFX)', logo: '/logos/ansys.svg', level: 95 },
      { name: 'SolidWorks FEA', logo: '/logos/solidworks-fea.svg', level: 90 },
      { name: 'MATLAB/Simulink', logo: '/logos/matlab.svg', level: 92 }
    ]
  },
  {
    category: 'Programming & Automation',
    items: [
      { name: 'Python', logo: '/logos/python.svg', level: 92 },
      { name: 'C++', logo: '/logos/cpp.svg', level: 85 },
      { name: 'MATLAB', logo: '/logos/matlab.svg', level: 90 },
      { name: 'LabVIEW', logo: '/logos/labview.svg', level: 83 },
      { name: 'PLC Programming', logo: '/logos/plc.svg', level: 87 },
      { name: 'Arduino', logo: '/logos/arduino.svg', level: 89 }
    ]
  },
  {
    category: 'Manufacturing & Processes',
    items: [
      { name: 'CNC Machining', logo: '/logos/cnc.svg', level: 88 },
      { name: '3D Printing', logo: '/logos/3d-printing.svg', level: 91 },
      { name: 'Injection Molding', logo: '/logos/injection-molding.svg', level: 85 },
      { name: 'Welding', logo: '/logos/welding.svg', level: 82 },
      { name: 'Sheet Metal', logo: '/logos/sheet-metal.svg', level: 86 },
      { name: 'Assembly', logo: '/logos/assembly.svg', level: 89 }
    ]
  },
  {
    category: 'Engineering Fundamentals',
    items: [
      { name: 'Thermodynamics', logo: '/logos/thermodynamics.svg', level: 93 },
      { name: 'Fluid Mechanics', logo: '/logos/fluid-mechanics.svg', level: 91 },
      { name: 'Heat Transfer', logo: '/logos/heat-transfer.svg', level: 89 },
      { name: 'Materials Science', logo: '/logos/materials.svg', level: 87 },
      { name: 'Control Systems', logo: '/logos/control-systems.svg', level: 90 },
      { name: 'Vibrations', logo: '/logos/vibrations.svg', level: 85 }
    ]
  }
];

export const personalInfo = {
  name: 'Aaron Lee',
  title: 'B.S. Mechanical Engineer',
  email: 'oisaaronlee@gmail.com',
  phone: '+1 (925) 885-9137',
  location: 'San Francisco, CA',
  linkedin: 'https://linkedin.com/in/aaronlee',
  github: 'https://github.com/aaronlee',
  website: 'https://aaronlee.dev',
  summary: 'Third-year undergraduate studying mechanical engineering with a focus on materials, manufacturing, and robotics. Additionally, I researched in the field of biotech with a focus on automating the culturing of brain cells.'
}; 