import { createFileRoute } from "@tanstack/react-router";
import { Download, MapPin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nilay Singh" },
      { name: "description", content: "About Nilay Singh, a CSE undergraduate at VIT focused on data analytics and machine learning." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">About</p>
      <h1 className="font-display text-4xl font-bold md:text-5xl">A bit about me.</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_2fr]">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="flex h-full w-full items-center justify-center font-display text-6xl font-bold text-gradient">NS</div>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p>I'm <span className="text-foreground font-medium">{profile.name}</span>, a Computer Science undergraduate at <span className="text-foreground">Vellore Institute of Technology</span>. I'm passionate about extracting stories from data — whether through clean SQL queries, exploratory analysis, or training simple but useful machine learning models.</p>
          <p>I enjoy the full pipeline: collecting and cleaning messy data, asking the right questions, building visualizations, and shipping tools that people can actually use. Outside of coursework, I sharpen my SQL on HackerRank and LeetCode and explore datasets that catch my curiosity.</p>
          <p>I'm currently looking for opportunities in <span className="text-foreground">Data Analytics, Data Science and Software Development</span>.</p>

          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-primary" /> {profile.location}</div>
            <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-primary" /> {profile.email}</div>
            <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-primary" /> {profile.phone}</div>
          </div>

          <a href={profile.resume} download className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
