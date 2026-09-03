import React, { useState } from 'react';
import type { Project } from './ProjectModal';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div className="project-display-card">
      {/* Expanded Carousel Viewer Box (Makes images larger & prominent) */}
      <div className="project-image-box">
        <img
          src={project.images[currentImgIndex]}
          alt={`${project.title} screenshot ${currentImgIndex + 1}`}
          className="project-carousel-img"
        />

        {/* Carousel Navigation Arrows (matching reference image) */}
        {project.images.length > 1 && (
          <>
            <button
              className="card-arrow-btn prev-arrow"
              onClick={prevImage}
              aria-label="Previous screenshot"
              title="Previous screenshot"
            >
              ‹
            </button>
            <button
              className="card-arrow-btn next-arrow"
              onClick={nextImage}
              aria-label="Next screenshot"
              title="Next screenshot"
            >
              ›
            </button>
            <div className="card-carousel-indicators">
              {project.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`card-indicator-dot ${idx === currentImgIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                />
              ))}
            </div>
          </>
        )}

        <span className="image-overlay-badge">
          {currentImgIndex + 1} / {project.images.length}
        </span>
      </div>

      {/* Description Section lowered beneath the image */}
      <div className="project-card-details">
        <div className="project-card-header-row">
          <div>
            <div className="project-category-badges-row">
              {project.categories.map((cat) => (
                <span key={cat} className="project-category-badge">
                  {cat}
                </span>
              ))}
            </div>
            <h3 className="project-card-title">{project.title}</h3>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-live-link"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Project ↗
            </a>
          )}
        </div>

        <p className="project-card-description">{project.description}</p>

        <div className="project-tags-row">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
