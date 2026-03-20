import { motion } from "motion/react";
import { Award, Calendar, ExternalLink, CheckCircle, FileText } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Google Advanced Data Analytics Professional Certificate",
      provider: "Coursera",
      issuer: "Google",
      date: "2024",
      description: "Comprehensive professional certificate covering 8 specialized courses in advanced data analytics, statistical analysis, machine learning, and data visualization.",
      skills: [
        "Advanced Data Analytics",
        "Python Programming",
        "Machine Learning",
        "Statistical Analysis",
        "Data Visualization",
        "Regression Analysis",
        "Predictive Modeling",
        "Tableau",
      ],
      logo: "🎓",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-400",
      link: "https://drive.google.com/file/d/17hdkwdGOZP6Tkj1VCbwY5zyvbayg7e7S/view?usp=sharing",
      certificatePdf: null, // Add your PDF path here: "/certificates/google-advanced-data-analytics.pdf"
    },
    {
      title: "AI For MY Future",
      provider: "Microsoft & Pepper Labs",
      issuer: "Microsoft",
      date: "2024",
      description: "Specialized training program on AI fundamentals, Generative AI technologies, and Microsoft Copilot, demonstrating advanced understanding of modern AI applications.",
      skills: [
        "AI Basics",
        "Generative AI",
        "Microsoft Copilot",
        "AI Ethics",
        "Prompt Engineering",
        "AI Applications",
      ],
      logo: "🤖",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-400",
      link: "https://drive.google.com/file/d/1tnOXX3sDVEjtf0t2QYw30oedrrDzb7T5/view?usp=sharing",
    },
    {
      title: "Cisco Dasar & Jaringan Komputer Dasar",
      provider: "ID-Networkers",
      issuer: "ID-Networkers",
      date: "2024",
      description: "Fundamental networking and computer network basics certification, demonstrating strong understanding of network infrastructure essential for Full-Stack and IoT development.",
      skills: [
        "Network Fundamentals",
        "Cisco Basics",
        "Network Infrastructure",
        "TCP/IP",
        "Network Security",
        "Routing & Switching",
      ],
      logo: "🌐",
      color: "from-green-400 to-teal-500",
      bgColor: "bg-green-400",
      link: "https://drive.google.com/file/d/1rCW1ZdJcKLj0qXN1YkaJIyKWFy7tA3rv/view?usp=sharing",
      certificatePdf: null, // Add your PDF path here: "/certificates/cisco-networking.pdf"
    },
    {
      title: "Young Innovators Challenge (YIC)",
      provider: "Chumbaka",
      issuer: "Chumbaka",
      date: "2024 & 2025",
      description: "Tech volunteer and facilitator at Train The Trainer Workshop, mentoring young innovators in IoT development and innovation methodologies.",
      skills: [
        "IoT Mentoring",
        "Train The Trainer",
        "Innovation Facilitation",
        "Technical Training",
        "Youth Development",
        "Community Tech",
      ],
      logo: "🚀",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-400",
      link: "https://drive.google.com/file/d/1eKR8n5aAobBmrZsFdZfthgKuyhq7Gk0S/view?usp=sharing",
      certificatePdf: null, // Add your PDF path here: "/certificates/yic-certificate.pdf"
    },
  ];

  const additionalTraining = [];

  return (
    <section
      id="certifications"
      className="relative py-20 px-6"
      style={{
        background: "linear-gradient(180deg, #DBEAFE 0%, #BFDBFE 100%)",
      }}
    >
      {/* Retro Stars Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #78350f 3px, transparent 3px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-amber-50 font-black uppercase mb-6 shadow-lg border-4 border-amber-900 transform rotate-2">
            <Award size={24} />
            <span>Certifications</span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black text-amber-900 mb-4 uppercase tracking-tight"
            style={{ textShadow: "3px 3px 0px rgba(139, 92, 246, 0.3)" }}
          >
            Learning & Training
          </h2>
          <p className="text-xl text-amber-900 font-bold max-w-2xl mx-auto">
            Continuous learning through professional certifications and specialized courses
          </p>
        </motion.div>

        {/* Main Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${cert.color} border-8 border-amber-900 shadow-2xl transform ${
                index % 2 === 0 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0 transition-all`}
            >
              <div className="bg-amber-50 border-4 border-amber-900 m-2 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 ${cert.bgColor} border-4 border-amber-900 flex items-center justify-center text-4xl shadow-lg`}>
                      {cert.logo}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-amber-900 text-amber-50 font-black uppercase text-xs shadow">
                          {cert.provider}
                        </span>
                        <div className="flex items-center gap-1 bg-yellow-300 border-2 border-amber-900 px-2 py-0.5 text-xs font-bold text-amber-900">
                          <Calendar size={12} />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-red-700">Issued by: {cert.issuer}</p>
                    </div>
                  </div>

                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center bg-red-600 border-2 border-amber-900 shadow text-amber-50"
                    aria-label="View certificate"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-amber-900 mb-4 uppercase leading-tight">
                  {cert.title}
                </h3>

                {/* Description */}
                <div className="bg-yellow-200 border-4 border-amber-900 p-4 mb-6 shadow">
                  <p className="text-amber-900 font-bold text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Covered */}
                <div className="mb-6">
                  <p className="font-black text-amber-900 mb-3 uppercase text-sm border-b-4 border-amber-900 pb-2">
                    Skills Covered:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="px-3 py-1 bg-teal-400 border-2 border-amber-900 text-amber-900 text-xs font-bold uppercase shadow flex items-center gap-1"
                      >
                        <CheckCircle size={12} />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-teal-400 to-green-500 border-8 border-amber-900 p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-all"
        >
          <div className="bg-amber-50 border-4 border-amber-900 p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-red-600 border-4 border-amber-900 rounded-full flex items-center justify-center text-4xl shadow-lg flex-shrink-0">
                📚
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-amber-900 mb-2 uppercase">
                  Commitment to Continuous Learning
                </h3>
                <p className="text-amber-900 font-bold leading-relaxed">
                  Actively pursuing knowledge in cutting-edge technologies through industry-recognized certifications, hands-on projects, and real-world applications. Always learning, always building, always improving.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center bg-yellow-300 border-4 border-amber-900 p-4 shadow-lg">
                  <div className="text-3xl font-black text-red-700">4</div>
                  <div className="text-xs font-bold text-amber-900 uppercase">Certificates</div>
                </div>
                <div className="text-center bg-orange-400 border-4 border-amber-900 p-4 shadow-lg">
                  <div className="text-3xl font-black text-red-700">∞</div>
                  <div className="text-xs font-bold text-amber-900 uppercase">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}