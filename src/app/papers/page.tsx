import site from "@/lib/site";
import CardGrid from "@/components/CardGrid";
export default function Papers() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Papers</h1>
      <p className="mt-6 text-zinc-400">Formal write-ups and research papers.</p>
      <div className="mt-8"><CardGrid items={site.papers} /></div>
    </main>
  );
}
