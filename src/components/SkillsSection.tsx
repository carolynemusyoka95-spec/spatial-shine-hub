import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "GIS",
    skills: ["QGIS", "ArcGIS", "ArcGIS Pro", "ERDAS Imagine"],
  },
  {
    title: "Remote Sensing",
    skills: ["Landsat", "Sentinel", "Google Earth Engine"],
  },
  {
    title: "Programming",
    skills: ["Python", "GDAL", "Rasterio", "GeoPandas"],
  },
  {
    title: "WebGIS",
    skills: ["Leaflet", "OpenLayers", "Mapbox"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
            Technical Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card"
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-foreground font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
