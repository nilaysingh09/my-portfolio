import { createFileRoute } from "@tanstack/react-router";
import { Github, Star } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nilay Singh" },
      { name: "description", content: "Selected data analytics, machine learning and software projects by Nilay Singh." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const allTech = Array.from(new Set(projects.flatMap(p => p.tech)));
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? projects.filter(p => p.tech.includes(filter)) : projects;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Projects</p>
      <h1 className="font-display text-4xl font-bold md:text-5xl">Things I've built.</h1>

      <div className="mt-8 flex flex-wrap gap-2">
        <button onClick={() => setFilter(null)} className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${!filter ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>All</button>
        {allTech.map(t => (
          <button key={t} onClick={() => setFilter(t)} className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${filter === t ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>{t}</button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((p, i) => (
          <article
            key={p.title}
            className="group relative flex flex-col rounded-xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
            style={{ animation: `fade-in-up 0.5s ease-out ${i * 80}ms both` }}
          >
            {p.featured && (
              <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                <Star className="h-3 w-3" /> Featured
              </div>
            )}
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>

            <ul className="mt-4 space-y-1.5">
              {p.features.slice(0, 3).map(f => (
                <li key={f} className="flex gap-2 text-xs text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />{f}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5 pt-4 border-t border-border">
              {p.tech.map(t => (
                <span key={t} className="rounded-md bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
