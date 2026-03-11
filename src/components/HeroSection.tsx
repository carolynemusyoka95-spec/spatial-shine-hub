import { motion } from "framer-motion";
import heroImage from "@/assets/hero-satellite.jpg";
import { MapPin, Code, Satellite, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Satellite view of Earth terrain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4">
            GIS & Remote Sensing Specialist
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Carolyne Musyoka
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Geographer trained at Dartmouth College with 7+ years of experience in
            GIS, remote sensing, and spatial data analysis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: MapPin, label: "Spatial Modeling" },
            { icon: Satellite, label: "Satellite Analysis" },
            { icon: Globe, label: "Environmental GIS" },
            { icon: Code, label: "Python Automation" },
          ].map((item) => (
            <span
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm font-body"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-earth text-primary-foreground font-body font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
