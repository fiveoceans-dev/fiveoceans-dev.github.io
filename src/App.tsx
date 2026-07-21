import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Startup from './sections/Startup';

import './App.css';

function App() {
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
          <Hero />
          <Projects />
          <Publications />
          <Startup />
        </div>
      </main>
    </div>
  );
}

export default App;