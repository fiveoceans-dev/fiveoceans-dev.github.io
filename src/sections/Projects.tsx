const projects = [
  {
    slug: 'humanoid-robotics-platform',
    title: 'Humanoid robotics platform',
    description:
      'A research-driven platform for dexterous manipulation, multimodal learning, and laboratory automation.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65d?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'ultrasound-tactile-sensing',
    title: 'Ultrasound tactile sensing',
    description:
      'Compact sensing systems that enable richer touch feedback for robotic hands and grippers.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mb-4 flex items-center justify-between">
        <a href="/#projects" className="text-xl font-semibold text-slate-900 transition-colors hover:text-slate-600">
          Projects
        </a>
      </div>

      <div className="space-y-3">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col gap-4 border border-stone-200 bg-white p-4 shadow-sm sm:flex-row sm:items-start">
            <div className="flex-1">
              <a href={`/${project.slug}`} className="text-base font-semibold text-slate-900 transition-colors hover:text-slate-600">
                {project.title}
              </a>
              <p className="mt-1 text-sm leading-6 text-slate-600">{project.description}</p>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="h-28 w-full object-cover sm:w-36"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
