import { Mail, ExternalLink } from 'lucide-react';
import heroImg from "../assets/hero.png";

export default function Sidebar() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <img
        src={heroImg}
        alt="Paul Lee"
        className="mb-5 aspect-square w-full rounded-xl object-cover"
      />

      <h1 className="text-2xl font-semibold">Pavel S. Ni</h1>

      <p className="mt-1 text-sm text-neutral-500">Ph.D. Researcher</p>

      <div className="mt-8 space-y-4">
        <a
          href="mailto:gmail.com"
          className="flex items-center gap-3 text-sm text-neutral-600 transition hover:text-black"
        >
          <Mail size={18} />
          gmail
        </a>

        <a
          href="https://www.linkedin.com/in/pavel-ni/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-neutral-600 transition hover:text-black"
        >
          <ExternalLink size={18} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}