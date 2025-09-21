import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle, Star, Users, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SearchBar from "@/components/SearchBar";

const Homepage = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t('services.windowsActivation'),
      description: "Professional Windows activation services for all versions",
      price: "From $10",
    },
    {
      title: t('services.softwareInstallation'),
      description: "Expert software installation and configuration",
      price: "From $15",
    },
    {
      title: t('services.dataEntry'),
      description: "Accurate and fast data entry services",
      price: "From $5/hour",
    },
    {
      title: t('services.systemSetup'),
      description: "Complete computer setup and optimization",
      price: "From $25",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "VirtualTech Pro saved me hours of frustration. Their Windows activation service was quick and professional.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Freelancer",
      content: "Excellent data entry service! They handled my project with precision and delivered on time.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Student",
      content: "Affordable and reliable. The software installation service worked perfectly for my needs.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: t('faq.questions.remoteAccess'),
      answer: t('faq.answers.remoteAccess'),
    },
    {
      question: t('faq.questions.dataSafety'),
      answer: t('faq.answers.dataSafety'),
    },
    {
      question: t('faq.questions.serviceTime'),
      answer: t('faq.answers.serviceTime'),
    },
    {
      question: t('faq.questions.satisfaction'),
      answer: t('faq.answers.satisfaction'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="text-sm font-medium text-white">{t('hero.trustedBy')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              {t('hero.title')}
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            
            {/* Search Bar */}
            <div className="mb-8">
              <SearchBar placeholder={t('hero.searchPlaceholder')} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" variant="secondary" asChild className="text-primary hover:text-primary/80 px-8 py-4 text-lg font-semibold shadow-button">
                <Link to="/services">
                  {t('hero.exploreServices')} <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg backdrop-blur-sm">
                <Link to="/pricing">{t('hero.premiumPackages')}</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white/90">
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-full bg-white/10">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">{t('hero.enterpriseSecurity')}</div>
                  <div className="text-sm text-white/70">{t('hero.bankGradeEncryption')}</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-full bg-white/10">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">{t('hero.support247')}</div>
                  <div className="text-sm text-white/70">{t('hero.lightningFastResponse')}</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-full bg-white/10">
                  <Users className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg">{t('hero.clientsCount')}</div>
                  <div className="text-sm text-white/70">{t('hero.trustedWorldwide')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-24 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Premium Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{t('hero.enterpriseGradeSolutions')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('hero.enterpriseGradeDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-muted/30 hover:from-primary/5 hover:to-accent/5">
                <CardContent className="p-8">
                  <div className="mb-4 p-3 rounded-xl bg-gradient-primary w-fit">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                      <Link to="/contact#contact-methods">{t('services.contactUs')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg font-semibold shadow-button">
              <Link to="/services">
                View All Premium Services <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by thousands of satisfied customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('faq.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('faq.description')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground ml-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their computer needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;