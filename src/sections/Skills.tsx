import { Section } from "../components/Section";

const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
  "REST API",
  "SOAP",
  "Talend",
  "Quarkus",
  "Angular",
];

export function Skills() {
  return (
    <Section id="skills">
      <div className="px-2 py-20 sm:px-6 sm:py-32">
        
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm text-zinc-500">
            02 / Skills
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-zinc-200 bg-zinc-200 sm:grid-cols-3 md:grid-cols-4">
          
          {technologies.map((technology) => (
            <div
              key={technology}
              className="
                bg-white
                p-4
                sm:p-6
                text-center
                text-sm
                font-medium
                transition
                hover:bg-zinc-50
              "
            >
              {technology}
            </div>
          ))}

        </div>

      </div>
    </Section>
  );
}