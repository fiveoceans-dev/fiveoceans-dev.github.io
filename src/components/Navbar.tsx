import { useEffect, useState } from "react";

const sections = [
  "home",
  "projects",
  "publications",
  "hobby",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-10 px-6">
        {sections.map((section) => {
          const href = section === 'home' ? '/' : `/#${section}`;

          return (
            <a
              key={section}
              href={href}
              className={`border-b-2 pb-1 text-sm font-medium capitalize transition-colors transition-[border-color]
                ${
                  active === section
                    ? "border-black text-black"
                    : "border-neutral-300 text-neutral-500 hover:border-black hover:text-black"
                }`}
            >
              {section}
            </a>
          );
        })}
      </nav>
    </header>
  );
}