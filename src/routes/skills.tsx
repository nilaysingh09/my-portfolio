import { createFileRoute } from "@tanstack/react-router";
import { skillGroups } from "@/lib/data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Nilay Singh" },
      { name: "description", content: "Programming languages, ML libraries, tools and databases Nilay works with." },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Skills</p>
      <h1 className="font-display text-4xl font-bold md:text-5xl">Tools of the trade.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">A snapshot of the languages, libraries and platforms I use to build and analyze.</p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <div
            key={g.title}
            className="group rounded-xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
            style={{ animation: `fade-in-up 0.5s ease-out ${i * 80}ms both` }}
          >
            <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map(item => (
                <span key={item} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
