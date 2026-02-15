import { Mail, MessageCircle, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "zaidfuad91@gmail.com",
      href: "mailto:zaidfuad91@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+49 152 1288 3712",
      href: "https://wa.me/4915212883712",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Braunschweig, Germany",
      href: "https://maps.google.com/?q=Braunschweig,Germany",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/", label: "GitHub" },
    { icon: Mail, href: "mailto:zaidfuad91@gmail.com", label: "Email" },
    { icon: MessageCircle, href: "https://wa.me/4915212883712", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold mb-3 uppercase tracking-[0.2em] text-xs">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-8 bg-background rounded-sm border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <info.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold mb-3 text-foreground text-lg">{info.title}</h3>
              <p className="text-muted-foreground text-sm font-light">{info.value}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-10 border-t border-border/30">
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-11 h-11 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-center text-muted-foreground/60 text-xs mt-6 pb-4">
          © {new Date().getFullYear()} Zaid Fuad Kabba. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
