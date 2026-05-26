import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Launchsmith: UK web and mobile developer based in Longridge, Preston. Get in touch for website development, web apps, iOS apps, and automation projects across Manchester, Liverpool, Leeds, London, and nationwide.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <div className="max-w-2xl">
            <div className="section-label">Contact</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Tell me what you want to build.
            </h1>
            <p className="mt-4 text-lg leading-8 text-white/70">
              A few lines is enough. Send the goal, any useful links, and the rough
              timeline. I will reply with the right next questions.
            </p>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {[
                {
                  title: "Best for",
                  body: "New builds, rebuilds, MVPs, automation, and AI integrations.",
                },
                {
                  title: "Useful context",
                  body: "What you are building, who it is for, any examples, and your timeline.",
                },
                {
                  title: "Response time",
                  body: "Usually within 24 to 48 hours with next steps or clarifying questions.",
                },
              ].map((s) => (
                <section key={s.title} className="py-5">
                  <h2 className="text-sm font-semibold tracking-tight text-white">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/64">{s.body}</p>
                </section>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
