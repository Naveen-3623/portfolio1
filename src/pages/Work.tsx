import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    number: "01",
    title: "Restaurant Order Taking Agent",
    context: "AI agent that handles end-to-end order intake for restaurants",
    action: "Designed and built a conversational agent (voice + chat) that understands menu items, customizations, and confirms orders",
    result: "Faster service, fewer errors",
  },
  {
    number: "02",
    title: "Driver Drowsiness Detection",
    context: "Computer vision system to prevent fatigue-related accidents",
    action: "Built a real-time face & eye tracking pipeline with alert system using OpenCV and deep learning",
    result: "Live safety alerts",
  },
  {
    number: "03",
    title: "Full-Stack Web Apps",
    context: "End-to-end product builds during college projects",
    action: "Designed, built, and deployed responsive web apps with React, Node.js, and cloud databases",
    result: "Production-ready delivery",
  },
];

const Work = () => {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="heading-display text-[clamp(3rem,10vw,10rem)] leading-[0.85] mb-8">
            Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Selected projects across AI, computer vision, and full-stack web.
            Real builds, real outcomes.
          </p>
        </motion.div>

        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.number} {...project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border pt-20 mt-20 text-center"
        >
          <p className="text-2xl text-muted-foreground mb-4">
            Got an idea?
          </p>
          <p className="heading-display text-4xl md:text-5xl">
            Let's build <span className="text-primary">it</span> together.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Work;
