import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  details: string[];
  tags: string[];
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Automatización con Python y Shodan",
    description: "Problema: Búsqueda manual repetitiva de información técnica. Solución: Script automatizado que consulta APIs y guarda resultados.",
    details: [
      "Integración con API",
      "Almacenamiento en base de datos",
      "Alertas por Telegram",
    ],
    tags: ["Python", "API", "MySQL", "Automatización"],
    repoUrl: "https://github.com/Kisire78",
  },
  {
    title: "Testing de APIs con Postman",
    description: "Objetivo: Validar endpoints y comportamiento de servicios REST.",
    details: [
      "Pruebas funcionales",
      "Validación de respuestas",
      "Organización de colecciones",
    ],
    tags: ["Postman", "Testing API", "QA"],
  },
  {
    title: "Testing de sitio web",
    description: "Enfoque: Validación de funcionalidades y experiencia de usuario.",
    details: [
      "Casos de prueba",
      "Detección de bugs",
      "Mejoras UX",
    ],
    tags: ["Testing Manual", "UX", "QA"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-sans">Portafolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Proyectos QA
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors duration-300 flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-5 flex-1">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.repoUrl && (
                  <div className="flex gap-4">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
                    >
                      <Github className="w-4 h-4" /> Código
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
