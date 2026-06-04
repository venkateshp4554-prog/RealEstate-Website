import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PropertyModal from './components/PropertyModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState({ city: '', type: '' });
  const [activeServiceTab, setActiveServiceTab] = useState('construction');
  const [activeBranchId, setActiveBranchId] = useState(null);

  // Handle opening project details modal
  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  // Close project modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Render active page component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            onViewDetails={handleViewDetails} 
            setCurrentPage={setCurrentPage}
            setProjectFilter={setProjectFilter}
          />
        );
      case 'about':
        return <About />;
      case 'projects':
        return (
          <Projects 
            onViewDetails={handleViewDetails} 
            projectFilter={projectFilter} 
            setProjectFilter={setProjectFilter}
          />
        );
      case 'services':
        return <Services activeTab={activeServiceTab} setActiveTab={setActiveServiceTab} />;
      case 'contact':
        return <Contact activeBranchId={activeBranchId} setActiveBranchId={setActiveBranchId} />;
      default:
        return (
          <Home 
            onViewDetails={handleViewDetails} 
            setCurrentPage={setCurrentPage}
            setProjectFilter={setProjectFilter}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Dynamic Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        setProjectFilter={setProjectFilter}
        setActiveServiceTab={setActiveServiceTab}
        setActiveBranchId={setActiveBranchId}
      />

      {/* Main Page Area */}
      <main className="flex-grow pt-14 lg:pt-[120px]">
        {renderPage()}
      </main>

      {/* Structured Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Active Project Details Modal Overlay */}
      {selectedProject && (
        <PropertyModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;
