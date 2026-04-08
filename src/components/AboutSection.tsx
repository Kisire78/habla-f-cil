import { motion } from "framer-motion";
import { Database, Search, Brain, Terminal, BarChart3, ShieldCheck } from "lucide-react";

const skills = [
  { icon: Database, title: "SQL", description: "Consultas JOIN, validación y análisis de datos en bases relacionales." },
  { icon: BarChart3, title: "Análisis de Datos", description: "Interpretación de información, detección de patrones e inconsistencias." },
  { icon: Terminal, title: "Python", description: "Automatización de procesos, scripts de monitoreo y validación." },
  { icon: Search, title: "Validación de Datos", description: "Control de calidad, integridad y consistencia de información." },
  { icon: ShieldCheck, title: "QA & Testing", description: "Pruebas funcionales, testing de APIs y detección de errores." },
  { icon: Brain, title: "Flujos ETL", description: "Comprensión de procesos de extracción, transformación y carga de datos." },
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
              Datos & Calidad
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ingeniero en Informática con enfoque en análisis y gestión de datos. Tengo experiencia práctica en SQL, 
              validación de información y control de calidad de datos, adquirida durante mi práctica profesional en Banco Coopeuch.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              He trabajado en entornos donde es clave asegurar la consistencia, integridad y correcto flujo de la información, 
              combinando habilidades de análisis de datos con una mirada rigurosa de QA orientada a resultados.
            </p>

            <div className="p-5 rounded-xl bg-card border border-border">
              <h3 className="font-display font-semibold text-lg mb-3">Experiencia Práctica — Banco Coopeuch</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Práctica profesional en Gestión de Identidades y Seguridad TI:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Gestión y validación de datos de usuarios en múltiples sistemas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Análisis de flujos de acceso y detección de inconsistencias
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Automatización de procesos de monitoreo y validación
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Implementación de alertas automáticas para detección de incidentes
                </li>
              </ul>
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
