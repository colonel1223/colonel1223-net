type Item = {
  title: string;
  year?: string;
  summary: string;
  tags?: string[];
  href?: string;
};

export default function CardGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((it) => (
        <a
          key={it.title}
          href={it.href || "#"}
          className="rounded-2xl border border-zinc-900 bg-zinc-950 p-5 hover:border-zinc-700"
        >
          <div className="flex items-baseline justify-between gap-4">
            <div className="text-lg font-semibold">{it.title}</div>
            {it.year ? <div className="text-xs text-zinc-500">{it.year}</div> : null}
          </div>
          <div className="mt-2 text-sm text-zinc-400">{it.summary}</div>
          {it.tags?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {it.tags.map((t) => (
                <span key={t} className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </a>
      ))}
    </div>
  );
}
