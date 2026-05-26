import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="heading-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            This page explains how contact data submitted via the portfolio is
            handled. It is kept intentionally short — contact me if you need more details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 space-y-6"
          >
            <h2 className="text-xl font-semibold">What we collect</h2>
            <p className="text-muted-foreground">
              The contact form collects your name, email and the message you
              send. A hidden honeypot field is present to reduce automated spam.
            </p>

            <h2 className="text-xl font-semibold">How it is used</h2>
            <p className="text-muted-foreground">
              Form submissions are sent to a third-party form service (FormSubmit).
              The information is used only to respond to your inquiry and is not
              shared publicly. You must explicitly consent before submitting the form.
            </p>

            <h2 className="text-xl font-semibold">Retention & access</h2>
            <p className="text-muted-foreground">
              Messages are retained by the site owner and/or the third-party
              processor. To request deletion or export of your data, contact the
              site owner at the email address shown on the site.
            </p>

            <h2 className="text-xl font-semibold">Security</h2>
            <p className="text-muted-foreground">
              Basic protections are in place: a hidden honeypot, client-side
              validation, and rate-limiting to reduce abuse. For production
              deployments, server-side validation and rate-limiting are
              recommended.
            </p>

            <h2 className="text-xl font-semibold">Third-party services</h2>
            <p className="text-muted-foreground">
              This site may use FormSubmit for message delivery. Consult their
              documentation for details on data handling. No analytics or
              tracking scripts are enabled by default in this portfolio.
            </p>

            <p className="text-sm text-muted-foreground">
              Back to <Link to="/contact" className="text-primary underline">Contact</Link>.
            </p>
          </motion.section>

          <aside className="md:col-span-4">
            <div className="bg-secondary p-6 rounded border border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-4">Contact</h3>
              <p className="text-foreground">naveen362305@gmail.com</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
