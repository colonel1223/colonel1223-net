export const metadata = {
  title: "About · AI Research Hub",
  description:
    "Spencer K. Cottrell — AI systems, probabilistic modeling, reproducible research artifacts, and applied ML engineering."
};

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">About</h1>

      <p className="mt-6 text-lg text-zinc-400">
        I’m Spencer K. Cottrell. This site is my AI Research Hub: a curated archive of research artifacts,
        models, demos, and engineering work with an emphasis on reproducibility, clarity, and real-world signal.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">What I work on</h2>
      <ul className="mt-4 space-y-2 text-zinc-400">
        <li>• AI systems and applied ML infrastructure</li>
        <li>• Probabilistic modeling, risk, and decision systems</li>
        <li>• Reproducible artifacts: papers, demos, model cards, experiments</li>
        <li>• AI + economics: impact analysis and deployment constraints</li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">Operating principle</h2>
      <p className="mt-4 text-zinc-400">
        Build work that survives scrutiny: measurable, documented, and easy to audit—so the signal is obvious to
        researchers, engineers, and decision-makers.
      </p>
    </main>
  );
}
