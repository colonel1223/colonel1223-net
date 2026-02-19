import site from "@/lib/site";
import CardGrid from "@/components/CardGrid";
export default function Research() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Research</h1>
      <p className="mt-6 text-zinc-400">High-signal research artifacts and frameworks.</p>
      <div className="mt-8"><CardGrid items={site.research} /></div>
    </main>
  );
}
