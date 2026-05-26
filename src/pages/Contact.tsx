import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
            Contact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Got a project, internship, or collaboration in mind? Drop a message
            and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-16">
          {/* Form */}
          <div id="contact-form" className="col-span-12 md:col-span-7">
            <ContactForm />
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 md:col-span-5"
          >
            <div className="space-y-12">
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-4">
                  Email
                </span>
                <a
                  href="mailto:naveen362305@gmail.com"
                  className="text-2xl text-foreground hover:text-primary transition-colors break-all"
                >
                  naveen362305@gmail.com
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-4">
                  Response time
                </span>
                <p className="text-2xl text-foreground">Within 24 hours</p>
              </div>

              <div className="border-t border-border pt-12">
                <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-4">
                  Open to
                </span>
                <p className="text-lg text-foreground">
                  Internships, freelance projects, and collaborations.
                  <br />
                  <span className="text-primary">Let's talk.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
