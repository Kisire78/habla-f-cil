import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description: "Panel de administración con gráficos en tiempo real, gestión de productos y analíticas avanzadas.",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "App de Fitness",
    description: "Aplicación móvil para seguimiento de rutinas, progreso y nutrición personalizada.",
    tags: ["React Native", "Node.js", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
  },
  {
    title: "Plataforma Educativa",
    description: "LMS completo con videoconferencias, quizzes interactivos y certificaciones.",
    tags: ["Next.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    repoUrl: "#",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
  },
  {
    title: "Portfolio Fotográfico",
    description: "Galería inmersiva con carga lazy, filtros y modo de pantalla completa.",
    tags: ["Vue.js", "Firebase", "GSAP"],
    liveUrl: "#",
    repoUrl: "#",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
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
            Proyectos Destacados
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

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

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:brightness-110 transition"
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
                    >
                      <Github className="w-4 h-4" /> Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
