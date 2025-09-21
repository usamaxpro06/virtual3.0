import { CheckCircle, Monitor, Download, Database, Settings, Wrench, Shield, Code, Palette, Gamepad2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Monitor,
      title: t('services.windowsActivation'),
      description: t('services.windowsActivationDesc'),
      features: [
        "Windows 10/11 activation",
        "Office suite activation",
        "Genuine license verification",
        "Instant activation process",
        "Lifetime support"
      ],
      price: "Starting at $10",
      popular: true
    },
    {
      icon: Download,
      title: t('services.softwareInstallation'),
      description: t('services.softwareInstallationDesc'),
      features: [
        "Application installation",
        "Driver updates",
        "System optimization",
        "Security software setup",
        "Custom configuration"
      ],
      price: "Starting at $15",
      popular: false
    },
    {
      icon: Database,
      title: t('services.dataEntry'),
      description: t('services.dataEntryDesc'),
      features: [
        "Excel data entry",
        "Database management",
        "Document digitization",
        "Form processing",
        "Quality assurance"
      ],
      price: "Starting at $5/hour",
      popular: false
    },
    {
      icon: Settings,
      title: t('services.systemSetup'),
      description: t('services.systemSetupDesc'),
      features: [
        "Fresh OS installation",
        "Performance optimization",
        "Security configuration",
        "Software bundle setup",
        "User account management"
      ],
      price: "Starting at $25",
      popular: false
    },
    {
      icon: Wrench,
      title: t('services.technicalSupport'),
      description: t('services.technicalSupportDesc'),
      features: [
        "Problem diagnosis",
        "System troubleshooting",
        "Performance issues",
        "Software conflicts",
        "Hardware consultation"
      ],
      price: "Starting at $20",
      popular: false
    },
    {
      icon: Shield,
      title: t('services.security'),
      description: t('services.securityDesc'),
      features: [
        "Antivirus installation",
        "Malware removal",
        "Security updates",
        "System cleanup",
        "Backup setup"
      ],
      price: "Starting at $30",
      popular: false
    },
    {
      icon: Code,
      title: t('services.webDevelopment'),
      description: t('services.webDevelopmentDesc'),
      features: [
        "Custom website design",
        "Responsive development",
        "E-commerce solutions",
        "SEO optimization",
        "Maintenance & support"
      ],
      price: "Starting at $200",
      popular: false
    },
    {
      icon: Palette,
      title: t('services.logoDesigning'),
      description: t('services.logoDesigningDesc'),
      features: [
        "Custom logo creation",
        "Brand identity design",
        "Multiple design concepts",
        "Vector file formats",
        "Unlimited revisions"
      ],
      price: "Starting at $50",
      popular: false
    },
    {
      icon: Gamepad2,
      title: t('services.gameInstallation'),
      description: t('services.gameInstallationDesc'),
      features: [
        "Game installation & setup",
        "Performance optimization",
        "Graphics configuration",
        "Mod installation",
        "Troubleshooting support"
      ],
      price: "Starting at $12",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('services.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-full">
                      {t('common.mostPopular')}
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button variant="default" asChild className="bg-gradient-primary hover:opacity-90">
                      <Link to="/contact">{t('services.getQuote')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.howItWorks')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.howItWorksDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: t('services.contactUsStep'),
                description: t('services.contactUsStepDesc')
              },
              {
                step: "2",
                title: t('services.getQuoteStep'),
                description: t('services.getQuoteStepDesc')
              },
              {
                step: "3",
                title: t('services.secureConnection'),
                description: t('services.secureConnectionDesc')
              },
              {
                step: "4",
                title: t('services.serviceDelivery'),
                description: t('services.serviceDeliveryDesc')
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('services.readyToFix')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('services.readyToFixDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">{t('services.getFreeQuote')}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/pricing">{t('services.viewPricing')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;