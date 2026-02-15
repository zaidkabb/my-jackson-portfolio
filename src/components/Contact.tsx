import { Mail, MessageCircle, MapPin } from "lucide-react";

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
    </section>
  );
};

export default Contact;
