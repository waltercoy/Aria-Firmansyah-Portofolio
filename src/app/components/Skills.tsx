import { motion } from "motion/react";
import { Code, Brain, Database, Wrench, Layers, Globe } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code size={24} />,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-400",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "PHP", level: 88 },
        { name: "SQL", level: 92 },
        { name: "C++", level: 80 },
        { name: "R", level: 85 },
      ],
    },
    {
      category: "Machine Learning & AI",
      icon: <Brain size={24} />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-400",
      skills: [
        { name: "TensorFlow & Keras", level: 90 },
        { name: "Scikit-learn", level: 95 },
        { name: "XGBoost & Random Forest", level: 92 },
        { name: "Computer Vision", level: 88 },
        { name: "NLP (TF-IDF)", level: 90 },
        { name: "Azure Cognitive Services", level: 85 },
      ],
    },
    {
      category: "Frontend Development",
      icon: <Globe size={24} />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-400",
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Angular", level: 85 },
        { name: "Bootstrap & Tailwind", level: 92 },
        { name: "TypeScript", level: 88 },
      ],
    },
    {
      category: "Backend Development",
      icon: <Code size={24} />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-400",
      skills: [
        { name: "Node.js & Express.js", level: 90 },
        { name: "PHP", level: 88 },
        { name: "REST API Development", level: 92 },
        { name: "Authentication (JWT, OAuth)", level: 85 },
        { name: "SMTP Integration", level: 80 },
      ],
    },
    {
      category: "Databases & Cloud",
      icon: <Database size={24} />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-400",
      skills: [
        { name: "MySQL (Complex JOIN, Schema)", level: 92 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "Google Cloud", level: 82 },
        { name: "Heroku & Netlify", level: 85 },
      ],
    },
    {
      category: "Data Science & Analytics",
      icon: <Layers size={24} />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-400",
      skills: [
        { name: "Pandas & NumPy", level: 95 },
        { name: "Power BI & Tableau", level: 90 },
        { name: "Matplotlib & Seaborn", level: 88 },
        { name: "Statistical Data Analysis", level: 90 },
        { name: "Excel (Pivot Tables)", level: 92 },
      ],
    },
    {
      category: "IoT & Hardware",
      icon: <Wrench size={24} />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-400",
      skills: [
        { name: "Arduino", level: 92 },
        { name: "ESP8266/ESP32", level: 88 },
        { name: "MQTT Protocol", level: 90 },
        { name: "Node-RED", level: 85 },
        { name: "Sensors Integration", level: 90 },
      ],
    },
    {
      category: "ML Workflow & Process",
      icon: <Brain size={24} />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-400",
      skills: [
        { name: "Data Preprocessing", level: 95 },
        { name: "Feature Engineering", level: 92 },
        { name: "Model Training & Evaluation", level: 93 },
        { name: "Hyperparameter Tuning", level: 88 },
        { name: "Cross Validation", level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-6"
      style={{
        background: "linear-gradient(180deg, #FEF3C7 0%, #FDE68A 100%)",
      }}
    >
      {/* Retro Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#78350f 2px, transparent 2px), linear-gradient(90deg, #78350f 2px, transparent 2px)`,
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-amber-50 font-black uppercase mb-6 shadow-lg border-4 border-amber-900 transform -rotate-2">
            <Code size={24} />
            <span>Skills & Expertise</span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black text-amber-900 mb-4 uppercase tracking-tight"
            style={{ textShadow: "3px 3px 0px rgba(59, 130, 246, 0.3)" }}
          >
            Technical Arsenal
          </h2>
          <p className="text-xl text-amber-900 font-bold max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${category.bgColor} border-8 border-amber-900 shadow-2xl transform ${
                index % 2 === 0 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0 transition-all`}
            >
              <div className="bg-amber-50 border-4 border-amber-900 m-2 p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 bg-yellow-300 border-4 border-amber-900 p-4 shadow-lg">
                  <div className={`w-12 h-12 ${category.bgColor} border-4 border-amber-900 text-amber-50 flex items-center justify-center shadow`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-black text-amber-900 uppercase leading-tight">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-amber-900 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-sm font-black text-red-700 bg-yellow-200 border-2 border-amber-900 px-2 py-0.5">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-4 bg-amber-200 border-4 border-amber-900 overflow-hidden shadow">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + i * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-orange-400 to-red-500 border-8 border-amber-900 p-8 shadow-2xl transform -rotate-1 hover:rotate-0 transition-all"
        >
          <div className="bg-amber-50 border-4 border-amber-900 p-6">
            <h3 className="text-3xl font-black text-amber-900 mb-6 text-center uppercase border-b-4 border-amber-900 pb-4">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Git & GitHub",
                "VS Code",
                "Jupyter Notebook",
                "Google Colab",
                "Arduino IDE",
                "RStudio",
                "Figma",
                "Streamlit Cloud",
                "Microsoft Azure",
                "JSON & REST APIs",
                "CRUD Operations",
                "Microsoft Excel",
                "PowerPoint",
                "Google Workspace",
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-4 py-2 bg-yellow-300 border-4 border-amber-900 text-amber-900 font-black uppercase text-sm shadow-lg hover:bg-teal-400 transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-teal-400 to-green-500 border-8 border-amber-900 p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-all"
        >
          <div className="bg-amber-50 border-4 border-amber-900 p-6">
            <h3 className="text-3xl font-black text-amber-900 mb-6 text-center uppercase border-b-4 border-amber-900 pb-4">
              Training & Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Google Data Analytics Professional Certificate", provider: "Coursera" },
                { name: "AI For MY Future", provider: "Microsoft" },
              ].map((cert, i) => (
                <div
                  key={i}
                  className="bg-yellow-300 border-4 border-amber-900 p-4 shadow-lg"
                >
                  <p className="font-black text-amber-900 text-lg mb-1">{cert.name}</p>
                  <p className="text-sm font-bold text-red-700 uppercase">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
