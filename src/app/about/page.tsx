import site from "@/lib/site";

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">About</h1>
      <p className="mt-6 text-zinc-300 text-lg">{site.about.headline}</p>
      <p className="mt-6 text-zinc-400">{site.about.body}</p>

      <h2 className="mt-12 text-2xl font-semibold">Focus</h2>
      <ul className="mt-4 space-y-2 text-zinc-400">
        <li>• AI systems + applied ML infrastructure</li>
        <li>• Probabilistic modeling, risk, decision systems</li>
        <li>• Research artifacts: papers, demos, model cards, experiments</li>
        <li>• AI + economics: impact analysis and deployment constraints</li>
      </ul>
    </main>
  );
}
