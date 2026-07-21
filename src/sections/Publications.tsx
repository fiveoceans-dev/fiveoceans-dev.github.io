const publications = [
  { title: 'Embodied Intelligence for Laboratory Automation', year: '2024' },
  { title: 'Multimodal Sensing for Dexterous Manipulation', year: '2023' },
];

export default function Publications() {
  return (
    <section id="publications" className="scroll-mt-24 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">Publications</h2>
      <ul className="mt-6 space-y-3">
        {publications.map((item) => (
          <li key={item.title} className="flex items-center justify-between border-b border-stone-100 pb-3 text-sm text-slate-600 last:border-b-0 last:pb-0">
            <span>{item.title}</span>
            <span className="font-medium text-slate-500">{item.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
