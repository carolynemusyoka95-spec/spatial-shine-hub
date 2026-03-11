import { motion } from "framer-motion";

const codeSnippet = `import geopandas as gpd

# Load spatial data
roads = gpd.read_file("roads.shp")
hospitals = gpd.read_file("hospitals.shp")

# Create 5km service area buffers
buffer = hospitals.buffer(5000)

# Find roads within service areas
service_area = gpd.overlay(
    roads, buffer, how='intersection'
)

# Visualize results
service_area.plot()`;

const CodeSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-[0.25em] uppercase mb-3">
            Python Geospatial
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Code Sample
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Spatial analysis workflow — data processing, spatial joins, and buffer analysis using GeoPandas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-elevated"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-foreground">
            <span className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="w-3 h-3 rounded-full bg-accent/60" />
            <span className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="ml-3 text-xs text-primary-foreground/50 font-mono">
              service_area_analysis.py
            </span>
          </div>
          <pre className="p-6 bg-foreground overflow-x-auto">
            <code className="text-sm text-primary-foreground/90 font-mono leading-relaxed">
              {codeSnippet}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeSection;
