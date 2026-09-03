import React, { useState } from 'react';
import laboHome from '../Labo Asnane/Home.png';
import laboServices from '../Labo Asnane/Services.png';
import laboTarifs from '../Labo Asnane/Tarifs .png';
import laboContact from '../Labo Asnane/Contact.png';

import lebonprofLogin from '../Le Bon Prof/Login.png';
import lebonprofCourses from '../Le Bon Prof/Courses .png';
import lebonprofPayment from '../Le Bon Prof/payment tracking.png';
import lebonprofAttendance from '../Le Bon Prof/Attendance.png';
import lebonprofSettings from '../Le Bon Prof/Settings.png';

export type CategoryType =
  | 'AI / Data Engineer'
  | 'Software Developer'
  | 'Dental Prosthetist / CAD-CAM Designer — exocad'
  | '3D modeler / Game Developer';

export type RoleIdType = 'ai-data' | 'software-dev' | 'dental-cad' | 'game-3d';

export interface Project {
  id: number;
  roleIds: RoleIdType[];
  categories: CategoryType[];
  title: string;
  description: string;
  images: string[];
  url: string;
  tags: string[];
}

export const CATEGORIES: { id: RoleIdType | 'all'; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-data', label: 'AI / Data Engineer' },
  { id: 'software-dev', label: 'Software Developer' },
  { id: 'dental-cad', label: 'Dental Prosthetist / CAD-CAM Designer — exocad' },
  { id: 'game-3d', label: '3D modeler / Game Developer' },
];

export const allProjects: Project[] = [
  {
    id: 1,
    roleIds: ['dental-cad', 'software-dev'],
    categories: [
      'Dental Prosthetist / CAD-CAM Designer — exocad',
      'Software Developer',
    ],
    title: 'Labo Asnane',
    description:
      'Labo Asnane is an ongoing dental prosthetics laboratory startup focused on delivering customized, high-precision digital dental solutions with exocad, 3D modeling, and automated management software.',
    images: [laboHome, laboServices, laboTarifs, laboContact],
    url: 'https://labo-asnane.vercel.app/',
    tags: ['exocad', 'CAD/CAM', 'React', '3D Dental Modeling', 'TypeScript', 'Vite'],
  },
  {
    id: 2,
    roleIds: ['software-dev'],
    categories: ['Software Developer'],
    title: 'Le Bon Prof',
    description:
      'Le Bon Prof is a desktop management application designed for tutoring centers to track attendance, organize courses, manage students and professors, handle payments, and store academic files.',
    images: [
      lebonprofLogin,
      lebonprofCourses,
      lebonprofPayment,
      lebonprofAttendance,
      lebonprofSettings,
    ],
    url: 'https://github.com/harvey0911/lebonprof_electron_vite',
    tags: ['Electron', 'React', 'TypeScript', 'SQLite', 'Node.js'],
  },
];

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!project) return null;

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-carousel-area">
          <img
            src={project.images[currentImgIndex]}
            alt={`${project.title} screenshot ${currentImgIndex + 1}`}
            className="modal-carousel-image"
          />
          {project.images.length > 1 && (
            <>
              <button className="carousel-nav prev" onClick={prevImg}>
                ‹
              </button>
              <button className="carousel-nav next" onClick={nextImg}>
                ›
              </button>
              <div className="carousel-dots">
                {project.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === currentImgIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImgIndex(idx)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal-details-area">
          <div className="modal-categories-flex">
            {project.categories.map((cat) => (
              <span key={cat} className="modal-category">
                {cat}
              </span>
            ))}
          </div>
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-description">{project.description}</p>

          <div className="modal-tags">
            {project.tags.map((t) => (
              <span key={t} className="modal-tag">
                {t}
              </span>
            ))}
          </div>

          <div className="modal-actions">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-btn"
            >
              Visit Live Project ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
