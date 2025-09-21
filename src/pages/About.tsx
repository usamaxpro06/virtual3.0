import { Users, Award, Clock, Shield, Target, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  const stats = [
    { icon: Users, number: "1000+", label: t('about.statsLabels.happyClients') },
    { icon: Clock, number: "5000+", label: t('about.statsLabels.hoursOfService') },
    { icon: Award, number: "99.9%", label: t('about.statsLabels.successRate') },
    { icon: Shield, number: "100%", label: t('about.statsLabels.secureConnections') }
  ];

  const values = [
    {
      icon: Target,
      title: t('about.values.professionalExcellence.title'),
      description: t('about.values.professionalExcellence.description')
    },
    {
      icon: Shield,
      title: t('about.values.securityFirst.title'),
      description: t('about.values.securityFirst.description')
    },
    {
      icon: Heart,
      title: t('about.values.customerSatisfaction.title'),
      description: t('about.values.customerSatisfaction.description')
    },
    {
      icon: Clock,
      title: t('about.values.fastReliable.title'),
      description: t('about.values.fastReliable.description')
    }
  ];

  const team = [
    {
      name: t('about.team.alex.name'),
      role: t('about.team.alex.role'),
      experience: t('about.team.alex.experience'),
      description: t('about.team.alex.description')
    },
    {
      name: t('about.team.sarah.name'),
      role: t('about.team.sarah.role'),
      experience: t('about.team.sarah.experience'),
      description: t('about.team.sarah.description')
    },
    {
      name: t('about.team.mike.name'),
      role: t('about.team.mike.role'),
      experience: t('about.team.mike.experience'),
      description: t('about.team.mike.description')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.ourStory')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('about.storyParagraph1')}</p>
                <p>{t('about.storyParagraph2')}</p>
                <p>{t('about.storyParagraph3')}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.coreValues')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.coreValuesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.meetOurTeam')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.teamDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.experience} experience</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.whyChooseUs')}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">{t('about.whatSetsUsApart')}</h3>
                  <ul className="space-y-4">
                    {[
                      t('about.whatSetsUsApartItems.certified'),
                      t('about.whatSetsUsApartItems.secure'),
                      t('about.whatSetsUsApartItems.transparent'),
                      t('about.whatSetsUsApartItems.support'),
                      t('about.whatSetsUsApartItems.fast'),
                      t('about.whatSetsUsApartItems.comprehensive')
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">{t('about.readyToExperience')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('about.readyToExperienceDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90">
                  <Link to="/contact">{t('services.getFreeQuote')}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">{t('nav.services')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;