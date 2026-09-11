import { Section } from "../components/Section";

const projects = [
  {
    title: "Generic Electricity API",
    description:
      "Generic API for electricity partners and mobile money integration.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Portfolio Platform",
    description:
      "Personal portfolio platform with modern frontend and backend architecture.",
    technologies: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Second Check Balance",
    description:
      "Backend service developed with Spring Boot for balance verification.",
    technologies: ["Java", "Spring Boot", "REST"],
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="px-2 py-20 sm:px-6 sm:py-32">
        
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-zinc-500">
            03 / Projects
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Selected projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group
                border
                border-zinc-200
                p-5
                sm:p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-zinc-400
              "
            >
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-zinc-200
                      px-3
                      py-1
                      text-xs
                      text-zinc-600
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}

        </div>

      </div>
    </Section>
  );
}