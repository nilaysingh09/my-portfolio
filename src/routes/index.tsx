import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile, projects } from "@/lib/data";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nilay Singh — Data Analyst & Aspiring Data Scientist" },
      { name: "description", content: "Portfolio of Nilay Singh — projects in machine learning, EDA, SQL and Python." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = projects.find(p => p.featured)!;
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* HERO */}
      <section className="grid items-center gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div className="animate-fade-in-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Available for Data / SDE internships
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Hi, I'm <span className="text-gradient">Nilay Singh</span>.
          </h1>
          <div className="mt-4 font-mono text-base text-muted-foreground md:text-lg">
            <Typewriter words={["Data Analyst", "Aspiring Data Scientist", "Python + SQL Developer", "Machine Learning Enthusiast"]} />
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-primary"><Mail className="h-5 w-5" /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary"><Github className="h-5 w-5" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/40 bg-surface animate-pulse-glow">
            <div className="flex h-full w-full items-center justify-center font-display text-7xl font-bold text-gradient">
              NS
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="grid grid-cols-2 gap-4 border-y border-border py-10 md:grid-cols-4">
        {[
          { k: "4+", v: "Projects shipped" },
          { k: "100K+", v: "Rows analyzed" },
          { k: "20+", v: "SQL problems solved" },
          { k: "4★", v: "HackerRank SQL" },
        ].map(s => (
          <div key={s.v}>
            <div className="font-display text-3xl font-bold text-gradient md:text-4xl">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </section>

      {/* FEATURED */}
      <section className="py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Featured project</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">{featured.title}</h2>
          </div>
          <Link to="/projects" className="hidden text-sm text-muted-foreground hover:text-primary md:inline-flex">All projects →</Link>
        </div>

        <div className="grid gap-8 rounded-2xl border border-border bg-surface p-8 shadow-card md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold">Problem</h3>
            <p className="mt-2 text-muted-foreground">{featured.problem}</p>
            <h3 className="mt-6 font-display text-xl font-semibold">Approach</h3>
            <p className="mt-2 text-muted-foreground">{featured.solution}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tech.map(t => (
                <span key={t} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Key Insights</h3>
            <ul className="mt-3 space-y-2">
              {featured.features.map(f => (
                <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{f}
                </li>
              ))}
            </ul>
            {/* Visualization placeholder */}
            <div className="mt-6 rounded-lg border border-border bg-background p-4">
              <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Listings by room type</p>
              <div className="flex items-end gap-3 h-32">
                {[68, 92, 40, 22].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-primary opacity-90" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                <span>Entire</span><span>Private</span><span>Shared</span><span>Hotel</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
