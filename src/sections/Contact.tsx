import { Section } from "../components/Section";

export function Contact() {
  return (
    <Section id="contact">
      <div className="flex min-h-screen items-start px-2 py-24 sm:px-6 sm:py-20">
        
        <div className="w-full text-center">
          
          <p className="mb-4 font-mono text-sm text-zinc-500">
            04 / Contact
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
            Let's work together.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-zinc-600">
            Have a project, an opportunity or simply want to
            discuss technology?
          </p>

          <a
            href="mailto:your@email.com"
            className="
              mt-8
              inline-flex
              rounded-lg
              bg-zinc-900
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-zinc-700
            "
          >
            Get in touch
          </a>

        </div>

      </div>
    </Section>
  );
}