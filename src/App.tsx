import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ItemPage from './components/ItemPage';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Hobby from './sections/Hobby';

import './App.css';

const sectionIds = new Set(['home', 'projects', 'publications', 'hobby', 'contact', 'software']);

function App() {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/^\/+/, '');
  const isSectionRoute = normalizedPath === '' || sectionIds.has(normalizedPath);
  const isItemRoute = !isSectionRoute && normalizedPath !== '';

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '');
    if (!hash) return;

    const target = document.getElementById(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <Navbar />

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:flex-row lg:gap-10 lg:px-8 lg:py-10">
        <aside className="lg:w-72">
          <div className="lg:sticky lg:top-20">
            <Sidebar />
          </div>
        </aside>

        <div className="flex-1 space-y-16">
          {isItemRoute ? (
            <ItemPage />
          ) : (
            <>
              <Hero />
              <Projects />
              <Publications />
              <Hobby />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;