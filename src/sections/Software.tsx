const software = [
  'Python',
  'PyTorch',
  'ROS',
  'Docker',
  'Git',
];

export default function Software() {
  return (
    <section id="software" className="scroll-mt-24">
      <div className="mb-4 flex items-center justify-between">
        <a href="#software" className="text-xl font-semibold text-slate-900 transition-colors hover:text-slate-600">
          Software
        </a>
      </div>

      <div className="border border-stone-200 bg-white p-4 shadow-sm">
        <ul className="grid gap-2 sm:grid-cols-2">
          {software.map((item) => (
            <li key={item} className="text-sm text-slate-600">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
