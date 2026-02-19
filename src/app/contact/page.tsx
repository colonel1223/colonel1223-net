import site from "@/lib/site";

export default function Contact() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-6 text-zinc-400">
        Best way to reach me:
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-600" href={site.links.email}>Email</a>
        <a className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-600" href={site.links.linkedin}>LinkedIn</a>
        <a className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-600" href={site.links.github}>GitHub</a>
      </div>
    </main>
  );
}
