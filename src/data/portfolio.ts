export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
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
    detailedDescription: 'This comprehensive project involved the complete design and implementation of a six-axis robotic arm system capable of precise manipulation tasks in manufacturing environments. The project encompassed mechanical design using SolidWorks, where I developed the kinematic structure with optimized joint configurations for maximum workspace coverage. The control system was implemented using Arduino microcontrollers with custom C++ firmware, featuring advanced PID control algorithms for smooth and accurate motion. MATLAB was utilized for trajectory planning, inverse kinematics calculations, and system simulation. The robotic arm features modular end-effector mounting, allowing for various tools and grippers to be attached based on specific manufacturing requirements. The main structure of the arm was 3D printed for cheap and rapid prototyping purposes. The housings for the motors were originally expanding during the actuation process so many new designs were made to reduce overheating.',
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
    description: 'Automated laboratory incubation system for biological cell culture applications.',
    detailedDescription: 'This research project focused on developing an automated laboratory incubation system for biological cell culture applications, with particular emphasis on maintaining precise environmental conditions for neuron cell growth. The system integrates advanced temperature control, humidity regulation, CO2 concentration monitoring, and automated media exchange capabilities. Python scripting was employed for data acquisition, real-time monitoring, and automated control algorithms. The project involved extensive heat transfer analysis to design efficient heating elements and insulation systems. The final system achieved temperature stability within ±0.1°C and humidity control within ±2% RH, making it suitable for sensitive biological research applications.\n\nKey project achievements include:\n• Created an enclosed system to grow and nurture neuron brain cells by exchanging media and building a microscope to observe them.\n• Converted a 3D printer and repurposed its end effector to control a micropipette to exchange medium and microscope for observation. The end effector will change based on which tool is needed.\n• Created a rocking system to tilt old medium liquid to ensure proper exchange of new medium. Created a microscope with remote control capabilities to zoom in and out for precise observation of the neurons. Created a pipetting system to exchange medium and pipette tips to reduce contamination. This project tested my understanding of precision manufacturing.',
    technologies: ['Python', 'CFD', 'Heat Transfer Analysis', 'SolidWorks FEA', 'CAD'],
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
    description: 'Custom Construction and Improvements of Prusa MK3s.',
    detailedDescription: 'This comprehensive additive manufacturing project involved the complete assembly, calibration, and optimization of a Prusa MK3s 3D printer for high-precision prototyping applications.\n\n• The project began with mechanical assembly from kit components, followed by extensive calibration procedures to achieve optimal print quality.\n\n• I developed custom printing profiles for various materials including PLA, PETG, ABS, and specialty engineering plastics.\n\n• The focus extended to process optimization through systematic parameter studies examining layer height, print speed, infill patterns, and temperature settings.\n\n• Quality control protocols were established including dimensional accuracy testing, surface finish analysis, and mechanical property validation.\n\n• The project also involved developing post-processing techniques for improved part quality and implementing automated bed leveling systems for consistent first-layer adhesion. Also, Enhancing its capabilities by building an enclosure & a smaller nozzle size.\n\n• The final system achieved dimensional tolerances within ±0.05mm for small components and enabled rapid prototyping capabilities for various engineering applications.',
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
    detailedDescription: 'This advanced research project focused on aerodynamic optimization of wind turbine blade designs to maximize energy extraction efficiency while minimizing noise generation and structural loads. The project employed computational fluid dynamics (CFD) analysis using ANSYS Fluent to investigate complex flow phenomena around various blade geometries. Multiple airfoil profiles were analyzed, including NACA series and custom-designed sections optimized for specific wind conditions. The research involved parametric studies of blade twist distribution, chord length variation, and tip design modifications. Wind tunnel testing was conducted on scaled models to validate CFD predictions and gather experimental data for boundary layer behavior and wake characteristics. Data analysis techniques included statistical correlation analysis, sensitivity studies, and multi-objective optimization algorithms. The project resulted in novel blade design concepts that demonstrated significant improvements in energy capture efficiency while contributing to more environmentally friendly wind energy systems. Additionally, we constructed the base of the Windmill tower with two 3D printed parts. Tested and printed with many materials like ASA, ABS, PETG, PLA, etc. Tested ASA filament for windmill blades for low-density qualities, large temperature changes, strength, and stiffness.',
    technologies: ['CFD', 'ANSYS', 'Wind Tunnel Testing', 'Data Analysis', 'SolidWorks FEA', 'CAD'],
    category: 'analysis',
    image: '/projects/wind-turbine.jpg',
    duration: '12 months',
    highlights: [
      'Increased energy output by 18%',
      'Solidworks FEA practice',
      'Validated with wind tunnel experiments'
    ]
  }
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Advanced Manufacturing Solutions',
    position: 'Taiwan Semiconductor Manufacturing Company ( TSMC ): Epitaxy Equipement Engineer Intern',
    duration: 'May 2025 - Aug 2025',
    location: 'Phoenix, AZ',
    description: [
      'Experimented with Spot Lamp positionings to ensure an ideal thickness and thickness profile of a silicon wafer.',
      'Collaborated with ASM to analyze different heating positions & tuning temperature inputs to ensure uniform wafer thickness profiles',
      'Implement lean manufacturing principles to optimize production efficiency',
      'Analyzed FDC alarms & SPC charts and conducted root cause analysis on recurring failures and tool problems',
      'Performed preventative maintenance and supported continuous improvement of maintenance procedures'
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
      'Neurotech at Berkeley (NT@B)',
      'Space Enterprise at Berkeley (SEB)',
      'Jacob\'s Design Innovation',
      'Research on culturing brain cells'
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
      { name: 'Javascript', logo: '/logos/javascript.svg', level: 83 },
      { name: 'Java', logo: '/logos/java.svg', level: 87 },
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
  linkedin: 'https://www.linkedin.com/in/aaronlee5702/',
  github: 'https://github.com/aaronlee5702-dot',
  website: 'https://aaronlee.dev',
  summary: 'Third-year undergraduate studying mechanical engineering with a focus on materials, manufacturing, and robotics. Additionally, I researched in the field of biotech with a focus on automating the culturing of brain cells.'
}; 