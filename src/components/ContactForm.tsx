import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_EMAIL = "naveen362305@gmail.com";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _honey: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Consent required
      if (!consent) {
        throw new Error("Please agree to the privacy terms before submitting.");
      }

      // Rate-limit: prevent submissions more often than every 15s (client-side)
      const last = sessionStorage.getItem("contact:lastSubmit");
      if (last) {
        const lastTs = parseInt(last, 10);
        if (!isNaN(lastTs) && Date.now() - lastTs < 15000) {
          throw new Error("Please wait a moment before submitting again.");
        }
      }

      // Basic sanitation and validation
      const name = formData.name.trim().slice(0, 100);
      const email = formData.email.trim().slice(0, 254);
      const message = formData.message.trim().slice(0, 2000);

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Honeypot check (bots often fill hidden fields)
      if (formData._honey && formData._honey.trim() !== "") {
        throw new Error("Spam detected");
      }

      const payload = {
        name,
        email,
        message,
        _subject: "New portfolio contact message",
        _captcha: "false",
        _template: "table",
      };

      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Submission failed");
      }

      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "", _honey: "" });
        setConsent(false);
        sessionStorage.setItem("contact:lastSubmit", String(Date.now()));
      } else if (data.message) {
        throw new Error(data.message);
      } else {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "", _honey: "" });
        setConsent(false);
        sessionStorage.setItem("contact:lastSubmit", String(Date.now()));
      }
    } catch (err: any) {
      setError(err.message || "Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-8 max-w-xl"
    >
      {isSubmitted ? (
        <div className="space-y-4 p-6 bg-secondary border border-border rounded">
          <h3 className="text-2xl font-semibold">Message sent</h3>
          <p className="text-muted-foreground">
            Thank you — your message has been submitted. I'll get back to you soon.
          </p>
          <div>
            <Button onClick={() => setIsSubmitted(false)} className="mt-4">
              Send another message
            </Button>
          </div>
        </div>
      ) : (
        <>
              <input type="hidden" name="_subject" value="New portfolio contact message" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* Honeypot field: keep hidden from users, bots may fill it */}
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
              />

          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground h-14 text-lg"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground h-14 text-lg"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-[200px] text-lg resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="flex items-start gap-3 mt-2">
            <input
              id="consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-4 h-4"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              I agree to the privacy terms and consent to my message being sent to the site owner. See the <a href="/privacy" className="text-primary underline">privacy policy</a>.
            </label>
          </div>

          {error && (
            <p role="alert" aria-live="assertive" className="text-sm text-destructive">{error}</p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting || !consent}
            className="w-full h-16 text-lg font-semibold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </>
      )}
    </motion.form>
  );
};

export default ContactForm;
