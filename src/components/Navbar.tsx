import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = ['PROJECTS', 'CV', 'SKILLS', 'CONTACT'];

  return (
    <header className="portfolio-header">
      <div className="header-titles">
        <h1 className="main-title">MY PORTFOLIO</h1>
        <p className="main-subtitle">Realized Projects + CV.</p>
      </div>

      <nav className="header-nav">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-item ${activeTab === item ? 'active' : ''}`}
            onClick={() => setActiveTab(item)}
          >
            {item}
            {activeTab === item && <span className="active-indicator" />}
          </button>
        ))}
      </nav>
    </header>
  );
};
