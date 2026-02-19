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
    </main>
  );
}
