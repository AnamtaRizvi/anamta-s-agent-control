import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
  { icon: Github, label: "GitHub", href: "#", color: "hover:text-foreground" },
  { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-sky-400" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com", color: "hover:text-cosmic-pink" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(280_60%_15%/0.3),transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="cosmic-gradient-text">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Interested in working together or just want to say hi? 
            I'd love to hear from you.
          </p>

          {/* Main CTA */}
          <div className="cosmic-border rounded-2xl p-8 mb-8">
            <Mail className="w-12 h-12 text-cosmic-purple mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              Get in Touch
            </h3>
            <p className="text-muted-foreground mb-6">
              Drop me an email and I'll get back to you as soon as possible.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:opacity-90 text-white px-8"
              onClick={() => window.location.href = "mailto:hello@example.com"}
            >
              <Send className="w-4 h-4 mr-2" />
              Send Email
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground transition-all hover:bg-muted/80 ${link.color}`}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-muted-foreground text-sm mt-12">
            Based in New Jersey, USA • Available for remote opportunities worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
