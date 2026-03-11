import { Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-accent" />
          <span className="font-display text-lg font-semibold text-primary-foreground">
            Carolyne Musyoka
          </span>
        </div>
        <p className="text-primary-foreground/60 text-sm font-body mb-6">
          GIS & Remote Sensing Portfolio — Spatial Data Analysis | Environmental GIS | Web Mapping
        </p>
        <a
          href="mailto:contact@example.com"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm transition-colors"
        >
          <Mail className="w-4 h-4" />
          Get in Touch
        </a>
      </div>
    </footer>
  );
};

export default Footer;
