import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@yourname.com",
      href: "mailto:hello@yourname.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold mb-3 uppercase tracking-[0.2em] text-xs">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info) => (
            <div key={info.title} className="text-center p-8 bg-background rounded-sm border border-border/50 hover:border-primary/20 transition-all hover:shadow-lg">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <info.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold mb-3 text-foreground text-lg">{info.title}</h3>
              <a
                href={info.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-light"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-background p-12 rounded-sm border border-border/50">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  required 
                  className="bg-secondary/20 border-border/50 h-12 rounded-sm"
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-secondary/20 border-border/50 h-12 rounded-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Input 
                id="subject" 
                placeholder="Subject" 
                required 
                className="bg-secondary/20 border-border/50 h-12 rounded-sm"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                placeholder="Message"
                rows={6}
                required
                className="bg-secondary/20 border-border/50 resize-none rounded-sm"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto gap-2 px-8 py-6 text-base rounded-sm shadow-lg hover:shadow-xl transition-all">
              <Send className="h-5 w-5" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
