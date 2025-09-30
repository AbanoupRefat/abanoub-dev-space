import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      value: "linkedin.com/in/abanoubrefat",
      href: "https://www.linkedin.com/in/abanoubrefat",
    },
    {
      icon: Github,
      label: t("contact.github"),
      value: "github.com/AbanoupRefat",
      href: "https://github.com/AbanoupRefat",
    },
    {
      icon: MessageCircle,
      label: t("contact.whatsapp"),
      value: "+20 101 774 7943",
      href: "https://wa.me/201017747943",
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">{t("contact.title")}</span>
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Contact Information */}
          <Card className="rounded-2xl border-border/50 animate-fade-in-up">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold mb-6">{t("contact.directContact")}</h2>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <method.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground/70">
                          {method.label}
                        </div>
                        <div className="text-sm font-semibold">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

          <Card className="rounded-2xl border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-xl font-bold">{t("about.getInTouch")}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {t("contact.subtitle")}
                </p>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
