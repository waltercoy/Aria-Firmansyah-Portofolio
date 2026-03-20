import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Chief Executive Officer (CEO)",
      company: "AliveShop (Social Enterprise)",
      location: "Albukhary International University, Malaysia",
      period: "Oct 2025 - Present",
      type: "Leadership",
      description:
        "Direct strategic operations and a multi-disciplinary team for a premier on-campus social business, ensuring sustainable growth and profitability.",
      achievements: [
        "Featured Speaker for 3Zero Club, presenting social entrepreneurship and digital innovation to international student delegations (Singapore, Malaysia, & Indonesia)",
        "Led social programs providing financial aid and tablets to orphanages",
        "Integrated AI solutions (SHORTA) to boost operational efficiency by 60%",
        "Developed full-stack platform enabling public item donations and community engagement",
      ],
    },
    {
      title: "Vice President",
      company: "PPI AIU (Indonesian Students Association at AIU)",
      location: "Albukhary International University, Malaysia",
      period: "Dec 2024 - Dec 2025",
      type: "Leadership",
      description:
        "Led 200-member organization, overseeing strategic planning and cross-department operations.",
      achievements: [
        "Executed 10+ social and educational programs in partnership with KBRI and KJRI",
        "Directed AIU MAM, a regional summit involving 3 universities in Northern Malaysia",
        "Led Indiversion Cultural Festival, attracting 5,000 campus and public attendees",
        "Managed organizational strategy and inter-departmental coordination",
      ],
    },
    {
      title: "Head of IT",
      company: "PPI AIU (Indonesian Students Association at AIU)",
      location: "Albukhary International University, Malaysia",
      period: "Dec 2024 - Dec 2025",
      type: "Technical Leadership",
      description:
        "Developed and managed IT infrastructure and digital platforms for the organization.",
      achievements: [
        "Developed the official PPI AIU Web Application, serving as a digital information hub and primary communication platform",
        "Launched an integrated article publication system enabling real-time content updates",
        "Engineered a secure admin dashboard for organizational activities and news",
        "Enhanced digital branding and communication for 200+ member organization",
      ],
    },
    {
      title: "Mentor IOT Prototype Program",
      company: "Chumbaka",
      location: "Malaysia",
      period: "Jun 2024 - Sep 2025",
      type: "Mentorship",
      description:
        "Mentored students in IoT development and prototype creation from foundational concepts to implementation.",
      achievements: [
        "Mentored 15 students from zero knowledge to implementing functional IoT projects",
        "Coached teams to 2nd Place (2024) in regional IoT & Arduino competition",
        "Coached teams to 3rd Place (2025) in regional IoT & Arduino competition",
        "Developed comprehensive curriculum covering Arduino, sensors, and system integration",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 px-6"
      style={{
        background: "linear-gradient(180deg, #FED7AA 0%, #FDBA74 100%)",
      }}
    >
      {/* Retro Stripes */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #78350f, #78350f 20px, transparent 20px, transparent 40px)`,
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-amber-50 font-black uppercase mb-6 shadow-lg border-4 border-amber-900 transform rotate-2">
            <Briefcase size={24} />
            <span>Experience</span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black text-amber-900 mb-4 uppercase tracking-tight"
            style={{ textShadow: "3px 3px 0px rgba(34, 197, 94, 0.3)" }}
          >
            Leadership & Work
          </h2>
          <p className="text-xl text-amber-900 font-bold max-w-2xl mx-auto">
            Hands-on experience leading teams and delivering real-world solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`transform ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"}`}
            >
              <div
                className={`bg-gradient-to-br ${
                  index % 2 === 0
                    ? "from-teal-400 to-cyan-500"
                    : "from-yellow-300 to-orange-400"
                } border-8 border-amber-900 p-8 shadow-2xl transform ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0 transition-all`}
              >
                <div className="bg-amber-50 border-4 border-amber-900 p-6">
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-red-600 text-amber-50 font-black uppercase text-sm shadow-lg border-2 border-amber-900">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-2 bg-yellow-300 border-2 border-amber-900 px-3 py-1 shadow font-bold text-amber-900">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-teal-400 border-2 border-amber-900 px-3 py-1 shadow font-bold text-amber-900">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-amber-900 mb-2 uppercase">
                      {exp.title}
                    </h3>
                    <p className="text-2xl font-bold text-red-700 mb-4">
                      {exp.company}
                    </p>
                  </div>

                  <div className="bg-yellow-200 border-4 border-amber-900 p-4 mb-6 shadow">
                    <p className="text-amber-900 font-bold leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div>
                    <p className="font-black text-amber-900 mb-4 uppercase text-lg border-b-4 border-amber-900 pb-2">
                      Key Achievements:
                    </p>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 bg-red-600 border-4 border-amber-900 flex-shrink-0 mt-0.5 shadow" />
                          <span className="text-amber-900 font-bold flex-1">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
