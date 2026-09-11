import { Section } from "../components/Section";

export function Home() {
  return (
    <Section id="home" className="">
      <div className="flex min-h-screen items-start px-2 py-24 sm:px-6">
        
        <div className="w-full">
          
          <p className="mb-4 font-mono text-sm text-zinc-500">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            Your Name
          </h1>

          <h2 className="mt-4 text-xl text-zinc-500 md:text-2xl">
            Software Engineer
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
            I build modern, scalable and reliable applications
            using Java, Spring Boot, React and modern cloud
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            
            <a
              href="#projects"
              className="
                rounded-lg
                bg-zinc-900
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-zinc-700
              "
            >
              View projects
            </a>

            <a
              href="#contact"
              className="
                rounded-lg
                border
                border-zinc-300
                px-5
                py-3
                text-sm
                font-semibold
                transition
                hover:border-zinc-900
              "
            >
              Contact me
            </a>

          </div>

        </div>

      </div>
    </Section>
  );
}