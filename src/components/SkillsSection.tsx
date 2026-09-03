import React from 'react';

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      category: 'Web Development & Frameworks',
      icon: '💻',
      skills: ['ReactJS', 'Express', 'FastAPI', 'TailwindCSS', 'Git/GitHub', 'Docker'],
    },
    {
      category: 'Artificial Intelligence',
      icon: '🧠',
      skills: ['LLMs', 'RAG (Retrieval-Augmented Generation)', 'OCR (Tesseract)'],
    },
    {
      category: 'Programming Languages',
      icon: '⚡',
      skills: ['Java', 'Python', 'C', 'SQL', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Databases & Storage',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'NAS', 'SAN'],
    },
    {
      category: 'Virtualization & Systems',
      icon: '☁️',
      skills: ['VMware vSphere', 'ESXi', 'vCenter'],
    },
    {
      category: 'Languages',
      icon: '🌐',
      skills: ['English (Advanced)', 'French (Advanced)', 'Arabic (Native)'],
    },
    {
      category: 'CAD / 3D Modeling',
      icon: '🎨',
      skills: ['Blender', 'Exocad'],
    },
  ];

  return (
    <div className="skills-page-container view-fade-in">
      <div className="skills-page-header">
        <h2 className="skills-page-title">TECHNICAL SKILLS & EXPERTISE</h2>
        <p className="skills-page-subtitle">
          Core technologies, frameworks, AI systems, databases, virtualization tools, and CAD/3D modeling software.
        </p>
      </div>

      <div className="skills-categories-grid">
        {skillCategories.map((group) => (
          <div key={group.category} className="skill-category-card">
            <div className="skill-category-header">
              <span className="group-icon">{group.icon}</span>
              <h3 className="group-title">{group.category}</h3>
            </div>
            <div className="group-skills-flex">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
