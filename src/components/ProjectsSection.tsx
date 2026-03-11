import { motion } from "framer-motion";

import lulcImg from "@/assets/project-lulc.jpg";
import urbanImg from "@/assets/project-urban.jpg";
import solarImg from "@/assets/project-solar.jpg";
import hotspotImg from "@/assets/project-hotspot.jpg";
import webgisImg from "@/assets/project-webgis.jpg";
import networkImg from "@/assets/project-network.jpg";
import speciesImg from "@/assets/project-species.jpg";

const projects = [
  {
    title: "Land Use / Land Cover Classification",
    image: lulcImg,
    goal: "Classify land cover types using satellite imagery.",
    methods: ["Image preprocessing", "NDVI calculation", "Supervised classification", "Accuracy assessment"],
    tools: ["QGIS", "Python", "Google Earth Engine"],
    data: ["Sentinel-2", "Landsat"],
  },
  {
    title: "Urban Growth Analysis",
    image: urbanImg,
    goal: "Analyze urban expansion over time using change detection.",
    methods: ["Change detection", "Raster differencing", "Spatial statistics"],
    tools: ["QGIS", "ArcGIS Pro", "Python"],
    data: ["Landsat time-series", "Population datasets"],
  },
  {
    title: "Solar Farm Site Suitability",
    image: solarImg,
    goal: "Identify optimal sites for solar farms using weighted overlay analysis.",
    methods: ["Weighted overlay", "Multi-criteria analysis", "Raster calculator"],
    tools: ["QGIS", "Python"],
    data: ["Solar radiation", "Transmission lines", "Land cover", "Slope"],
  },
  {
    title: "Hotspot Analysis",
    image: hotspotImg,
    goal: "Identify spatial clusters using kernel density and Getis-Ord Gi*.",
    methods: ["Kernel density", "Getis-Ord Gi*", "Spatial autocorrelation"],
    tools: ["ArcGIS Pro", "QGIS", "Python"],
    data: ["Environmental risk data"],
  },
  {
    title: "WebGIS Interactive Map",
    image: webgisImg,
    goal: "Build an interactive web map of renewable energy projects.",
    methods: ["Layer toggles", "Popups", "GeoJSON rendering", "Map controls"],
    tools: ["Leaflet", "OpenLayers", "JavaScript"],
    data: ["GeoJSON", "Renewable energy datasets"],
  },
  {
    title: "Network Analysis & Routing",
    image: networkImg,
    goal: "Optimize routes for transport or emergency services.",
    methods: ["Shortest path algorithm", "Network topology"],
    tools: ["QGIS", "Python", "pgRouting"],
    data: ["Road networks", "Service points"],
  },
  {
    title: "Species Distribution Modeling",
    image: speciesImg,
    goal: "Predict habitat suitability using MaxEnt and machine learning.",
    methods: ["MaxEnt modeling", "Climate analysis", "Habitat prediction"],
    tools: ["Python", "QGIS"],
    data: ["Climate layers", "Elevation", "Land cover"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
            Case Studies
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Portfolio Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.goal}
                </p>

                <div className="mb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    Methods
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.methods.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    Tools
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
