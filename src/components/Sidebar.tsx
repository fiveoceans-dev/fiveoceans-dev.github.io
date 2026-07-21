import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import heroImg from "../assets/hero.png";

const software = ['Python', 'PyTorch', 'ROS', 'Docker'];

export default function Sidebar() {
  return (
    <div className="space-y-4">
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
            <FiMail size={18} />
            gmail
          </a>

          <a
            href="https://www.linkedin.com/in/pavel-ni/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-neutral-600 transition hover:text-black"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <a href="/#software" className="text-lg font-semibold text-slate-900 transition-colors hover:text-slate-600">
          Software
        </a>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          {software.map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase()}`} className="transition-colors hover:text-slate-900">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}