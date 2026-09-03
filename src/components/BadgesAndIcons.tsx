import React from 'react';

// Floating Decorative Badge Component
export const FloatingBadge: React.FC<{
  type: 'code' | 'database' | 'cloud' | 'graph';
  label: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ type, label, className = '', style }) => {
  return (
    <div className={`floating-badge ${className}`} style={style}>
      <div className="badge-icon-box">
        {type === 'code' && (
          <svg viewBox="0 0 40 32" className="badge-svg">
            <rect x="1" y="1" width="38" height="30" rx="5" fill="#e8f4f1" stroke="#2d5a4c" strokeWidth="2" />
            <path d="M1 9 H39" stroke="#2d5a4c" strokeWidth="1.5" />
            <circle cx="6" cy="5" r="1.5" fill="#e76f51" />
            <circle cx="11" cy="5" r="1.5" fill="#f4a261" />
            <circle cx="16" cy="5" r="1.5" fill="#2a9d8f" />
            <path d="M13 15 L8 20 L13 25" stroke="#1d3557" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M19 25 L24 15" stroke="#1d3557" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M27 15 L32 20 L27 25" stroke="#1d3557" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        )}
        {type === 'database' && (
          <svg viewBox="0 0 36 36" className="badge-svg">
            <path d="M18 4 C 8 4 8 10 8 10 V 26 C 8 26 8 32 18 32 C 28 32 28 26 28 26 V 10 C 28 10 28 4 18 4 Z" fill="#bde0fe" stroke="#1d3557" strokeWidth="2" />
            <ellipse cx="18" cy="10" rx="10" ry="4" fill="#a2d2ff" stroke="#1d3557" strokeWidth="2" />
            <path d="M8 17 C 8 21 28 21 28 17" fill="none" stroke="#1d3557" strokeWidth="2" />
            <path d="M8 24 C 8 28 28 28 28 24" fill="none" stroke="#1d3557" strokeWidth="2" />
          </svg>
        )}
        {type === 'cloud' && (
          <svg viewBox="0 0 40 32" className="badge-svg">
            <path d="M10 26 C 5 26 3 21 7 17 C 5 11 12 7 17 11 C 21 6 29 8 30 13 C 35 13 37 19 33 24 C 37 26 30 26 10 26 Z" fill="#b9fbc0" stroke="#1b4332" strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 24 H30 C 34 24 35 19 32 17 C 32 13 25 11 22 14 C 18 10 12 13 13 18 C 9 18 8 24 12 24 Z" fill="#90e0ef" stroke="#0077b6" strokeWidth="2" />
          </svg>
        )}
        {type === 'graph' && (
          <svg viewBox="0 0 36 36" className="badge-svg">
            <line x1="8" y1="28" x2="18" y2="10" stroke="#d97706" strokeWidth="2" />
            <line x1="18" y1="10" x2="28" y2="24" stroke="#d97706" strokeWidth="2" />
            <line x1="8" y1="28" x2="28" y2="24" stroke="#d97706" strokeWidth="2" />
            <line x1="18" y1="10" x2="26" y2="8" stroke="#d97706" strokeWidth="2" />
            <circle cx="8" cy="28" r="4" fill="#fef08a" stroke="#d97706" strokeWidth="2" />
            <circle cx="18" cy="10" r="4" fill="#fef08a" stroke="#d97706" strokeWidth="2" />
            <circle cx="28" cy="24" r="4" fill="#fef08a" stroke="#d97706" strokeWidth="2" />
            <circle cx="26" cy="8" r="3" fill="#fef08a" stroke="#d97706" strokeWidth="2" />
          </svg>
        )}
      </div>
      <span className="badge-label">{label}</span>
    </div>
  );
};

// Rich Illustrations for Role Cards
export const AiDataIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="role-card-illustration">
    <circle cx="50" cy="45" r="30" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.5" />
    {/* Left Brain Hemisphere */}
    <path d="M50 20 C35 20 25 30 25 45 C25 58 35 68 46 70" fill="#fca5a5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
    <path d="M35 32 C30 35 32 45 28 50" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
    <path d="M42 26 C36 32 38 42 34 55" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
    
    {/* Right Circuit/Chip Hemisphere */}
    <path d="M50 20 C65 20 75 30 75 45 C75 58 65 68 54 70" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
    {/* Microchip in center right */}
    <rect x="52" y="35" width="18" height="18" rx="3" fill="#1e40af" stroke="#93c5fd" strokeWidth="1.5" />
    {/* Pins */}
    <line x1="61" y1="30" x2="61" y2="35" stroke="#2563eb" strokeWidth="2" />
    <line x1="61" y1="53" x2="61" y2="58" stroke="#2563eb" strokeWidth="2" />
    <line x1="70" y1="44" x2="75" y2="44" stroke="#2563eb" strokeWidth="2" />
    <line x1="47" y1="44" x2="52" y2="44" stroke="#2563eb" strokeWidth="2" />
    
    {/* Circuit connections */}
    <circle cx="82" cy="30" r="3" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
    <line x1="71" y1="37" x2="82" y2="30" stroke="#2563eb" strokeWidth="2" />
    
    <circle cx="84" cy="50" r="3" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
    <line x1="75" y1="48" x2="84" y2="50" stroke="#2563eb" strokeWidth="2" />
    
    <circle cx="78" cy="66" r="3" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
    <line x1="68" y1="56" x2="78" y2="66" stroke="#2563eb" strokeWidth="2" />

    <circle cx="18" cy="40" r="3" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5" />
    <line x1="25" y1="40" x2="18" y2="40" stroke="#ef4444" strokeWidth="2" />
  </svg>
);

export const CodeDevIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="role-card-illustration">
    <rect x="15" y="20" width="70" height="55" rx="8" fill="#ffedd5" stroke="#ea580c" strokeWidth="2.5" />
    {/* Header bar */}
    <path d="M15 20 H85 V32 H15 Z" fill="#fed7aa" stroke="#ea580c" strokeWidth="2.5" />
    <circle cx="24" cy="26" r="2.5" fill="#ef4444" />
    <circle cx="32" cy="26" r="2.5" fill="#f59e0b" />
    <circle cx="40" cy="26" r="2.5" fill="#10b981" />
    
    {/* Code symbols */}
    <path d="M35 44 L25 53 L35 62" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M47 64 L53 42" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M65 44 L75 53 L65 62" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const DentalToothIcon: React.FC = () => (
  <div className="dental-tooth-visual">
    <div className="tooth-grid-bg">
      <svg viewBox="0 0 120 100" className="tooth-svg">
        <defs>
          <radialGradient id="toothGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
          </radialGradient>
          <linearGradient id="toothShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>
        
        <path d="M0 20 H120 M0 40 H120 M0 60 H120 M0 80 H120" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
        <path d="M20 0 V100 M40 0 V100 M60 0 V100 M80 0 V100 M100 0 V100" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
        
        <circle cx="60" cy="50" r="40" fill="url(#toothGlow)" />
        
        <path
          d="M40 22 
             C 45 15, 55 15, 60 20 
             C 65 15, 75 15, 80 22 
             C 88 32, 88 45, 82 55 
             C 78 62, 74 72, 70 85 
             C 68 90, 62 90, 60 82 
             C 58 90, 52 90, 50 85 
             C 46 72, 42 62, 38 55 
             C 32 45, 32 32, 40 22 Z"
          fill="url(#toothShine)"
          stroke="#94a3b8"
          strokeWidth="2"
          filter="drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.4))"
        />
        <path d="M45 26 C43 35 44 48 42 60" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <path d="M52 22 C55 27 55 35 52 42" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M68 22 C65 27 65 35 68 42" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
      </svg>
    </div>
  </div>
);

export const Game3dIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" className="role-card-illustration">
    <g transform="translate(0, -5)">
      <polygon points="50,15 72,27 50,39 28,27" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
      <polygon points="28,27 50,39 50,62 28,50" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
      <polygon points="50,39 72,27 72,50 50,62" fill="#ca8a04" stroke="#a16207" strokeWidth="2" />
    </g>
    
    <rect x="20" y="52" width="60" height="32" rx="16" fill="#475569" stroke="#1e293b" strokeWidth="2.5" />
    <path d="M35 60 H41 V66 H47 V72 H41 V78 H35 V72 H29 V66 H35 Z" fill="#94a3b8" />
    <circle cx="68" cy="62" r="3" fill="#ef4444" />
    <circle cx="75" cy="68" r="3" fill="#3b82f6" />
    <circle cx="61" cy="68" r="3" fill="#10b981" />
    <circle cx="68" cy="74" r="3" fill="#f59e0b" />
    <circle cx="48" cy="74" r="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
    <circle cx="56" cy="74" r="4" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
  </svg>
);
