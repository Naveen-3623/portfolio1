import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CopyReveal from "@/components/CopyReveal";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const copyExamples = [
    {
      before: "Just another CRUD app",
      after: "AI-powered order taking that runs the restaurant floor.",
    },
    {
      before: "Generic computer vision demo",
      after: "Real-time drowsiness detection that wakes drivers up.",
    },
    {
      before: "A student who knows some code",
      after: "A full-stack engineer who ships end-to-end products.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Restaurant Order Taking Agent",
      context: "Conversational AI agent for restaurant order intake",
      action: "Built a voice/chat agent that takes orders, handles menu queries, and confirms checkout",
      result: "Faster orders, fewer errors",
    },
    {
      number: "02",
      title: "Driver Drowsiness Detection",
      context: "Computer vision system for driver safety",
      action: "Trained a real-time eye/face tracking model with alert system for fatigued drivers",
      result: "Live drowsiness alerts",
    },
    {
      number: "03",
      title: "Full-Stack Web Projects",
      context: "End-to-end apps with modern stack",
      action: "Designed, built, and shipped responsive web apps using React, Node, and cloud backends",
      result: "Production-ready builds",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-[70vh] sm:min-h-screen flex flex-col justify-center px-4 md:px-6 pt-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl"
          >
            <h1 className="heading-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] mb-8">
              Code doesn't ship.
              <span className="text-primary"> Engineers do.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mt-12 mb-16"
          >
            I'm Naveen Kumar S — full-stack developer and final-year CSE student
            at Karpagam College of Engineering. I build AI-powered products end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-4 text-xl font-semibold uppercase tracking-wider text-primary hover:gap-6 transition-all group"
            >
              See the work
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Copy Transformation Section */}
      <section className="py-32 px-4 md:px-6 border-t border-border">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-4">
              The difference
            </span>
            <h2 className="heading-display text-4xl md:text-6xl">
              Tutorial vs. Production
            </h2>
          </motion.div>

          <div className="space-y-12">
            {copyExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-border hover:border-primary transition-colors pl-8 py-4"
              >
                <CopyReveal
                  before={example.before}
                  after={example.after}
                  className="text-2xl md:text-3xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-32 px-4 md:px-6 border-t border-border">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-4">
              Selected work
            </span>
            <h2 className="heading-display text-4xl md:text-6xl">
              Projects that <span className="text-primary">ship</span>
            </h2>
          </motion.div>

          <div>
            {projects.map((project, index) => (
              <ProjectCard key={project.number} {...project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-4 text-lg font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-all group"
            >
              View all projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading-display text-5xl md:text-7xl mb-12"
          >
            Let's build something.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center gap-4 text-lg sm:text-xl font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 sm:px-12 sm:py-6 hover:bg-primary/90 transition-colors"
            >
              Get in touch
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
