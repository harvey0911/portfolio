import { useState } from 'react';
import './Projects.css';
import ophthaHome from '../Ophthalmologist/Home.png';
import ophthaServices from '../Ophthalmologist/Services.png';
import ophthaContact from '../Ophthalmologist/Contact .png';
import ophthaLogin from '../Ophthalmologist/Login.png';

import laboHome from '../Labo Asnane/Home.png';
import laboServices from '../Labo Asnane/Services.png';
import laboTarifs from '../Labo Asnane/Tarifs .png';
import laboContact from '../Labo Asnane/Contact.png';

type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
  url: string;
};

const projects: Project[] = [
  {
    id: 2,
    title: "Labo Asnane",
    description: "Labo Asnane is an onging dental prosthetics laboratory startup focused on delivering customized dental solutions to dentists",
    images: [laboHome, laboServices, laboTarifs, laboContact],
    url: "https://labo-asnane.vercel.app/"
  },
  {
    id: 1,
    title: "Cabinet d'ophtalmologie - Dr Moumene",
    description: "A healthcare portal realized for an ophthalmologist. Features detailed service pages for specialized eye care and a clean, reassuring UI tailored for patient accessibility.",
    images: [ophthaHome, ophthaServices, ophthaContact, ophthaLogin],
    url: "https://ophtalmologiste.vercel.app/#espace"
  }
];

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, idx) => (
          <div className="carousel-slide" key={idx}>
            <img src={img} alt={`Slide ${idx}`} />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={prevImage} aria-label="Previous image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="carousel-button next" onClick={nextImage} aria-label="Next image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <div className="carousel-indicators">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1 className="page-title">Realized Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => window.open(project.url, '_blank')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') window.open(project.url, '_blank');
            }}
          >
            <div className="project-visual">
              <Carousel images={project.images} />
            </div>
            <div className="project-info">
              <div className="project-info-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
