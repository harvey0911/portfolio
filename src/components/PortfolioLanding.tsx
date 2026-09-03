import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { RoleCards } from './RoleCards';
import { ResumeCard } from './ResumeCard';
import { ProjectCard } from './ProjectCard';
import { SkillsSection } from './SkillsSection';
import { ContactSection } from './ContactSection';
import { allProjects, CATEGORIES, type RoleIdType } from './ProjectModal';
import './PortfolioLanding.css';

export const PortfolioLanding: React.FC = () => {
  // Active navigation tab
  const [activeTab, setActiveTab] = useState<string>('CV');
  const [selectedFilter, setSelectedFilter] = useState<RoleIdType | 'all'>('all');

  // When clicking one of the 4 category cards on the Landing Page ("Aymane as a:")
  const handleSelectCategoryCard = (roleId: string) => {
    setSelectedFilter(roleId as RoleIdType);
    setActiveTab('PROJECTS');
  };

  // Filter projects by category
  const filteredProjects = selectedFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.roleIds.includes(selectedFilter));

  return (
    <div className="portfolio-landing-container dark-theme" data-theme="dark">
      {/* Top Header & Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* VIEW 1: LANDING PAGE VIEW (CV / HOME) - Categories on Left, Resume on Right */}
      {activeTab === 'CV' && (
        <main className="portfolio-main-grid view-fade-in">
          {/* Left Column: Role Categories ("Aymane as a:") */}
          <section className="grid-column left-column">
            <RoleCards
              onSelectRole={handleSelectCategoryCard}
              selectedRole={selectedFilter !== 'all' ? selectedFilter : undefined}
            />
          </section>

          {/* Right Column: Resume Card */}
          <section className="grid-column right-column">
            <ResumeCard />
          </section>
        </main>
      )}

      {/* VIEW 2: PROJECTS VIEW - All projects listed with applicable filters */}
      {activeTab === 'PROJECTS' && (
        <main className="projects-page-view view-fade-in">
          <div className="projects-page-header">
            <h2 className="projects-page-title">ALL PROJECTS</h2>
            <p className="projects-page-subtitle">
              Browse realized software, AI/Data models, dental CAD/CAM solutions, and 3D games.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="category-filter-bar">
            <span className="filter-label">Filter by Category:</span>
            <div className="filter-pills">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-pill ${selectedFilter === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid Display using ProjectCard with inline arrows & lowered description */}
          <div className="projects-grid-display">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="no-projects-found">
                <p>No projects found in this category yet.</p>
                <button className="filter-pill active" onClick={() => setSelectedFilter('all')}>
                  Show All Projects
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      {/* VIEW 3: SKILLS VIEW */}
      {activeTab === 'SKILLS' && (
        <main className="skills-page-view view-fade-in">
          <SkillsSection />
        </main>
      )}

      {/* VIEW 4: CONTACT VIEW */}
      {activeTab === 'CONTACT' && (
        <main className="contact-page-view view-fade-in">
          <ContactSection />
        </main>
      )}

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} Aymane Ait Mansour. Realized Projects + CV Portfolio.</p>
      </footer>
    </div>
  );
};

export default PortfolioLanding;
