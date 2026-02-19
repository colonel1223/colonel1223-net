const links = [
  { href: "/research/", label: "Research" },
  { href: "/papers/", label: "Papers" },
  { href: "/models/", label: "Models" },
  { href: "/demos/", label: "Demos" },
  { href: "/infrastructure/", label: "Infrastructure" },
  { href: "/philosophy/", label: "Philosophy" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" }
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="/" className="text-sm font-semibold tracking-wide">
          colonel1223.net
        </a>
        <div className="hidden flex-wrap items-center gap-4 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <a href="/contact/" className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-200 hover:border-zinc-600">
          Contact
        </a>
      </nav>
    </header>
  );
}
