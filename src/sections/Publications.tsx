const publications = [
  {
    slug: 'embodied-intelligence-lab-automation',
    title: 'Embodied Intelligence for Laboratory Automation',
    year: '2024',
    authors: 'Pavel Ni, A. Chen, M. Rivera',
    description:
      'A study on how embodied intelligence can improve automation workflows in laboratory environments.',
  },
  {
    slug: 'multimodal-sensing-manipulation',
    title: 'Multimodal Sensing for Dexterous Manipulation',
    year: '2023',
    authors: 'Pavel Ni, J. Alvarez, S. Patel',
    description:
      'An overview of multimodal sensing approaches that support more robust robotic manipulation.',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="scroll-mt-24">
      <div className="mb-4 flex items-center justify-between">
        <a href="/#publications" className="text-xl font-semibold text-slate-900 transition-colors hover:text-slate-600">
          Publications
        </a>
      </div>

      <div className="space-y-3">
        {publications.map((item) => (
          <article key={item.title} className="border border-stone-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <a href={`/${item.slug}`} className="text-base font-semibold text-slate-900 transition-colors hover:text-slate-600">
                {item.title}
              </a>
              <span className="text-sm font-medium text-slate-500">{item.year}</span>
            </div>
            <p className="mt-2 text-sm italic text-slate-500">{item.authors}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
