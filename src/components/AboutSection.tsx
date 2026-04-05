import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";

const skills = [
  { icon: Code2, title: "Desarrollo", description: "React, TypeScript, Node.js, Python y más." },
  { icon: Palette, title: "Diseño", description: "UI/UX, Figma, sistemas de diseño y prototipado." },
  { icon: Rocket, title: "Despliegue", description: "CI/CD, Docker, AWS, Vercel y optimización." },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-28 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-3 font-sans">Sobre mí</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Pasión por crear
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Soy un desarrollador y diseñador con más de 5 años de experiencia creando
              productos digitales. Me apasiona la intersección entre la tecnología y el
              diseño, siempre buscando soluciones elegantes a problemas complejos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cuando no estoy programando, me encuentras explorando nuevas tecnologías,
              contribuyendo a proyectos open source o tomando café mientras leo sobre
              tendencias de diseño.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
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
