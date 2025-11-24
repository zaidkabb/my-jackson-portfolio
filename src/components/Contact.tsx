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
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info) => (
            <div key={info.title} className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">{info.title}</h3>
              <a
                href={info.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {info.value}
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-secondary/20 p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  required 
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-background"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Input 
                id="subject" 
                placeholder="Subject" 
                required 
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                id="message"
                placeholder="Message"
                rows={6}
                required
                className="bg-background resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
