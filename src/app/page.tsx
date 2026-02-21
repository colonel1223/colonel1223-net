import site from "@/lib/site";
import CardGrid from "@/components/CardGrid";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-10">
        <h1 className="text-4xl font-bold tracking-tight">{site.name}</h1>
        <p className="mt-4 text-lg text-zinc-300">{site.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-600" href={site.links.github}>GitHub</a>
          <a className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-600" href={site.links.linkedin}>LinkedIn</a>
          <a className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-600" href={site.links.x}>X</a>
          <a className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-600" href={site.links.email}>Email</a>
        </div>
      </div>

      <section className="mt-14">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold">Research</h2>
          <a className="text-sm text-zinc-400 hover:text-white" href="/research/">View all →</a>
        </div>
        <div className="mt-6">
          <CardGrid items={site.research} />
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold">Models</h2>
          <a className="text-sm text-zinc-400 hover:text-white" href="/models/">View all →</a>
        </div>
        <div className="mt-6">
          <CardGrid items={site.models} />
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold">Papers</h2>
          <a className="text-sm text-zinc-400 hover:text-white" href="/papers/">View all →</a>
        </div>
        <div className="mt-6">
          <CardGrid items={site.papers} />
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold">Demos</h2>
          <a className="text-sm text-zinc-400 hover:text-white" href="/demos/">View all →</a>
        </div>
        <div className="mt-6">
          <CardGrid items={site.demos} />
        </div>
      </section>

      {/* ── Connect ─────────────────────────────────────────── */}
      <section className="mt-20">
        <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Connect</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Open to research collaboration, technical discussion, and interesting problems.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {/* GitHub */}
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-zinc-900 bg-black/40 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors group-hover:border-zinc-600 group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">GitHub</div>
                <div className="mt-0.5 text-xs text-zinc-500">colonel1223</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-zinc-900 bg-black/40 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors group-hover:border-zinc-600 group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">LinkedIn</div>
                <div className="mt-0.5 text-xs text-zinc-500">spencercottrell</div>
              </div>
            </a>

            {/* X / Twitter */}
            <a
              href={site.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-zinc-900 bg-black/40 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors group-hover:border-zinc-600 group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">X</div>
                <div className="mt-0.5 text-xs text-zinc-500">@colonel_1223</div>
              </div>
            </a>

            {/* Email */}
            <a
              href={site.links.email}
              className="group flex items-start gap-4 rounded-2xl border border-zinc-900 bg-black/40 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors group-hover:border-zinc-600 group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">Email</div>
                <div className="mt-0.5 text-xs text-zinc-500">spencerkcottrell@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
