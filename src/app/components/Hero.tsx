import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react";
import profileImage from "../../assets/5b4e673b3697386a3993b9bc5c2f9e384151c532.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FED7AA 0%, #FDE68A 50%, #FCD34D 100%)",
      }}
    >
      {/* Retro Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #78350f 10px, #78350f 20px)`,
          }}
        />
      </div>

      {/* Animated Retro Car */}
      <motion.div
        animate={{
          x: ["-100%", "100vw"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-32 left-0 z-20 pointer-events-none"
      >
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car Body */}
          <rect x="10" y="25" width="90" height="20" fill="#EF4444" stroke="#78350f" strokeWidth="3" />
          <rect x="25" y="15" width="50" height="10" fill="#DC2626" stroke="#78350f" strokeWidth="3" />
          {/* Windows */}
          <rect x="30" y="18" width="15" height="7" fill="#93C5FD" stroke="#78350f" strokeWidth="2" />
          <rect x="55" y="18" width="15" height="7" fill="#93C5FD" stroke="#78350f" strokeWidth="2" />
          {/* Wheels */}
          <circle cx="30" cy="50" r="8" fill="#1F2937" stroke="#78350f" strokeWidth="3" />
          <circle cx="30" cy="50" r="4" fill="#D1D5DB" stroke="#78350f" strokeWidth="2" />
          <circle cx="80" cy="50" r="8" fill="#1F2937" stroke="#78350f" strokeWidth="3" />
          <circle cx="80" cy="50" r="4" fill="#D1D5DB" stroke="#78350f" strokeWidth="2" />
          {/* Headlights */}
          <rect x="95" y="30" width="5" height="6" fill="#FCD34D" stroke="#78350f" strokeWidth="2" />
          <rect x="95" y="39" width="5" height="6" fill="#FCD34D" stroke="#78350f" strokeWidth="2" />
          {/* Exhaust smoke */}
          <motion.circle
            cx="12"
            cy="38"
            r="3"
            fill="#9CA3AF"
            opacity="0.5"
            animate={{
              x: [-5, -15, -25],
              y: [0, -5, -10],
              opacity: [0.5, 0.3, 0],
              scale: [1, 1.5, 2],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </svg>
      </motion.div>

      {/* Decorative Circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-64 h-64 border-8 border-orange-600/20 rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, -180, -360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-48 h-48 border-8 border-red-600/20 rounded-full"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Picture - Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="md:hidden mb-8"
            >
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 border-8 border-amber-900 transform rotate-6 shadow-2xl" />
                <div className="absolute inset-0 border-8 border-amber-900 overflow-hidden shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Aria Firmansyah"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-red-600 text-amber-50 font-bold mb-6 transform -rotate-2 shadow-lg"
            >
              👋 WELCOME!
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl font-black text-amber-900 mb-4 tracking-tight"
              style={{ textShadow: "4px 4px 0px rgba(239, 68, 68, 0.3)" }}
            >
              ARIA
              <br />
              FIRMANSYAH
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2 mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-red-700">
                Software Engineer & Data Scientist
              </h2>
              <p className="text-xl text-amber-900 font-medium">
                Full-Stack Developer • AI & Intelligent Systems • IoT Specialist
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-amber-900 leading-relaxed mb-8 font-medium"
            >
              Computer Science student with hands-on experience building and deploying real-world full-stack web applications, automation systems, and AI-powered platforms used by organizations and university departments.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3 mb-8 bg-amber-100 border-4 border-amber-900 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 text-amber-900">
                <Mail size={20} className="text-red-600" />
                <a
                  href="mailto:ariafms00@gmail.com"
                  className="hover:text-red-600 transition-colors font-bold"
                >
                  ariafms00@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-amber-900 font-bold">
                <Phone size={20} className="text-red-600" />
                <span>+60 1158521298</span>
              </div>
              <div className="flex items-center gap-3 text-amber-900 font-bold">
                <MapPin size={20} className="text-red-600" />
                <span>Alor Setar, Kedah, Malaysia</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-4 mb-8"
            >
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-red-600 text-amber-50 font-black uppercase shadow-lg border-4 border-amber-900 hover:bg-red-700 transition-all"
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-amber-100 text-amber-900 font-black uppercase shadow-lg border-4 border-amber-900 hover:bg-amber-200 transition-all"
                >
                  View Projects
                </motion.a>
              </div>
              
              {/* View Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1CrPF9gehTLoojyf9Zs5-U3D_F2G6D93q/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-500 text-amber-50 font-black uppercase shadow-lg border-4 border-amber-900 hover:bg-orange-600 transition-all text-center"
              >
                📄 View Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {[
                { icon: <Github size={20} />, href: "https://github.com/waltercoy", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/aria-firmansyah-0b1a87286/", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:ariafms00@gmail.com", label: "Email" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/a.riafirms/", label: "Instagram" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 flex items-center justify-center bg-orange-400 border-4 border-amber-900 shadow-lg text-amber-900 hover:bg-red-600 hover:text-amber-50 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile Photo Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative mb-8"
              >
                <div className="relative w-72 h-72 mx-auto">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 border-8 border-amber-900 transform rotate-6 shadow-2xl" />
                  {/* Photo frame */}
                  <div className="absolute inset-0 border-8 border-amber-900 overflow-hidden shadow-2xl bg-amber-100">
                    <img
                      src={profileImage}
                      alt="Aria Firmansyah - CEO at AliveShop, Data Scientist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Name tag */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 border-4 border-amber-900 px-6 py-2 shadow-lg">
                    <p className="font-black text-amber-900 uppercase whitespace-nowrap">
                      Aria Firmansyah
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-orange-300 to-red-400 border-8 border-amber-900 shadow-2xl p-8 transform rotate-3">
                <div className="bg-amber-50 border-4 border-amber-900 p-6 transform -rotate-3">
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-600 border-4 border-amber-900 p-4 text-center shadow-lg">
                        <div className="text-4xl font-black text-amber-50">
                          3+
                        </div>
                        <div className="text-sm text-amber-50 font-bold mt-1 uppercase">
                          Years Exp
                        </div>
                      </div>
                      <div className="bg-orange-500 border-4 border-amber-900 p-4 text-center shadow-lg">
                        <div className="text-4xl font-black text-amber-50">
                          10+
                        </div>
                        <div className="text-sm text-amber-50 font-bold mt-1 uppercase">
                          Projects
                        </div>
                      </div>
                    </div>

                    {/* Skills badges */}
                    <div className="space-y-3">
                      <h3 className="font-black text-amber-900 uppercase text-lg border-b-4 border-amber-900 pb-2">
                        Core Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Machine Learning",
                          "Deep Learning",
                          "Full-Stack Dev",
                          "IoT",
                          "Data Science",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-yellow-300 border-2 border-amber-900 text-amber-900 text-sm font-bold uppercase shadow"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Currently working on */}
                    <div className="bg-teal-400 border-4 border-amber-900 p-4 shadow-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-red-600 rounded-full mt-1.5 animate-pulse" />
                        <div>
                          <div className="font-black text-amber-900 mb-1 uppercase">
                            Currently
                          </div>
                          <div className="text-sm text-amber-900 font-bold">
                            CEO at AliveShop • VP & Head of IT at PPI AIU
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 border-4 border-amber-900 rounded-full flex items-center justify-center font-black text-amber-900 transform rotate-12 shadow-lg">
                HIRE
                <br />
                ME!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}