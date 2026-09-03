import React from 'react';
import { AiDataIcon, CodeDevIcon, DentalToothIcon, Game3dIcon } from './BadgesAndIcons';

export interface RoleCardData {
  id: string;
  title: string;
  subtitle: string;
  icon: 'ai' | 'code' | 'dental' | 'game';
}

export const roleCardsData: RoleCardData[] = [
  {
    id: 'ai-data',
    title: 'AI / Data Engineer',
    subtitle: 'Leveraging data for intelligent systems.',
    icon: 'ai',
  },
  {
    id: 'software-dev',
    title: 'Software Developer',
    subtitle: 'Crafting robust and elegant software.',
    icon: 'code',
  },
  {
    id: 'dental-cad',
    title: 'Dental Prosthetist / CAD-CAM Designer — exocad',
    subtitle: 'Precision digital dental solutions with exocad.',
    icon: 'dental',
  },
  {
    id: 'game-3d',
    title: '3D modeler / Game Developer',
    subtitle: 'Building worlds and characters for interactive experiences.',
    icon: 'game',
  },
];

interface RoleCardsProps {
  onSelectRole: (roleId: string) => void;
  selectedRole?: string;
}

export const RoleCards: React.FC<RoleCardsProps> = ({ onSelectRole, selectedRole }) => {
  return (
    <div className="role-cards-container">
      <h2 className="role-cards-heading">Aymane as a:</h2>
      <div className="role-cards-grid">
        {roleCardsData.map((card) => {
          const isSelected = selectedRole === card.id;
          return (
            <div
              key={card.id}
              className={`role-card ${isSelected ? 'selected' : ''}`}
              onClick={() => onSelectRole(card.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectRole(card.id);
                }
              }}
            >
              <div className="role-card-graphic">
                {card.icon === 'ai' && <AiDataIcon />}
                {card.icon === 'code' && <CodeDevIcon />}
                {card.icon === 'dental' && <DentalToothIcon />}
                {card.icon === 'game' && <Game3dIcon />}
              </div>
              <div className="role-card-content">
                <h3 className="role-card-title">{card.title}</h3>
                <p className="role-card-subtitle">{card.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
