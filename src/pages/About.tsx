import { motion } from "framer-motion";
import NaveenPhoto from "@/assets/Naveen.png";

const services = [
  "Full-stack web development",
  "AI agents & chatbots",
  "Computer vision systems",
  "REST API design",
  "React & TypeScript frontends",
  "Node.js & Python backends",
];

const stack = [
  "React, TypeScript, Tailwind",
  "Node.js, Express, Python",
  "OpenCV, TensorFlow, PyTorch",
  "PostgreSQL, MongoDB, Supabase",
  "Git, Docker, Vercel",
];

const About = () => {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="heading-display text-[clamp(3rem,10vw,10rem)] leading-[0.85] mb-8">
            About
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32"
        >
          {/* Photo block */}
          <div className="lg:col-span-4 order-1 lg:order-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-xs sm:max-w-sm"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary shadow-2xl shadow-black/10 aspect-[3/4] min-h-[22rem] sm:min-h-[26rem] lg:min-h-[28rem]">
                <img
                  src={NaveenPhoto}
                  alt="Naveen Kumar S"
                  className="absolute inset-0 h-full w-full object-cover object-[center_4%] sm:object-[center_0%]"
                />
              </div>
              <div className="absolute inset-0 rounded-3xl border-2 border-primary translate-x-3 translate-y-3 -z-10" />
            </motion.div>
            <p className="text-sm text-muted-foreground mt-6 uppercase tracking-wider">
              Karpagam College of Engineering
            </p>
            <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
              BE CSE · Final Year
            </p>
          </div>

          {/* Text */}
          <div className="lg:col-span-8 order-2 lg:order-none">
            <p className="text-3xl md:text-4xl leading-relaxed text-foreground mb-8">
              I'm Naveen Kumar S.
              <br />
              <span className="text-primary">
                Computer Science student with hands‑on experience in full‑stack
                development, data science, and machine learning. Proficient in
                Python, C/C++, Java, SQL, and modern web stacks; I build
                production‑ready applications and ML prototypes that solve
                real‑world problems.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Services & Stack */}
        <div className="grid grid-cols-12 gap-8 border-t border-border pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-8">
              What I do
            </span>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-2xl text-foreground hover:text-primary transition-colors cursor-default"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-8">
              Tech stack
            </span>
            <ul className="space-y-4">
              {stack.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-2xl text-foreground hover:text-primary transition-colors cursor-default"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-20 mt-20"
        >
          <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-8">
            Philosophy
          </span>
          <blockquote className="heading-display text-4xl md:text-6xl leading-tight">
            "Don't just write code.
            <br />
            <span className="text-primary">Ship products."</span>
          </blockquote>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
