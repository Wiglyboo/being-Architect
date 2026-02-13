import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Loader from './components/Loader';
import { LoadingProvider, useLoading } from './context/LoadingContext';

// ScrollToTop component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component to handle scroll animations
const ScrollObserver = () => {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [location]);

  return null;
}

const AppContent: React.FC = () => {
  const { isLoading, setIsLoading } = useLoading();

  return (
    <div className="font-sans selection:bg-brand-yellow selection:text-brand-black antialiased relative">
      {/* Loader acts as an overlay now. It unmounts when complete. */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* The App is always rendered behind the loader for smooth reveal */}
      <BrowserRouter>
        <ScrollToTop />
        <ScrollObserver />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="project/:id" element={<ProjectDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
};

export default App;