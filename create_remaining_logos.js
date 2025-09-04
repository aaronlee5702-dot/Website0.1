const fs = require('fs');
const path = require('path');

const logos = [
  { name: 'abaqus', color: '#2563EB', icon: 'grid' },
  { name: 'ls-dyna', color: '#7C3AED', icon: 'wave' },
  { name: 'plc', color: '#059669', icon: 'circuit' },
  { name: 'cnc', color: '#DC2626', icon: 'gear' },
  { name: 'injection-molding', color: '#EA580C', icon: 'mold' },
  { name: 'welding', color: '#7C2D12', icon: 'spark' },
  { name: 'sheet-metal', color: '#6B7280', icon: 'sheet' },
  { name: 'assembly', color: '#1F2937', icon: 'puzzle' },
  { name: 'thermodynamics', color: '#EF4444', icon: 'temp' },
  { name: 'fluid-mechanics', color: '#3B82F6', icon: 'flow' },
  { name: 'heat-transfer', color: '#F59E0B', icon: 'heat' },
  { name: 'materials', color: '#8B5CF6', icon: 'atom' },
  { name: 'control-systems', color: '#10B981', icon: 'control' },
  { name: 'vibrations', color: '#EC4899', icon: 'wave' },
  { name: 'agile', color: '#06B6D4', icon: 'cycle' },
  { name: 'lean', color: '#84CC16', icon: 'arrow' },
  { name: 'six-sigma', color: '#1D4ED8', icon: 'sigma' },
  { name: 'risk', color: '#DC2626', icon: 'warning' },
  { name: 'quality', color: '#059669', icon: 'check' }
];

const generateSVG = (name, color, iconType) => {
  let iconPath = '';
  
  switch(iconType) {
    case 'grid':
      iconPath = '<rect x="8" y="8" width="6" height="6" fill="white"/><rect x="18" y="8" width="6" height="6" fill="white"/><rect x="8" y="18" width="6" height="6" fill="white"/><rect x="18" y="18" width="6" height="6" fill="white"/>';
      break;
    case 'wave':
      iconPath = '<path d="M8 16c2-4 4-4 6 0s4 4 6 0 4-4 6 0" stroke="white" stroke-width="2" fill="none"/>';
      break;
    case 'circuit':
      iconPath = '<rect x="8" y="14" width="4" height="4" fill="white"/><rect x="20" y="14" width="4" height="4" fill="white"/><line x1="12" y1="16" x2="20" y2="16" stroke="white" stroke-width="2"/>';
      break;
    case 'gear':
      iconPath = '<circle cx="16" cy="16" r="6" stroke="white" stroke-width="2" fill="none"/><circle cx="16" cy="16" r="2" fill="white"/>';
      break;
    case 'mold':
      iconPath = '<path d="M8 12h16v8c0 2-2 4-4 4h-8c-2 0-4-2-4-4v-8z" fill="white"/>';
      break;
    case 'spark':
      iconPath = '<path d="M16 8l-2 6h4l-2 6M12 12l-2 4h4M20 12l2 4h-4" stroke="white" stroke-width="2" fill="none"/>';
      break;
    case 'sheet':
      iconPath = '<rect x="8" y="10" width="16" height="12" rx="1" fill="white"/><line x1="12" y1="14" x2="20" y2="14" stroke="' + color + '" stroke-width="1"/><line x1="12" y1="18" x2="20" y2="18" stroke="' + color + '" stroke-width="1"/>';
      break;
    case 'puzzle':
      iconPath = '<path d="M8 8h6v2h2v2h-2v4h2v2h-2v6h-6v-6h-2v-2h2v-4h-2v-2h2V8z" fill="white"/><path d="M18 8h6v16h-6v-6h2v-2h-2v-4h2v-2h-2V8z" fill="white"/>';
      break;
    case 'temp':
      iconPath = '<circle cx="16" cy="20" r="3" fill="white"/><rect x="14" y="8" width="4" height="12" fill="white"/>';
      break;
    case 'flow':
      iconPath = '<path d="M8 12c4 0 4 8 8 8s4-8 8-8" stroke="white" stroke-width="2" fill="none"/><path d="M20 16l4-4M20 16l4 4" stroke="white" stroke-width="2" fill="none"/>';
      break;
    case 'heat':
      iconPath = '<path d="M16 8c-2 2-2 4 0 6s2 4 0 6M12 10c-1 1-1 2 0 3s1 2 0 3M20 10c1 1 1 2 0 3s-1 2 0 3" stroke="white" stroke-width="2" fill="none"/>';
      break;
    case 'atom':
      iconPath = '<circle cx="16" cy="16" r="2" fill="white"/><ellipse cx="16" cy="16" rx="8" ry="3" stroke="white" stroke-width="2" fill="none"/><ellipse cx="16" cy="16" rx="3" ry="8" stroke="white" stroke-width="2" fill="none"/>';
      break;
    case 'control':
      iconPath = '<rect x="8" y="12" width="4" height="8" fill="white"/><rect x="14" y="10" width="4" height="12" fill="white"/><rect x="20" y="14" width="4" height="6" fill="white"/>';
      break;
    case 'cycle':
      iconPath = '<path d="M16 8c4 0 8 4 8 8s-4 8-8 8" stroke="white" stroke-width="2" fill="none"/><path d="M16 24c-4 0-8-4-8-8s4-8 8-8" stroke="white" stroke-width="2" fill="none"/><path d="M12 8l4 4M20 20l4 4" stroke="white" stroke-width="2" fill="none"/>';
      break;
    case 'arrow':
      iconPath = '<path d="M8 16h16M20 12l4 4-4 4" stroke="white" stroke-width="2" fill="none"/>';
      break;
    case 'sigma':
      iconPath = '<path d="M10 10h12l-6 6 6 6H10" stroke="white" stroke-width="2" fill="none"/>';
      break;
    case 'warning':
      iconPath = '<path d="M16 6l8 16H8L16 6z" fill="white"/><path d="M16 14v4M16 20v2" stroke="' + color + '" stroke-width="2"/>';
      break;
    case 'check':
      iconPath = '<circle cx="16" cy="16" r="8" fill="white"/><path d="M12 16l3 3 6-6" stroke="' + color + '" stroke-width="2" fill="none"/>';
      break;
    default:
      iconPath = '<rect x="10" y="10" width="12" height="12" rx="2" fill="white"/>';
  }
  
  return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="${color}"/>
  ${iconPath}
</svg>`;
};

logos.forEach(logo => {
  const svg = generateSVG(logo.name, logo.color, logo.icon);
  fs.writeFileSync(path.join('public', 'logos', `${logo.name}.svg`), svg);
  console.log(`Created ${logo.name}.svg`);
});

console.log('All placeholder logos created successfully!'); 