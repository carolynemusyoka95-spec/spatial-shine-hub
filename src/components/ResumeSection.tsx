import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Github, Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
            Background
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Resume
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-earth flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Education
              </h3>
            </div>
            <div className="pl-4 border-l-2 border-accent/30 space-y-4">
              <div>
                <p className="font-body font-semibold text-foreground">
                  BA Geography
                </p>
                <p className="text-muted-foreground text-sm">
                  Dartmouth College
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Experience
              </h3>
            </div>
            <div className="pl-4 border-l-2 border-accent/30 space-y-3">
              {[
                "7+ years GIS & Remote Sensing",
                "Spatial Analysis & Modeling",
                "Web GIS Development",
                "Python Geospatial Automation",
              ].map((item) => (
                <p key={item} className="text-foreground text-sm font-body flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-earth text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-body font-semibold hover:bg-secondary transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Maps
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-body font-semibold hover:bg-secondary transition-colors"
          >
            <FileText className="w-4 h-4" />
            Python Notebooks
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
