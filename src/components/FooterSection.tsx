import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Kisire78", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/josue-espinoza-a05a53324/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ksre78@gmail.com", label: "Email" },
];

const FooterSection = () => {
  return (
    <footer id="contacto" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Siempre estoy abierto a nuevas oportunidades en QA.
            ¡No dudes en contactarme!
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=ksre78@gmail.com&su=Contacto%20desde%20portafolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold tracking-wide hover:brightness-110 transition-all mb-10"
          >
            Enviar Mensaje
          </a>

          <div className="flex justify-center gap-5 mb-10">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-xs tracking-wide">
            © {new Date().getFullYear()} Josue Espinoza. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
