import site from "@/lib/site";
import CardGrid from "@/components/CardGrid";
export default function Philosophy() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Philosophy</h1>
      <p className="mt-6 text-zinc-400">Systems framing, assumptions, and thesis notes.</p>
      <div className="mt-8"><CardGrid items={site.philosophy} /></div>
    </main>
  );
}
