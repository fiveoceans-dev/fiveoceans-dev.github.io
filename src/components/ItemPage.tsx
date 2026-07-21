import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getItemBySlug } from '../data/content';

export default function ItemPage() {
  const location = useLocation();
  const slug = useMemo(() => location.pathname.replace(/^\//, ''), [location.pathname]);
  const item = getItemBySlug(slug);

  if (!item) {
    return (
      <div className="rounded border border-stone-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-2 text-sm text-slate-600">The requested item does not exist yet.</p>
      </div>
    );
  }

  return (
    <div className="rounded border border-stone-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{item.category}</p>
      <h1 className="mt-2 text-2xl font-semibold text-slate-900">{item.title}</h1>
      <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
      {item.year ? <p className="mt-3 text-sm text-slate-500">Published: {item.year}</p> : null}
      {item.authors ? <p className="mt-2 text-sm italic text-slate-500">{item.authors}</p> : null}
    </div>
  );
}
