const projects = [
  {
    title: 'Humanoid robotics platform',
    description:
      'A research-driven platform for dexterous manipulation, multimodal learning, and laboratory automation.',
  },
  {
    title: 'Ultrasound tactile sensing',
    description:
      'Compact sensing systems that enable richer touch feedback for robotic hands and grippers.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
        <span className="text-sm text-slate-500">Selected work</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
