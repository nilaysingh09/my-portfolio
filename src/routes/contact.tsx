import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nilay Singh" },
      { name: "description", content: "Get in touch with Nilay Singh — email, LinkedIn, GitHub or send a message." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach(i => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio message from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">Contact</p>
      <h1 className="font-display text-4xl font-bold md:text-5xl">Let's build something.</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">Open to internships and collaborations in data, ML and software. The fastest way to reach me is email.</p>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <div className="space-y-3">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary">
            <Mail className="h-5 w-5 text-primary" /><span className="text-sm">{profile.email}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary">
            <Linkedin className="h-5 w-5 text-primary" /><span className="text-sm">LinkedIn</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary">
            <Github className="h-5 w-5 text-primary" /><span className="text-sm">GitHub</span>
          </a>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4">
            <MapPin className="h-5 w-5 text-primary" /><span className="text-sm">{profile.location}</span>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-xl border border-border bg-surface p-6 shadow-card">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
              <CheckCircle2 className="h-10 w-10 text-primary" />
              <p className="font-display text-xl font-semibold">Your email client should be opening!</p>
              <p className="text-sm text-muted-foreground">If not, write to {profile.email} directly.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">Name</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} maxLength={100} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">Email</label>
                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} maxLength={255} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">Message</label>
                <textarea rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} maxLength={1000} className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
                Send Message <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
