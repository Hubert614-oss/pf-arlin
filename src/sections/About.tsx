import { Section } from "../components/Section";

export function About() {
  return (
    <Section id="about">
      <div className="flex min-h-screen items-start px-2 sm:px-6 py-5">
        
        <div className="grid w-full gap-8 sm:gap-12 md:grid-cols-2">
          
          <div>
            <p className="mb-3 font-mono text-sm text-zinc-500">
              01 / About
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              About me
            </h2>
          </div>

          <div className="space-y-5 text-zinc-600 leading-7">
            <p>
              I'm a software engineer specialized in backend
              development and system integration.
            </p>

            <p>
              I work mainly with Java, Spring Boot, PostgreSQL,
              REST APIs and distributed systems.
            </p>

            <p>
              I also have experience working with financial and
              mobile money platforms.
            </p>
          </div>

        </div>

      </div>
    </Section>
  );
}