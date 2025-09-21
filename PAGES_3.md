## **src/pages/About.tsx**
```typescript
import { Users, Award, Globe, Shield, ArrowRight, Star, CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "8+", icon: Award },
    { label: "Satisfied Customers", value: "10,000+", icon: Users },
    { label: "Countries Served", value: "50+", icon: Globe },
    { label: "Success Rate", value: "99.9%", icon: Star }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize your data security and privacy with enterprise-grade encryption and secure protocols."
    },
    {
      icon: Star,
      title: "Quality Excellence",
      description: "Delivering exceptional service quality with attention to detail and professional standards."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations."
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Consistent, dependable service delivery with guaranteed results and ongoing support."
    }
  ];

  const team = [
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      experience: "15+ years in IT consulting",
      description: "Expert in Windows systems and enterprise solutions"
    },
    {
      name: "Sarah Johnson",
      role: "Technical Director",
      experience: "12+ years in system administration", 
      description: "Specializes in software deployment and optimization"
    },
    {
      name: "David Rodriguez",
      role: "Senior Support Manager",
      experience: "10+ years in technical support",
      description: "Leads our customer support and service delivery teams"
    }
  ];

  const whyChooseUs = [
    "Certified professionals with extensive experience",
    "24/7 customer support and service availability",
    "Secure, encrypted connections for all services",
    "100% satisfaction guarantee on all work",
    "Competitive pricing with transparent billing",
    "Fast turnaround times and efficient delivery"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About VirtualTech Pro
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Leading provider of professional virtual computer services, trusted by thousands 
            of customers worldwide for reliable, secure, and efficient technical solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2016, VirtualTech Pro began as a small team of passionate IT professionals 
                who recognized the growing need for reliable remote computer services. What started as 
                a simple Windows activation service has evolved into a comprehensive platform offering 
                complete virtual computer solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we serve customers in over 50 countries, providing everything from software 
                installation to complex system optimizations. Our commitment to quality, security, 
                and customer satisfaction has made us a trusted name in the virtual computer services industry.
              </p>
              <Button className="bg-gradient-primary hover:opacity-90 shadow-button">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center border-border hover:shadow-card-hover transition-all duration-300">
                    <CardHeader className="pb-2">
                      <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                      <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-border hover:shadow-card-hover transition-all duration-300">
                  <CardHeader>
                    <div className="bg-gradient-primary rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-button">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to providing exceptional virtual computer services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="bg-gradient-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-button">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{member.experience}</p>
                  <p className="text-sm text-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose VirtualTech Pro?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with exceptional customer service to deliver 
                results that exceed expectations. Here's what sets us apart from the competition.
              </p>
              
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-primary border-0 shadow-card-hover">
              <CardContent className="p-8 text-center">
                <Star className="h-16 w-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-blue-100 mb-6">
                  Join thousands of satisfied customers who trust VirtualTech Pro 
                  for their computer service needs.
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10">
                    View Our Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
```