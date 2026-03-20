import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";

type SubmitStatus = "idle" | "sending" | "success" | "error";
const SUBMIT_COOLDOWN_MS = 15000;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [lastSubmissionAt, setLastSubmissionAt] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const now = Date.now();

    if (formData.website.trim() !== "") {
      setSubmitStatus("success");
      setSubmitMessage("Message sent successfully. I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      return;
    }

    if (now - lastSubmissionAt < SUBMIT_COOLDOWN_MS) {
      const waitSeconds = Math.ceil((SUBMIT_COOLDOWN_MS - (now - lastSubmissionAt)) / 1000);
      setSubmitStatus("error");
      setSubmitMessage(`Please wait ${waitSeconds}s before sending another message.`);
      return;
    }

    if (!accessKey) {
      setSubmitStatus("error");
      setSubmitMessage("Contact form is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env file.");
      return;
    }

    try {
      setSubmitStatus("sending");
      setSubmitMessage("");
      setLastSubmissionAt(now);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio Contact: ${formData.subject}`,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          replyto: formData.email,
          botcheck: formData.website,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      setSubmitStatus("success");
      setSubmitMessage("Message sent successfully. I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Failed to send message. Please try again or email ariafms00@gmail.com directly.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "ariafms00@gmail.com",
      href: "mailto:ariafms00@gmail.com",
      color: "bg-red-500",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+60 1158521298",
      href: "tel:+601158521298",
      color: "bg-green-500",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Alor Setar, Kedah, Malaysia",
      href: "#",
      color: "bg-purple-500",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/aria-firmansyah-0b1a87286/",
      color: "bg-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/waltercoy",
      color: "bg-slate-800",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: "mailto:ariafms00@gmail.com",
      color: "bg-red-600",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/ariafirmansyah/",
      color: "bg-pink-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-6"
      style={{
        background: "linear-gradient(180deg, #FEF3C7 0%, #FDE68A 100%)",
      }}
    >
      {/* Retro Zigzag Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent 0px, transparent 20px, #78350f 20px, #78350f 22px)`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-amber-50 font-black uppercase mb-6 shadow-lg border-4 border-amber-900 transform -rotate-2">
            <Send size={24} />
            <span>Get In Touch</span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black text-amber-900 mb-4 uppercase tracking-tight"
            style={{ textShadow: "3px 3px 0px rgba(234, 179, 8, 0.3)" }}
          >
            Let's Work Together
          </h2>
          <p className="text-xl text-amber-900 font-bold max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-black text-amber-900 mb-6 uppercase border-b-4 border-amber-900 pb-3">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`flex items-center gap-4 ${info.color} border-8 border-amber-900 p-6 shadow-2xl transform hover:rotate-0 transition-all ${
                    index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  <div className="w-14 h-14 bg-amber-900 border-4 border-amber-50 text-amber-50 flex items-center justify-center flex-shrink-0 shadow-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-amber-50 font-black uppercase mb-1">
                      {info.label}
                    </p>
                    <p className="font-black text-amber-50 text-lg">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="font-black text-amber-900 mb-4 uppercase text-xl border-b-4 border-amber-900 pb-2">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-16 h-16 flex items-center justify-center ${social.color} text-amber-50 border-4 border-amber-900 shadow-2xl transition-all`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-teal-400 to-green-500 border-8 border-amber-900 p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-all">
              <div className="bg-amber-50 border-4 border-amber-900 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 bg-red-600 border-2 border-amber-900 mt-1 animate-pulse" />
                  <div>
                    <h4 className="font-black text-amber-900 mb-1 uppercase text-lg">
                      Currently Available
                    </h4>
                    <p className="text-sm text-amber-900 font-bold">
                      Open to freelance projects, collaborations, and full-time
                      opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-orange-400 to-red-500 border-8 border-amber-900 shadow-2xl transform -rotate-1 hover:rotate-0 transition-all">
              <div className="bg-amber-50 border-4 border-amber-900 m-2 p-8">
                <h3 className="text-3xl font-black text-amber-900 mb-6 uppercase border-b-4 border-amber-900 pb-3">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Leave this field empty</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-black text-amber-900 mb-2 uppercase"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 border-4 border-amber-900 bg-yellow-100 font-bold text-amber-900 focus:outline-none focus:bg-white transition-all shadow"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-black text-amber-900 mb-2 uppercase"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 border-4 border-amber-900 bg-yellow-100 font-bold text-amber-900 focus:outline-none focus:bg-white transition-all shadow"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-black text-amber-900 mb-2 uppercase"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 border-4 border-amber-900 bg-yellow-100 font-bold text-amber-900 focus:outline-none focus:bg-white transition-all shadow"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-black text-amber-900 mb-2 uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-4 border-amber-900 bg-yellow-100 font-bold text-amber-900 focus:outline-none focus:bg-white transition-all resize-none shadow"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={submitStatus === "sending"}
                    className="w-full px-8 py-4 bg-red-600 text-amber-50 font-black uppercase shadow-2xl border-4 border-amber-900 hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    {submitStatus === "sending" ? "Sending..." : "Send Message"}
                  </motion.button>

                  {(submitStatus === "success" || submitStatus === "error") && (
                    <p
                      role="status"
                      aria-live="polite"
                      className={`font-black text-sm uppercase ${
                        submitStatus === "success" ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {submitMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t-8 border-amber-900 text-center"
        >
          <p className="text-amber-900 font-black text-lg uppercase">
            © 2026 Aria Firmansyah. Built with React & Tailwind CSS.
          </p>
          <p className="text-sm text-amber-900 font-bold mt-2">
            OPEN TO FREELANCE, COLLABORATIONS, AND FULL-TIME OPPORTUNITIES
          </p>
        </motion.div>
      </div>
    </section>
  );
}