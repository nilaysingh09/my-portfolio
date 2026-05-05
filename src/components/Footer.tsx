import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. Built with care.</p>
        <div className="flex items-center gap-3">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4" /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
