import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap } from "lucide-react";
import { education, certifications } from "@/lib/data";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Certifications — Nilay Singh" },
      { name: "description", content: "Education timeline and certifications earned by Nilay Singh." },
    ],
  }),
  component: Education,
});

function Education() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Education</p>
      <h1 className="font-display text-4xl font-bold md:text-5xl">Learning path.</h1>

      <div className="mt-12 relative pl-8 border-l border-border">
        {education.map(e => (
          <div key={e.school} className="relative">
            <span className="absolute -left-[37px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
              <GraduationCap className="h-3.5 w-3.5 text-primary-foreground" />
            </span>
            <div className="rounded-xl border border-border bg-surface p-6 shadow-card">
              <p className="font-mono text-xs text-primary">{e.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{e.school}</h3>
              <p className="mt-1 text-muted-foreground">{e.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Certifications & Achievements</p>
        <h2 className="font-display text-3xl font-bold">Badges earned.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {certifications.map(c => (
            <div key={c} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary/60">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-primary">
                <Award className="h-4 w-4 text-primary-foreground" />
              </span>
              <p className="text-sm">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
