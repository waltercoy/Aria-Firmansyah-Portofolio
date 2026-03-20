import { motion } from "motion/react";
import { ExternalLink, Github, Folder } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "SHORTA – AI Clothing Quality Inspection",
      category: "AI & Computer Vision",
      description:
        "Built an automated classification system using Microsoft Azure Computer Vision to detect clothing conditions (resalable or not) in real-time camera feed, optimizing AliveShop operations.",
      technologies: [
        "Microsoft Azure",
        "Computer Vision",
        "Python",
        "Real-time Processing",
      ],
      highlights: [
        "Reduced manual sorting time by 60% (from 20 to 10 minutes per 50 items)",
        "Currently deployed as primary tool for processing donations",
        "Real-time camera-based classification system",
      ],
      github: "https://github.com/AliveShop/ProjectAliveShop",
      demo: "https://aliveshop.netlify.app/donation",
      color: "bg-red-400",
    },
    {
      title: "Employee Learning & Advancement System (ELAS)",
      category: "Full-Stack Web Application",
      description:
        "Comprehensive web-based monitoring system using PHP and MySQL to track Continuing Professional Education (CPE) points for university staff at Albukhary International University.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      highlights: [
        "Automated compliance and approval workflows",
        "Official platform for HR, CDEA, and ICT departments",
        "Manages 90+ academic and non-academic staff",
      ],
      github: "https://github.com/waltercoy/FYP",
      demo: "https://elas.aiusms.com",
      color: "bg-purple-400",
    },
    {
      title: "PPI AIU Official Web App",
      category: "Full-Stack Development",
      description:
        "Official information hub for the Indonesian Student Association at AIU with secure admin dashboard for real-time updates on organizational activities and news.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript", "Bootstrap"],
      highlights: [
        "Primary communication platform for 200+ members",
        "Integrated article publication system",
        "Real-time content updates and digital branding",
      ],
      github: "https://github.com/PPIAIU/project-website",
      demo: "https://ppi-aiu-official-329f2da69d7b.herokuapp.com",
      color: "bg-green-400",
    },
    {
      title: "AliveShop Official Web Application",
      category: "Full-Stack Platform",
      description:
        "Full-stack platform for a social enterprise thrift store, enabling public item donations, activity updates, and improved community engagement.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Netlify"],
      highlights: [
        "Official digital gateway for item donations",
        "Live and operational platform",
        "Supports social entrepreneurship mission",
      ],
      github: "https://github.com/AliveShop/ProjectAliveShop",
      demo: "https://aliveshop.netlify.app",
      color: "bg-orange-400",
    },
    {
      title: "Sentiment Analysis for Review Classification",
      category: "NLP & Machine Learning",
      description:
        "NLP pipeline using TF-IDF and Machine Learning to automate textual review classification with high accuracy benchmarks.",
      technologies: [
        "Python",
        "TF-IDF",
        "Scikit-learn",
        "Logistic Regression",
        "SVM",
      ],
      highlights: [
        "Achieved 91.3% F1-score with Logistic Regression",
        "Outperformed SVM in model benchmarks",
        "Recognized by faculty for technical excellence",
      ],
      github: "https://github.com/waltercoy/sentiment-analysis-app",
      demo: "https://github.com/waltercoy/sentiment-analysis-app",
      color: "bg-indigo-400",
    },
    {
      title: "Data Science Salary Classification",
      category: "End-to-End ML",
      description:
        "Machine learning model to predict salary categories for Data Science roles based on job and skill-related features with deployed Streamlit web app.",
      technologies: [
        "Python",
        "HistGradientBoosting",
        "Streamlit",
        "Pandas",
        "Scikit-learn",
      ],
      highlights: [
        "80% classification accuracy",
        "Real-time salary prediction web app",
        "Excellent faculty evaluation",
      ],
      github: "https://github.com/waltercoy/salary-categorization",
      demo: "https://salary-categorization.streamlit.app",
      color: "bg-teal-400",
    },
    {
      title: "Tourism Destination Segmentation & Visitor Prediction",
      category: "Machine Learning",
      description:
        "Predictive model using historical tourism data to forecast future visitor arrivals across global destinations, supporting capacity and marketing decisions.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Time Series"],
      highlights: [
        "MAE 9.81M and RMSE 23.11M achieved",
        "Time-aware data splitting methodology",
        "Identified future top-growth destinations",
      ],
      github: "https://github.com/waltercoy/tourism-ml-project",
      demo: "https://github.com/waltercoy/tourism-ml-project",
      color: "bg-yellow-400",
    },
    {
      title: "Automation System for Data Summarization (KONE)",
      category: "Data Automation",
      description:
        "Automated Power BI dashboards by integrating Excel datasets to enhance reporting visibility for KONE Business Services staff.",
      technologies: ["Power BI", "Excel", "Data Integration", "Dashboards"],
      highlights: [
        "Reduced manual processing time significantly",
        "Currently utilized by KONE staff",
        "Faster HR operational insights extraction",
      ],
      github: "https://github.com/waltercoy",
      color: "bg-pink-400",
    },
    {
      title: "Smart Home Security & Automation",
      category: "IoT Project",
      description:
        "Identity-based security system integrating Arduino, PIR, and Ultrasonic sensors with Firebase for smart home automation and real-time monitoring.",
      technologies: [
        "Arduino",
        "ESP8266/32",
        "MQTT",
        "Node-RED",
        "Firebase",
        "Sensors",
      ],
      highlights: [
        "Awarded perfect score for prototype",
        "Sensor-triggered gate and lighting automation",
        "Real-time communication via MQTT",
      ],
      github: "https://github.com/waltercoy/Smart-Home-IOT-Project",
      color: "bg-cyan-400",
    },
    {
      title: "Online Retail Sales Performance Analysis",
      category: "Tableau Dashboard",
      description:
        "Analyzed 541,909 real-world e-commerce transactions from UCI ML Repository to evaluate yearly sales performance and revenue trends with interactive visualizations.",
      technologies: ["Tableau", "Data Analysis", "Statistical Analysis"],
      highlights: [
        "Interactive Line, Bubble, and Box Plot visualizations",
        "Discovered November as peak sales month",
        "Strong volume-revenue correlation insights",
      ],
      github: "https://public.tableau.com/shared/WFB2NZFW6?:display_count=n&:origin=viz_share_link",
      demo: "https://public.tableau.com/shared/WFB2NZFW6?:display_count=n&:origin=viz_share_link",
      color: "bg-lime-400",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6"
      style={{
        background: "linear-gradient(180deg, #FED7AA 0%, #FDBA74 100%)",
      }}
    >
      {/* Retro Circles Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #78350f 2px, transparent 2px), radial-gradient(circle at 75% 75%, #78350f 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-amber-50 font-black uppercase mb-6 shadow-lg border-4 border-amber-900 transform rotate-2">
            <Folder size={24} />
            <span>Portfolio</span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black text-amber-900 mb-4 uppercase tracking-tight"
            style={{ textShadow: "3px 3px 0px rgba(168, 85, 247, 0.3)" }}
          >
            Featured Projects
          </h2>
          <p className="text-xl text-amber-900 font-bold max-w-2xl mx-auto">
            Real-world applications deployed and used by organizations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${project.color} border-8 border-amber-900 shadow-2xl transform ${
                index % 2 === 0 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0 hover:scale-105 transition-all`}
            >
              <div className="bg-amber-50 border-4 border-amber-900 m-2 p-6">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4 bg-yellow-300 border-4 border-amber-900 p-3 shadow">
                  <span className="px-3 py-1 bg-amber-900 text-amber-50 font-black uppercase text-xs">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center bg-red-600 border-2 border-amber-900 shadow text-amber-50 transition-all"
                      aria-label="View on GitHub"
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center bg-teal-500 border-2 border-amber-900 shadow text-amber-50 transition-all"
                      aria-label="View demo"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-black text-amber-900 mb-3 uppercase leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <div className="bg-yellow-200 border-4 border-amber-900 p-3 mb-4 shadow">
                  <p className="text-amber-900 font-bold text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-4 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className="w-2 h-2 bg-red-600 rotate-45 mt-1.5 flex-shrink-0 border-2 border-amber-900" />
                      <span className="text-amber-900 font-bold">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="border-t-4 border-amber-900 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-amber-900 text-amber-50 text-xs font-black uppercase border-2 border-amber-900 shadow"
                      >
                        {tech}
                      </span>
                    ))}
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
