import { Home, User, Briefcase, Code, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-professional.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Briefcase, label: "Services", href: "#services" },
    { icon: Code, label: "Work", href: "#work" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-sidebar-background border-r border-sidebar-border transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col items-center py-12 px-8">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h2 className="text-2xl font-bold text-foreground mb-2">Your Name</h2>
          <p className="text-sm text-muted-foreground mb-8 text-center">
            UI/UX Designer & Developer
          </p>

          {/* Navigation */}
          <nav className="w-full space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent rounded-lg transition-all duration-200"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-8 text-xs text-muted-foreground text-center">
            <p>© 2024 All rights reserved</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
