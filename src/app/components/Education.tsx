import { motion } from "motion/react";
import { GraduationCap, Calendar, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Science (Hons)",
      institution: "Albukhary International University (AIU)",
      location: "Alor Setar, Kedah, Malaysia",
      period: "Oct 2022 - Oct 2026",
      gpa: "CGPA: 3.45/4.00",
      focus: "Data Science & Artificial Intelligence",
      scholarship: "Full Scholarship Recipient (NTB Provincial Gov & AIU)",
      highlights: [
        "NTB Global Scholarship Awardee - Highly competitive full academic scholarship",
        "Gold Award 🥇 | IIEC 2026 - Innovation Excellence at The Invention, Innovation and Entrepreneurship Carnival",
        "Relevant Coursework: Data Structures & Algorithms, DBMS, AI, Machine Learning, NLP, Deep Learning, Data Mining, Software Engineering",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="relative py-20 px-6"
      style={{
        background: "linear-gradient(180deg, #FEF3C7 0%, #FDE68A 100%)",
      }}
    >
      {/* Retro Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #78350f 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-amber-50 font-black uppercase mb-6 shadow-lg border-4 border-amber-900 transform -rotate-2">
            <GraduationCap size={24} />
            <span>Education</span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black text-amber-900 mb-4 uppercase tracking-tight"
            style={{ textShadow: "3px 3px 0px rgba(239, 68, 68, 0.3)" }}
          >
            Academic Background
          </h2>
          <p className="text-xl text-amber-900 font-bold max-w-2xl mx-auto">
            Building a strong foundation in Computer Science and Data Science
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-orange-300 to-red-400 border-8 border-amber-900 p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-all"
            >
              <div className="bg-amber-50 border-4 border-amber-900 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-red-600 border-4 border-amber-900 flex items-center justify-center text-amber-50 flex-shrink-0 shadow-lg">
                        <GraduationCap size={32} strokeWidth={3} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-amber-900 mb-2 uppercase">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-bold text-red-700 mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-amber-900 font-bold">{edu.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-amber-900 font-bold bg-yellow-300 border-2 border-amber-900 px-3 py-1 shadow">
                      <Calendar size={18} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-amber-50 font-black uppercase shadow-lg border-2 border-amber-900">
                      <Award size={18} />
                      <span>{edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-yellow-200 border-4 border-amber-900 p-4 shadow">
                    <p className="text-amber-900 font-bold">
                      <span className="font-black uppercase">Focus:</span> {edu.focus}
                    </p>
                  </div>

                  <div className="bg-purple-300 border-4 border-amber-900 p-4 shadow">
                    <p className="text-amber-900 font-bold">
                      <span className="font-black uppercase">🏆 Scholarship:</span> {edu.scholarship}
                    </p>
                  </div>

                  <div>
                    <p className="font-black text-amber-900 mb-3 uppercase text-lg border-b-4 border-amber-900 pb-2">
                      Achievements & Highlights:
                    </p>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-amber-900 font-bold"
                        >
                          <div className="w-2 h-2 bg-red-600 rotate-45 mt-2 flex-shrink-0 border-2 border-amber-900" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-teal-400 to-green-500 border-8 border-amber-900 p-8 shadow-2xl transform -rotate-1 hover:rotate-0 transition-all"
        >
          <div className="bg-amber-50 border-4 border-amber-900 p-6">
            <h3 className="text-3xl font-black text-amber-900 mb-6 text-center uppercase border-b-4 border-amber-900 pb-4">
              Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { lang: "Bahasa Indonesia", level: "Native" },
                { lang: "English", level: "Fluent" },
                { lang: "Arabic", level: "Fluent" },
                { lang: "Malay", level: "Conversational" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-yellow-300 border-4 border-amber-900 p-4 text-center shadow-lg"
                >
                  <p className="font-black text-amber-900 text-lg mb-1">{item.lang}</p>
                  <p className="text-sm font-bold text-red-700 uppercase">{item.level}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
