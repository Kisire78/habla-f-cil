import { motion } from "framer-motion";
import { Bug, FlaskConical, Brain, Search, Database, Terminal } from "lucide-react";

const skills = [
  { icon: Terminal, title: "Python", description: "Automatización de procesos y scripts de testing." },
  { icon: FlaskConical, title: "Postman", description: "Pruebas de APIs, validación de endpoints y colecciones." },
  { icon: Database, title: "SQL", description: "Consultas y validación de datos en bases de datos." },
  { icon: Search, title: "Testing Manual", description: "Casos de prueba, detección de bugs y mejoras UX." },
  { icon: Bug, title: "QA Mindset", description: "Análisis, reproducción de errores y propuestas de mejora." },
  { icon: Brain, title: "Automatización", description: "Scripts automatizados, integración con APIs y alertas." },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-28 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-sans">Sobre mí</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Calidad de software
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Me especializo en identificar errores, validar funcionalidades y mejorar la calidad del software.
              He desarrollado proyectos donde aplico testing manual, pruebas de APIs con Postman y automatización con Python.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Busco mi primera oportunidad profesional en QA donde pueda aportar con análisis, detalle y mejora continua.
            </p>

            <div className="p-5 rounded-xl bg-card border border-border">
              <h3 className="font-display font-semibold text-lg mb-3">Evidencia QA</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Durante mis pruebas he identificado errores relacionados a:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Error en validación de campos obligatorios
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Respuesta inconsistente en endpoint
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Problemas de usabilidad en navegación
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Enfoque: análisis, reproducción del error y propuesta de mejora.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{skill.title}</h3>
                  <p className="text-muted-foreground text-xs">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
