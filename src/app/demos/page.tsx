import site from "@/lib/site";
import CardGrid from "@/components/CardGrid";
export default function Demos() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Demos</h1>
      <p className="mt-6 text-zinc-400">Interactive demos and visualizations.</p>
      <div className="mt-8"><CardGrid items={site.demos} /></div>
    </main>
  );
}
